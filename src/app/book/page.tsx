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
    router.push(`/thank-you?code=${data.code}&dateTime=${form.date_time}&technician=${form.technician}`);
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
