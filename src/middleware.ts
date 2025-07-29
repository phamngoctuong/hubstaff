import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// Tạo một route matcher cho các tuyến đường admin
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
export default clerkMiddleware(async (auth, req) => {
  // Kiểm tra nếu yêu cầu là tuyến đường admin
  if (isAdminRoute(req)) {
    // Lấy thông tin xác thực từ auth()
    const { userId, redirectToSignIn } = await auth(); // Chờ Promise được giải quyết
    // Nếu không có userId (người dùng chưa đăng nhập), chuyển hướng đến trang đăng nhập
    if (!userId) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  }
});
export const config = {
  matcher: [
    // Bỏ qua các tệp nội bộ và tĩnh của Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Luôn chạy cho các tuyến đường API
    '/(api|trpc)(.*)',
  ],
};