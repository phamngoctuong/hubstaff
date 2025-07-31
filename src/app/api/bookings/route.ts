import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
    const [results] = await db.query("SELECT * FROM bookings ORDER BY created_at DESC");
    return NextResponse.json(results);
}
