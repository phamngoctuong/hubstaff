import Link from "next/link";
import { db } from "./lib/db";
export default async function Home() {
  const [recentBooking] = await db.query("SELECT * FROM bookings");
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={`/book`}>Book</Link>
      <Link href={`/api/bookings`}>API Bookings</Link>
      {JSON.stringify(recentBooking)}
    </div>
  );
}
