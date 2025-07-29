"use client";
import useSWR from "swr";
export default function Admin() {
  const { data, error, isLoading } = useSWR("/api/bookings", (url) => fetch(url).then(res => res.json()));
  if (error) return <div>Error ...</div>;
  if (isLoading) return <div>Loading ...</div>;
  return (
    <div className="my-[50px] w-[1458px] mx-auto p-[20px] border-[1px] border-[#1D3B36] rounded-[12px]">
      <h2 className="text-[#8C5F2A] text-[36px] font-bold">APPOINTMENT MANAGER</h2>
      <table className="text-left w-full divide-y divide-[#8C5F2A] mx-auto">
        <thead>
          <tr className="font-bold text-[#8C5F2A] text-[24px]">
            <th className="text-left py-3">Appt. Code</th>
            <th className="text-left py-3">Full Name</th>
            <th className="text-left py-3">Phone No.</th>
            <th className="text-left py-3">Email</th>
            <th className="text-left  py-3">Date & Time</th>
            <th className="text-left  py-3">Technician</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((b: any) => {
              const formatedDateTime = b.date_time ? new Date(b.date_time).toLocaleString('en-US', {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit"
              }) : "";
              const formatted = formatedDateTime.replace(" at ", " - ");
              return (
                <tr key={b.id} className="hover:bg-gray-100">
                  <td className="border-b-gray-400 border-b-[1px] py-3">{b.appointment_code}</td>
                  <td className="border-b-gray-400 border-b-[1px] py-3">{b.first_name}</td>
                  <td className="border-b-gray-400 border-b-[1px] py-3">{b.last_name}</td>
                  <td className="border-b-gray-400 border-b-[1px] py-3">{b.phone}</td>
                  <td className="border-b-gray-400 border-b-[1px] py-3">{b.email}</td>
                  <td className="border-b-gray-400 border-b-[1px] py-3">{formatted}</td>
                  <td className="border-b-gray-400 border-b-[1px] py-3">{b.technician}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
