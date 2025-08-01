"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const bookSchema = z.object({
  first_name: z.string().nonempty("This field is required"),
  last_name: z.string().nonempty("This field is required"),
  phone: z.string().nonempty("This field is required"),
  email: z.string().nonempty("This field is required"),
  date_time: z.string().nonempty("This field is required"),
  technician: z.string().optional(),
});
type BookFormData = z.infer<typeof bookSchema>;
export default function Book() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      date_time: "",
      technician: "",
    },
  });
  const date_time = watch("date_time"); // Theo dõi giá trị của date_time
  const onSubmit = async (data: BookFormData) => {
    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (!res.ok) {
      alert(responseData.error);
      return;
    }
    router.push(`/thank-you?code=${responseData.code}&dateTime=${data.date_time}&technician=${data.technician}`);
  };
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
      <div className="py-[75px] px-[10px] md:px-0">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="py-[20px] md:py-[40px] px-[25px] md:px-[75px] flex flex-col md:grid md:grid-cols-2 gap-[20px] mx-auto w-full md:w-[1058px] bg-white rounded-[16px] border-[1px] border-solid border-[#1D3B36]"
        >
          <h2 className="col-span-2 text-[18px] md:text-[32px] text-[#8C5F2A] font-bold text-center">
            Please complete the form to schedule your appointment.
          </h2>
          <div>
            <input
              type="text"
              {...register("first_name")}
              placeholder="First Name *"
              className={`w-full rounded-[12px] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] ${
                errors.first_name ? "border-red-500" : "border-[#1D3B36]"
              }`}
            />
            {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>}
          </div>
          <div>
            <input
              type="text"
              {...register("last_name")}
              placeholder="Last Name *"
              className={`w-full rounded-[12px] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] ${
                errors.last_name ? "border-red-500" : "border-[#1D3B36]"
              }`}
            />
            {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email *"
              className={`w-full rounded-[12px] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] ${
                errors.email ? "border-red-500" : "border-[#1D3B36]"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone Number *"
              className={`w-full rounded-[12px] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] ${
                errors.phone ? "border-red-500" : "border-[#1D3B36]"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div className={`relative h-[40px] ${errors.date_time ? "mb-[20px]": ""}`}>
            <div
              className={`min-h-[40px] w-full h-full cursor-pointer rounded-[12px] border-[1px] bg-[#EFEFEF] text-[#444C53] ${
                errors.date_time ? "border-red-500" : "border-[#1D3B36]"
              }`}
              onClick={() => document.getElementById("datetime")?.click()}
            >
              <span className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#444C53]">
                {date_time
                  ? new Date(date_time).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    }).replace(" at ", " - ")
                  : "Select Date & Time *"}
              </span>
              <svg
                className="absolute right-0 top-1/2 -translate-1/2"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 2L7 7L12 2" stroke="#1D3B36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <input
              id="datetime"
              type="datetime-local"
              {...register("date_time")}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            {errors.date_time && <p className="text-red-500 text-sm mt-1">{errors.date_time.message}</p>}
          </div>
          <div className="relative h-[40px]">
            <svg
              className="absolute right-0 top-1/2 -translate-1/2"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 2L7 7L12 2" stroke="#1D3B36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <select
              {...register("technician")}
              className={`appearance-none w-full rounded-[12px] border-[1px] bg-[#EFEFEF] text-[#444C53] px-[15px] py-[7px] placeholder:text-[#444C53] ${
                errors.technician ? "border-red-500" : "border-[#1D3B36]"
              }`}
              id="technician"
            >
              <option value="">Select Technician (optional)</option>
              <option value="Jessica Tran">Jessica Tran</option>
              <option value="Michael Le">Michael Le</option>
              <option value="Anna Pham">Anna Pham</option>
            </select>
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="text-[#1D3B36] font-bold text-center text-[18px] bg-[#C6E100] rounded-[8px] w-[200px] h-[47px] hover:bg-[#aab800]"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}