import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { sendSMS } from "@/app/lib/twilio";
export async function POST(req: Request) {
  const data = await req.json();
  const { first_name, last_name, phone, email, date_time, technician } = data;
  // Validate required fields
  if (!first_name || !last_name || !phone || !email || !date_time) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please check email format." }, { status: 400 });
  }
  // Validate phone format
  let formatedPhone = phone;
  if (phone.length === 10) {
    formatedPhone = `+1${phone}`;
  } else if (phone.length === 11 && !phone.startsWith('+')) {
    formatedPhone = `+${phone}`;
  }
  const phoneRegex = /^\+\d{11}$/;
  if (!phoneRegex.test(formatedPhone)) {
    return NextResponse.json({ error: "Please check phone number format." }, { status: 400 });
  }
  // Anti Spam Booking last 2 minutes
  const [recentBooking] = await db.query("SELECT * FROM bookings WHERE phone = ? AND created_at >= NOW() - INTERVAL 2 MINUTE", [formatedPhone]);
  if (Array.isArray(recentBooking) && recentBooking.length > 0) {
    return NextResponse.json({ error: "You have already booked recently. Please try again later." }, { status: 400 });
  }
  // Generate appoitment code
  const appCode = `APT${Math.floor(1000 + Math.random() * 9000)}`;
  // Save to Database
  await db.query("INSERT INTO bookings (appointment_code,first_name,last_name,phone,email,date_time,technician) VALUES (?,?,?,?,?,?,?)", [appCode, first_name, last_name, formatedPhone, email, date_time, technician]);
  // Send SMS Twilio
  const smsContent = `Thank you for booking with Spa Nails! Your appointment code is ${appCode}, see you on ${date_time} with ${technician}`;
  await sendSMS(formatedPhone,smsContent);
  return NextResponse.json({ success: true, code: appCode });
}
