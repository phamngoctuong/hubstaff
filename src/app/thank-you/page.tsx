"use client";
import { useSearchParams, useRouter } from "next/navigation";
export default async function Thanks() {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get('code');
  const dateTime = params.get('dateTime');
  const technician = params.get('technician');
  const formatedDateTime = dateTime ? new Date(dateTime).toLocaleString('en-US',{
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }) : "";
  const formatted = formatedDateTime.replace(" at ", " - ");
  return (
    <div className="max-w-md mx-auto mt-16 bg-white rounded-2xl shadow-lg p-6 space-y-4 text-center">
      <div className="text-sm text-gray-500 uppercase tracking-wide">Mã lịch hẹn</div>
      <div className="text-2xl font-semibold text-gray-800">{code}</div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">Thời gian</div>
      <div className="text-lg font-medium text-gray-700">{formatted}</div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">Kỹ thuật viên</div>
      <div className="text-lg font-medium text-gray-700">{technician}</div>
      <div className="mt-4 text-green-600 font-medium">✅ Đã gửi xác nhận qua SMS</div>
      <button
        onClick={() => router.push('/book')}
        className="inline-block mt-6 text-white bg-gray-800 hover:bg-gray-900 transition px-4 py-2 rounded-lg text-sm"
      >
        Quay lại trang đặt lịch
      </button>
    </div>
  );
}
