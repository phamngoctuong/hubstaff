'use client';
import Image from "next/image";
import { useState } from "react";
export default function Scheduling() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    date_time: "",
    technician: ""
  });
  const [error, setError] = useState("");
  const handChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div className="min-h-screen">
      <div className="relative w-screen h-screen">
        <Image src={`/images/banner.png`} fill alt="Banner" />
        <div className="absolute left-1/2 -translate-1/2 w-[1140px] h-[311px] bg-[#000000]/50 bottom-[80px] text-center px-[32px]">
          <h1 className="text-[72px] font-bold text-white">Welcome to Spa Nails</h1>
          <p className="text-[32px] font-bold text-white">Where great service meets comfort and care. Book your appointment today and experience personalized attention from a team that puts you first.</p>
        </div>
      </div>
      <div className="py-[75px]">
        <form className="py-[40px] px-[75px] grid grid-cols-2 gap-[20px] mx-auto w-[1058px] bg-white rounded-[16px] border-[1px] border-solid border-[#1D3B36]">
          <h2 className="col-span-2 text-[32px] text-[#8C5F2A] font-bold text-center">Please complete the form to schedule your appointment.</h2>
          <div>
            <input
              name="first_name"
              placeholder="First Name *"
              required
              className="w-full rounded-[12px] border-[#1D3B36] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53]"
            />
          </div>
          <div>
            <input
              name="last_name"
              placeholder="Last Name *"
              required
              className="w-full rounded-[12px] border-[#1D3B36] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] "
            />
          </div>
          <div>
            <input
              name="email"
              placeholder="Email *"
              required
              className="w-full rounded-[12px] border-[#1D3B36] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] "
            />
          </div>
          <div>
            <input
              name="phone"
              placeholder="Phone Number *"
              required
              className="w-full rounded-[12px] border-[#1D3B36] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] "
            />
          </div>
          <div className="relative">
            <div
              className="w-full h-full cursor-pointer rounded-[12px] border-[#1D3B36] border-[1px] bg-[#EFEFEF] text-[#444C53]"
              onClick={() => document.getElementById("datetime")?.click()}
            >
              <span className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#444C53]">
                {
                  form.date_time ? new Date(form.date_time).toLocaleString('en-US', {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                  }).replace(" at ", " - ") : "Select Date & Time *"
                }
              </span>
              <svg className="absolute right-[5px] top-1/2 -translate-1/2" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L7 7L12 2" stroke="#1D3B36" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <input
              id="datetime"
              name="date_time"
              type="datetime-local"
              value={`July 25, 2025 - 10:30 AM`}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handChange}
            />
          </div>
          <div className="relative">
              <select 
                className="appearance-none w-full rounded-[12px] border-[#1D3B36] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] "
                name="technician" 
                id="technician"
                onChange={handChange}
              >
                <option value="">Select Technician (optional)</option>
                <option value="Jessica Tran">Jessica Tran</option>
                <option value="Michael Le">Michael Le</option>
                <option value="Anna Pham">Anna Pham</option>
            </select>
            <svg className="absolute right-[5px] top-1/2 -translate-1/2" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L7 7L12 2" stroke="#1D3B36" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </div>
          <div className="col-span-2 text-center">
            <button className="text-[#1D3B36] font-bold text-center text-[18px] bg-[#C6E100] rounded-[8px] w-[200px] h-[47px] hover:bg-[#aab800]">Submit Request</button>
          </div>
        </form>
      </div>
      <p className="bg-[#8C5F2A] text-[22px] text-white text-center h-[74px] flex items-center justify-center">Website and Technology Powered by ©BookAndReview.com. All Rights Reserved.</p>
    </div>
  );
}
