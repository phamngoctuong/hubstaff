"use client";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
function AppointmentDetails() {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get("code");
  const dateTime = params.get("dateTime");
  const technician = params.get("technician");
  const formatedDateTime = dateTime
    ? new Date(dateTime).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
    : "";
  const formatted = formatedDateTime.replace(" at ", " - ");
  return (
    <div className="mx-[15px]">
      <div className="w-full md:w-[1058px] my-[40px] md:my-[80px] mx-auto border-[1px] border-[#1D3B36] rounded-[12px] px-[10px] md:px-[70px] py-[40px] text-[18px] md:text-[24px]">
        <h2 className="text-[#8C5F2A] text-[18px] md:text-[32px] font-bold text-center">
          Thank You for Booking with Us!
        </h2>
        <h3 className="text-[#1D3B36] font-bold">Appointment Details:</h3>
        <div> • Appointment Code: {code}</div>
        <div> • Date & Time: {formatted}</div>
        <div> • Technician: {technician}</div>
        <div className="my-[20px]">
          You’ll receive a reminder before your appointment. If you have any
          questions or need to reschedule, feel free to contact us.
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => router.push("/book")}
            className="inline-block w-full md:w-[200px] h-[47px] mt-6 text-[#1D3B36] text-[18px] font-bold bg-[#C6E100] hover:bg-[#8D9F00] transition px-4 py-2 rounded-[8px]"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
export default function Thanks() {
  return (
    <div className="min-h-screen">
      <div className="relative w-screen h-screen">
        <Image src={`/images/banner.png`} fill className="object-cover" alt="Banner" />
        <div className="grid content-center md:block absolute left-1/2 -translate-x-1/2 w-[calc(100%-20px)] md:w-[1140px] h-[280px] md:h-[311px] bg-[#000000]/50 bottom-[80px] text-center px-[25px]">
          <h1 className="text-[36px] md:text-[72px] font-bold text-white">Welcome to Spa Nails</h1>
          <p className="text-[18px] font-normal md:text-[32px] md:font-bold text-white">
            Where great service meets comfort and care. Book your appointment today and experience personalized attention from a team that puts you first.
          </p>
        </div>
      </div>
      {/* 👇 Bọc phần có useSearchParams trong Suspense */}
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <AppointmentDetails />
      </Suspense>
    </div>
  );
}
