<!-- Bước 1: Tạo database -->
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    appointment_code VARCHAR(4) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    email VARCHAR(255) NOT NULL,
    date_time DATETIME NOT NULL,
    technician VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
<!-- Bước 2: Tạo dữ liệu mẫu -->
INSERT INTO `bookings` (`id`, `appointment_code`, `first_name`, `last_name`, `phone`, `email`, `date_time`, `technician`, `created_ad`) VALUES (NULL, 'A123', 'Lionel 1', 'Pham 1', '+10987654321', 'lionel1@gmail.com', '2025-07-26 02:18:18.000000', 'Jessica Tran', current_timestamp());
<!-- Bước 3: Tạo kết nối với database src\app\lib\db.ts -->
import mysql from 'mysql2/promise';
export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});
<!-- Bước 4: Check kết nối với database check src\app\page.tsx -->
import { db } from "./lib/db";
export default async function Home() {
  const [recentBooking] = await db.query("SELECT * FROM bookings");
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {JSON.stringify(recentBooking)}
    </div>
  );
}
<!-- Bước 5: Tạo API book (Method POST /api/book) src\app\api\book\route.ts -->
import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
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
    await db.query("INSERT INTO bookings (appointment_code,first_name,last_name,phone,email,date_time,technician) VALUES (?,?,?,?,?,?,?)",
        [appCode, first_name, last_name, formatedPhone, email, date_time, technician]);
    return NextResponse.json({ success: true, code: appCode });
}
<!-- Bước 6: Test Phương thức Post api/book bằng PostMan -->
<!-- Sửa lỗi đặt sai tên trong database: created_ad chuyển thành created_at -->
Kết quả thêm dữ liệu bằng PostMan: https://prnt.sc/90ojwkvnZQuu
Kêt quả thêm dữ liệu bằng PostMan trong vòng 2 phút với dữ liệu giống như lần đầu sẽ có thông báo https://prnt.sc/naFPpfpuKWog
Kết quả thêm dữ liệu bằng PostMan ngoài vòng 2 phút với dữ liệu giống như trên sẽ có kết quả https://prnt.sc/YV0isUUpbp-i
Sau khi kiểm tra lại yêu cầu thì phần trước đó đã làm đúng yêu cầu rồi nên không cần phải sửa nữa: https://prnt.sc/q4nde40cnNbm
Kêt quả thêm dữ liệu bằng PostMan: https://prnt.sc/8cpeww81_ftw
<!-- Bước 7: Tạo api bookings /api/bookings  src\app\api\bookings\route.ts-->
import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
    const [results] = await db.query("SELECT * FROM bookings ORDER BY created_at DESC");
    return NextResponse.json(results);
}
<!-- Bước 8: Vì đang sử dụng method GET nên có thể, sử dụng PostMan (hoặc trình duyệt) để test đã lấy được dữ liệu. -->
Kết quả test bằng PostMan: https://prnt.sc/UrFoKI1YCAdg
Kết quả Test bằng Browser: https://prnt.sc/uZhn0KziAjtg
<!-- Bước 9: Chúng ta sẽ chuẩn bị giao diện đơn giản để người dùng đăng ký ngay trên trình duyệt trước khi hoàn thiện theo figma  -->
Giao diện đơn giản để người dùng có thể thêm dữ liệu vào https://prnt.sc/acJ2n8AbJmSA
<!-- Bước 10: Xử lý dữ liệu ở page book src\app\book\page.tsx -->
"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function Book() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    date_time: "",
    technician: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if(!res.ok) {
      setError(data.error);
      return;
    }
    router.push(`/thank-you`);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto grid gap-[12px] mt-[50px] w-[600px]">
      <div>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          onChange={handleChange}
          className="block w-full border rounded-[12px]"
        />
      </div>
      <div>
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          onChange={handleChange}
          className="block w-full border rounded-[12px]"
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          required
          onChange={handleChange}
          className="block w-full border rounded-[12px]"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="block w-full border rounded-[12px]"
        />
      </div>
      <div>
        <input
          type="datetime-local"
          name="date_time"
          placeholder="Date Time"
          required
          onChange={handleChange}
          className="block w-full border rounded-[12px]"
        />
      </div>
      <div>
        <select
          name="technician"
          onChange={handleChange}
          className="block w-full border rounded-[12px]"
        >
          <option value="">Select Technician</option>
          <option value="Jessica Tran">Jessica Tran</option>
          <option value="Michael Le">Michael Le</option>
          <option value="Anna Pham">Anna Pham</option>
        </select>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <div className="text-center">
        <button
          type="submit"
          className="inline-block rounded-[12px] bg-blue-600 p-[6px] text-white hover:bg-blue-800"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}
<!-- Bước 11: Thêm dữ liệu và xử lý lỗi thiêt kế dữ liệu thiếu length cho appointment_code độ dài lúc trước là 4  -->
Form thêm dữ liệu tại Front-End: https://prnt.sc/QA6lHKLdLdLb
Kêt quả sau khi thêm dữ liệu: https://prnt.sc/z2eZ55u4sWMC
Chỉnh sửa Database: https://prnt.sc/6NPS6ksUDCBu và https://prnt.sc/M2C_5jCmO68g 
kết quả như mong đợi: https://prnt.sc/4MWZ6ZtN0R5x
<!-- Bước 12: Ta tiếp tục làm trang Thank You -->
Trình bày mẫu sử dụng tailwind và ChatGPT để cho đẹp hơn. https://prnt.sc/sBm2KRcd17xw
<!-- Bước 13:  Test Số điện thoại ảo bằng Curl -->
https://prnt.sc/lDFAGbQaFAaq
<!-- Bước 14: Cập nhật function sendSMS -->
<!-- src\app\lib\twilio.ts -->
import twilio from 'twilio';
const accountSid = process.env.ACCOUNT_SID!;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);
export const sendSMS = (to: string, body: string) =>
  client.messages.create({
    body,
    from: process.env.FROMPHONE,
    to
  });
<!-- src\app\api\book\route.ts -->
Thêm: import { sendSMS } from "@/app/lib/twilio";
// Send SMS Twilio
const smsContent = `Thank you for booking with Spa Nails! Your appointment code is ${appCode}, see you on ${date_time} with ${technician}`;
await sendSMS(formatedPhone,smsContent);
<!-- Bước 15: Sử dụng curl để test -->
Hình ảnh: https://prnt.sc/iQJySdvXevuZ
Hình ảnh người dùng đăng nhập vào Front-End: https://prnt.sc/VJgUytNhH14T
Hình ảnh Test thành công: https://prnt.sc/vdbi8RVhLJZU
Đây là hình ảnh cấu hình sử dụng tài khoản Test bắt đầu bằng AC: https://prnt.sc/gx6WAZtPqH-2
Kết quả cũng đồng thời được ghi vào database: https://prnt.sc/YjGcCBP5k8VN
Đây là kiểm tra kết quả nhận được gửi tin nhắn thành công: https://prnt.sc/9OeRKgEggFYB