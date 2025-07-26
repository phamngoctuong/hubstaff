import Link from "next/link";
export default async function Thanks() {
  return (
    <div className="max-w-md mx-auto mt-16 bg-white rounded-2xl shadow-lg p-6 space-y-4 text-center">
      <div className="text-sm text-gray-500 uppercase tracking-wide">Mã lịch hẹn</div>
      <div className="text-2xl font-semibold text-gray-800">APTXXXX</div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">Thời gian</div>
      <div className="text-lg font-medium text-gray-700">July 25, 2025 - 10:30 AM</div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">Kỹ thuật viên</div>
      <div className="text-lg font-medium text-gray-700">Michael Le</div>
      <div className="mt-4 text-green-600 font-medium">✅ Đã gửi xác nhận qua SMS</div>
      <Link
        href="/book"
        className="inline-block mt-6 text-white bg-gray-800 hover:bg-gray-900 transition px-4 py-2 rounded-lg text-sm"
      >
        Quay lại trang đặt lịch
      </Link>
    </div>
  );
}
