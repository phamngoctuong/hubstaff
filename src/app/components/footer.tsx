import Link from "next/link";
export default async function Footer() {
  return (
    <footer className="bg-[#8C5F2A] h-[74px] flex justify-center items-center text-white font-medium text-[14px] text-center md:text-[22px] md:[&>br]:hidden">
      Website and Technology Powered by <br/> ©BookAndReview.com. All Rights Reserved.
    </footer>
  );
}