"use client";
import useSWR from "swr";
export default function Admin() {
  const {data, error,isLoading } = useSWR("/api/bookings", (url) => fetch(url).then(res => res.json()));
  if(error) return <div>Error ...</div>;
  if(isLoading) return <div>Loading ...</div>;
  return (
    <div className="mt-[50px]">
      <table className="w-[1200px] shadow mx-auto">
        <thead>
          <th className="text-left text-gray-400 px-6 py-3">Appointment Code</th>
          <th className="text-left text-gray-400 px-6 py-3">Full Name</th>
          <th className="text-left text-gray-400 px-6 py-3">Phone</th>
          <th className="text-left text-gray-400 px-6 py-3">Email</th>
          <th className="text-left text-gray-400 px-6 py-3">Date & Time</th>
          <th className="text-left text-gray-400 px-6 py-3">Technician</th>
        </thead>
        <tbody>
          {
            data.map((b:any) => {
              const formatedDateTime = b.date_time ? new Date(b.date_time).toLocaleString('en-US',{
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit"
              }) : "";
              const formatted = formatedDateTime.replace(" at ", " - ");
              return (
                <tr key={b.id} className="hover:bg-gray-100">
                  <td className="text-gray-400 px-6 py-3">{b.appointment_code}</td>
                  <td className="text-gray-400 px-6 py-3">{b.first_name}</td>
                  <td className="text-gray-400 px-6 py-3">{b.last_name}</td>
                  <td className="text-gray-400 px-6 py-3">{b.phone}</td>
                  <td className="text-gray-400 px-6 py-3">{b.email}</td>
                  <td className="text-gray-400 px-6 py-3">{formatted}</td>
                  <td className="text-gray-400 px-6 py-3">{b.technician}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
