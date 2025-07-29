'use client';
import Image from "next/image";
import { useState } from "react";
export default function Review() {
  const [activeTab, setActiveTab] = useState('TabA');
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  }
  const [activeIndex,setActiveIndex] = useState<number | null>(null);
  const toggleArcordion = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }
  const items = [
    {
      title: "Do I need a developer or IT team to set this up?",
      content: "Conent  Do I need a developer or IT team to set this up? ..."
    },
    {
      title: "Can I use my own website or domain?",
      content: "Conent  Can I use my own website or domain? ..."
    },
    {
      title: "How does it help with Google reviews?",
      content: "Conent How does it help with Google reviews? ..."
    },
    {
      title: "Can customers schedule appointments online?",
      content: "Conent  Can customers schedule appointments online? ..."
    },
    {
      title: "How much does it cost?",
      content: "Conent  How much does it cost? ..."
    },
    {
      title: "Is there a free trial?",
      content: "Conent  Is there a free trial? ..."
    },
    {
      title: "What kind of businesses use BookAndReview?",
      content: "Conent  What kind of businesses use BookAndReview? ..."
    }
  ]
  return (
    <div className="grid min-h-screen">
      <h1 className="w-[850px] mx-auto text-center text-[72px] font-bold text-[#1D3B36] [text-shadow: 0px_4px_4px_rgba(0, 0, 0, 0.25)]">Turn Appointments into 5-star <span className="text-[#2F80ED]">G</span><span className="text-[#FF3B30]">o</span><span className="text-[#FFCC00]">o</span><span className="text-[#2F80ED]">g</span><span className="text-[#34C759]">l</span><span className="text-[#FF3B30]">e</span> Reviews</h1>
      <p className="w-[1110px] text-[32px] mx-auto font-medium">Launch your booking site in 24 hours. Reduce no-shows, manage appointments, and boost your Google rating - all in one platform</p>
      <div className="grid grid-cols-3 gap-x-[8px] w-[1190px] mx-auto">
        <div className="grid gap-[5px] h-[343px]">
          <div className="relative h-[272px]">
            <Image src={`/images/book-1.png`} fill alt="Book 1" />
          </div>
          <h2 className="bg-[#D6EFEB] border-b-[2px] border-b-[#568C83] text-[#1D3B36] text-[24px] font-medium flex items-center justify-between">✅ Booking Website</h2>
        </div>
        <div className="grid gap-[5px] h-[343px]">
          <div className="relative h-[272px]">
            <Image src={`/images/book-2.png`} fill alt="Book 2" />
          </div>
          <h2 className="bg-[#D6EFEB] border-b-[2px] border-b-[#568C83] text-[#1D3B36] text-[24px] font-medium flex items-center justify-between">✅ Appointment Manager</h2>
        </div>
        <div className="grid gap-[5px] h-[343px]">
          <div className="relative h-[272px]">
            <Image src={`/images/book-3.png`} fill alt="Book 3" />
          </div>
          <h2 className="bg-[#D6EFEB] border-b-[2px] border-b-[#568C83] text-[#1D3B36] text-[24px] font-medium flex items-center justify-between">✅ Auto Review Booster</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[20px] w-[632px] mx-auto bg-[#F9F9F6] rounded-[15px] px-[20px] py-[40px]">
        <div className="grid grid-cols-[48px_1fr] gap-[20px]">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12V24L32 28M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="font-bold text-[24px] text-[#1D3B36]">Now only $59/month — limited time!</p>
            <p className="font-normal text-[24px] text-[#1D3B36]">
              <span>No hardware required. Launch in 24 hours.</span></p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[20px] w-[632px] mx-auto my-[20px] py-[40px]">
        <div className="grid grid-cols-2 gap-[20px]">
          <button className="bg-[#C6E100] rounded-tl-[8px] px-[24px] py-[12px] hover:bg-[#AAB800]">Start My 14-Day Free Trial</button>
          <button className="bg-[#F9F9F6] rounded-tr-[8px] border-[1px] border-[#1D3B36] px-[24px] py-[12px] hover:bg-[#E3E3E3] relative">
            <svg className="absolute left-[25px] top-1/2 -translate-y-1/2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 2.5L12.6667 8.5L3.33334 14.5V2.5Z" stroke="#1D3B36" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Watch a Demo</span>
          </button>
        </div>
      </div>
      <div className="relative w-screen h-[200px]">
        <Image src={`/images/ads.png`} fill alt="ADS" />
      </div>
      <div className="bg-[#D6EFEB] w-screen">
        <div className="w-[1200px] grid grid-cols-4 mx-auto h-[222px] items-center">
          <div className="flex gap-[10px] items-center">
            <Image src={`/images/businesses-1.svg`} width={62} height={62} alt="businesses 1" />
            <p>Trusted by 5,000+ <br /> small businesses</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image src={`/images/businesses-2.svg`} width={62} height={62} alt="businesses 1" />
            <p>5-star feedback <br /> from real users</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image src={`/images/businesses-3.svg`} width={62} height={62} alt="businesses 1" />
            <p>Works with your <br /> domain or ours</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image src={`/images/businesses-4.svg`} width={62} height={62} alt="businesses 1" />
            <p>No tech team <br /> needed</p>
          </div>
        </div>
      </div>
      <div className="py-[40px]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">Get Started in 3 Easy Steps</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">Three simple steps to boost appointments and get more 5-star reviews — all on autopilot.</p>
        </div>
        <div className="grid grid-cols-3 gap-[25px] w-[1200px] mx-auto mt-[40px]">
          <div className="px-[30px] py-[34px] rounded-[12px] border-[1px] border-[#1D3B36] grid gap-[24px]">
            <h3 className="border-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">Step 1: Launch Your Booking Page</h3>
            <Image src={`/images/launch-1.png`} width={324} height={190} alt="launch 1" />
            <p className="text-[#444C53] font-medium text-[18px]">We set up a ready-to-use website for your business — no tech skills needed. Use your own domain or ours and start accepting appointments today.</p>
          </div>
          <div className="px-[30px] py-[34px] rounded-[12px] border-[1px] border-[#1D3B36] grid gap-[24px]">
            <h3 className="border-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">Step 2: Customers Book — or Your Team Does</h3>
            <Image src={`/images/launch-2.png`} width={324} height={190} alt="launch 2" />
            <p className="text-[#444C53] font-medium text-[18px]">Clients can book anytime from any device. Your team can also schedule appointments manually using our built-in appointment manager. Text and email reminders go out automatically to reduce no-shows.</p>
          </div>
          <div className="px-[30px] py-[34px] rounded-[12px] border-[1px] border-[#1D3B36] grid gap-[24px]">
            <h3 className="border-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">Step 3: Collect Feedback & Get Reviews</h3>
            <Image src={`/images/launch-3.png`} width={324} height={190} alt="launch 1" />
            <p className="text-[#444C53] font-medium text-[18px]">After their visit, customers get a quick feedback request by text or email — or they can tap or scan your in-store tag. Happy customers are guided to leave a Google review. Unhappy ones are handled privately.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[20px] w-[632px] mx-auto my-[20px] py-[40px]">
          <div className="grid grid-cols-2 gap-[20px]">
            <button className="bg-[#C6E100] rounded-[8px] px-[24px] py-[12px] hover:bg-[#AAB800] max-w-[300px]">Set Up My Booking Page</button>
            <button className="bg-[#F9F9F6] rounded-[8px] border-[1px] border-[#1D3B36] px-[24px] py-[12px] hover:bg-[#E3E3E3] relative">
              <span>Explore Full Pricing & Features</span>
            </button>
          </div>
        </div>
      </div>
      <div className="py-[40px] bg-[#E3E8EC]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">How Smart Filtering Works</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">Turn every visit into a chance to grow — guide happy customers to review, handle negative feedback privately.</p>
        </div>
        <div className="grid grid-cols-3 gap-[38px] pt-[38px] pb-[38px] w-[1200px] mx-auto bg-white border-[#E3E8EC] rounded-[12px]">
          <div className="px-[20px] py-[30px] grid gap-[20px] rounded-[12px] border-[1px] border-[#1D3B36] ">
            <h3 className="text-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">Auto Feedback Request Post Visit (SMS/ email)</h3>
            <Image src={`/images/smart-1-1.png`} width={310} height={302} alt="smart 1  1" />
            <p className="text-[#444C53] text-[18px]">After each visit, customers are asked to share their feedback via text or email. This gives them a safe space to be honest — before going public.</p>
            <div className="flex gap-[8px]">
              <Image src={`/images/smart-1-2.png`} width={310} height={302} alt="smart 1  2" />
              <p className="text-[18px]">Alternatively, they can tap your in-store tag to leave a rating.</p>
            </div>
          </div>
          <div className="grid gap-[34px] grid-rows-2">
            <div className="relative px-[20px] py-[30px] rounded-[12px] border-[1px] border-[#1D3B36] grid gap-[20px]">
              <h3 className="text-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">Auto Feedback Request Post Visit (SMS/ email)</h3>
              <div className="flex">
                <Image src={`/images/smart-2-2.png`} width={170} height={207} alt="smart 1  2" />
                <p className="text-[18px]">If feedback is positive, the customer is guided to leave a 5-star Google review — helping boost your online reputation.</p>
              </div>
              <Image className="absolute -left-[50px] top-1/2 -translate-y-1/2" src={`/images/right-circle-1.svg`} width={60} height={60} alt="right-circle-1" />
            </div>
            <div className="relative px-[20px] py-[30px] rounded-[12px] border-[1px] border-[#1D3B36] grid gap-[20px]">
              <h3 className="text-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">Negative Feedback → Handled Privately</h3>
              <div className="flex">
                <Image src={`/images/smart-2-2.png`} width={170} height={207} alt="smart 1  2" />
                <p className="text-[18px]">If feedback is negative, it stays private so your team can respond and resolve the issue — without it showing up online.</p>
              </div>
              <Image className="absolute -left-[50px] top-1/2 -translate-y-1/2" src={`/images/right-circle-2.svg`} width={60} height={60} alt="right-circle-1" />
            </div>
          </div>
          <div className="grid gap-[34px] grid-rows-2">
            <div className="relative px-[20px] py-[30px] rounded-[12px] border-[1px] border-[#1D3B36] grid gap-[20px]">
              <h3 className="text-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">✅ Result: More 5-Star Reviews</h3>
              <div className="flex">
                <Image src={`/images/smart-3-1.png`} width={170} height={207} alt="smart 1  2" />
                <p className="text-[18px]">Your business earns more real, 5-star reviews that drive visibility and customer trust.</p>
              </div>
              <Image className="absolute -left-[50px] top-1/2 -translate-y-1/2" src={`/images/right-circle-1.svg`} width={60} height={60} alt="right-circle-1" />
            </div>
            <div className="relative px-[20px] py-[30px] rounded-[12px] border-[1px] border-[#1D3B36] grid gap-[20px]">
              <h3 className="text-[#1D3B36] text-[24px] font-bold border-b-[1px] border-b-[#1D3B36]">🛠️ Result: Reputation Protected</h3>
              <div className="flex">
                <Image src={`/images/smart-3-2.png`} width={170} height={207} alt="smart 1  2" />
                <p className="text-[18px]">You gain valuable insights while keeping negative experiences off public platforms.</p>
              </div>
              <Image className="absolute -left-[50px] top-1/2 -translate-y-1/2" src={`/images/right-circle-2.svg`} width={60} height={60} alt="right-circle-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[40px]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">Check-In & Review QR Stands</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">Tap or scan to check in and collect Google reviews—fully synced with your system.</p>
        </div>
        <div className="mt-[40px] w-[1200px] mx-auto flex border-[1px] border-[#1D3B36] rounded-[12px] px-[50px] py-[40px]">
          <Image src={`/images/check.png`} width={255} height={319} alt="Check" />
          <div className="text-[22px] font-medium text-[]">
            <p className="text-[#1D3B36] text-[22px] mb-[22px] font-medium">Our optional in-store stands make it easy for customers to check in or leave feedback with a quick tap or scan. Everything connects directly to your <strong className="font-bold">booking site and appointment system,</strong> so check-ins, reviews, and feedback all stay in one place.</p>
            <strong className="font-bold">What you get:</strong>
            <ul className="list-disc list-inside pl-[10px]">
              <li>⭐ More 5-star Google reviews</li>
              <li>📍 Real-time check-in tracking</li>
              <li>🔒 Private handling of unhappy feedback</li>
            </ul>
            <p className="text-[#1D3B36] text-[22px] font-medium">Optional add-on available for all plans. Seamless, simple, and effective.</p>
          </div>
        </div>
        <div className="grid items-center justify-center grid-cols-1 gap-[20px] w-[632px] mx-auto my-[20px] py-[40px]">
          <button className="bg-[#C6E100] mx-auto rounded-[8px] px-[24px] py-[12px] hover:bg-[#AAB800] max-w-[300px]">Get Started & Claim Your Stands</button>
        </div>
      </div>
      <div className="py-[40px] bg-[#D6EFEB] grid gap-[20px]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">Why BookAndReview</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">Built to help small businesses thrive — less no-shows, more visibility, happier customers.</p>
        </div>
        <div className="grid grid-cols-2 w-[1200px] mx-auto">
          <p>✅ Reduce no-show by up to 40%</p>
          <p>✅ Save hours weekly on manual scheduling</p>
          <p>✅ Boost Google reviews and get more local traffic</p>
          <p>✅ Improve customer experience</p>
          <p>✅ Handle negative feedback privately</p>
          <p>✅ Live in 24 hours</p>
        </div>
      </div>
      <div className="py-[40px] grid gap-[20px]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">Compare Us</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">See how BookAndReview stacks up against other platforms. More value, fewer limitations.</p>
        </div>
        <div className="w-[1200px] mx-auto rounded-[12px] border-[1px] border-[[#1D3B36] overflow-hidden p-[30px]">
          <table className="w-full divide-y divide-[#1D3B36]">
            <thead>
              <tr className="font-bold text-[24px] text-center">
                <th className="text-left">Feature</th>
                <th>BookAndReview</th>
                <th>Podium</th>
                <th>Calendly</th>
                <th>Square</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-medium">
                <td className="border-b-[1px] border-b-[#E3E8EC] py-[20px]">
                  <p className="text-[24px]">Booking website included</p>
                  <p className="text-[#007AFF] text-[24px]">[see a live demo]</p>
                </td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
              </tr>
              <tr className="font-medium">
                <td className="border-b-[1px] border-b-[#E3E8EC] py-[20px]">
                  <p className="text-[24px]">Appointment scheduling</p>
                </td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
              </tr>
              <tr className="font-medium">
                <td className="border-b-[1px] border-b-[#E3E8EC] py-[20px] flex gap-[10px] items-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="11.5" fill="#D6EFEB" stroke="#1D3B36" strokeWidth="2" />
                    <path d="M11.0455 14.5114V14.3182C11.0492 13.6553 11.108 13.1269 11.2216 12.733C11.339 12.339 11.5095 12.0208 11.733 11.7784C11.9564 11.536 12.2254 11.3163 12.5398 11.1193C12.7746 10.9678 12.9848 10.8106 13.1705 10.6477C13.3561 10.4848 13.5038 10.3049 13.6136 10.108C13.7235 9.9072 13.7784 9.68371 13.7784 9.4375C13.7784 9.17614 13.7159 8.94697 13.5909 8.75C13.4659 8.55303 13.2973 8.40151 13.0852 8.29545C12.8769 8.18939 12.6458 8.13636 12.392 8.13636C12.1458 8.13636 11.9129 8.19129 11.6932 8.30114C11.4735 8.4072 11.2936 8.56629 11.1534 8.77841C11.0133 8.98674 10.9375 9.24621 10.9261 9.55682H8.60795C8.62689 8.79924 8.80871 8.17424 9.15341 7.68182C9.49811 7.18561 9.95455 6.81629 10.5227 6.57386C11.0909 6.32765 11.7178 6.20455 12.4034 6.20455C13.1572 6.20455 13.8239 6.32955 14.4034 6.57955C14.983 6.82576 15.4375 7.18371 15.767 7.65341C16.0966 8.12311 16.2614 8.68939 16.2614 9.35227C16.2614 9.79545 16.1875 10.1894 16.0398 10.5341C15.8958 10.875 15.6932 11.178 15.4318 11.4432C15.1705 11.7045 14.8617 11.9413 14.5057 12.1534C14.2064 12.3314 13.9602 12.517 13.767 12.7102C13.5777 12.9034 13.4356 13.1269 13.3409 13.3807C13.25 13.6345 13.2027 13.947 13.1989 14.3182V14.5114H11.0455ZM12.1705 18.1477C11.7917 18.1477 11.4678 18.0152 11.1989 17.75C10.9337 17.4811 10.803 17.1591 10.8068 16.7841C10.803 16.4129 10.9337 16.0947 11.1989 15.8295C11.4678 15.5644 11.7917 15.4318 12.1705 15.4318C12.5303 15.4318 12.8466 15.5644 13.1193 15.8295C13.392 16.0947 13.5303 16.4129 13.5341 16.7841C13.5303 17.0341 13.464 17.2633 13.3352 17.4716C13.2102 17.6761 13.0455 17.8409 12.8409 17.9659C12.6364 18.0871 12.4129 18.1477 12.1705 18.1477Z" fill="#1D3B36" />
                  </svg>
                  <p className="text-[24px]">Appointment scheduling</p>
                </td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
              </tr>
              <tr className="font-medium">
                <td className="border-b-[1px] border-b-[#E3E8EC] py-[20px] flex gap-[10px] items-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="11.5" fill="#D6EFEB" stroke="#1D3B36" strokeWidth="2" />
                    <path d="M11.0455 14.5114V14.3182C11.0492 13.6553 11.108 13.1269 11.2216 12.733C11.339 12.339 11.5095 12.0208 11.733 11.7784C11.9564 11.536 12.2254 11.3163 12.5398 11.1193C12.7746 10.9678 12.9848 10.8106 13.1705 10.6477C13.3561 10.4848 13.5038 10.3049 13.6136 10.108C13.7235 9.9072 13.7784 9.68371 13.7784 9.4375C13.7784 9.17614 13.7159 8.94697 13.5909 8.75C13.4659 8.55303 13.2973 8.40151 13.0852 8.29545C12.8769 8.18939 12.6458 8.13636 12.392 8.13636C12.1458 8.13636 11.9129 8.19129 11.6932 8.30114C11.4735 8.4072 11.2936 8.56629 11.1534 8.77841C11.0133 8.98674 10.9375 9.24621 10.9261 9.55682H8.60795C8.62689 8.79924 8.80871 8.17424 9.15341 7.68182C9.49811 7.18561 9.95455 6.81629 10.5227 6.57386C11.0909 6.32765 11.7178 6.20455 12.4034 6.20455C13.1572 6.20455 13.8239 6.32955 14.4034 6.57955C14.983 6.82576 15.4375 7.18371 15.767 7.65341C16.0966 8.12311 16.2614 8.68939 16.2614 9.35227C16.2614 9.79545 16.1875 10.1894 16.0398 10.5341C15.8958 10.875 15.6932 11.178 15.4318 11.4432C15.1705 11.7045 14.8617 11.9413 14.5057 12.1534C14.2064 12.3314 13.9602 12.517 13.767 12.7102C13.5777 12.9034 13.4356 13.1269 13.3409 13.3807C13.25 13.6345 13.2027 13.947 13.1989 14.3182V14.5114H11.0455ZM12.1705 18.1477C11.7917 18.1477 11.4678 18.0152 11.1989 17.75C10.9337 17.4811 10.803 17.1591 10.8068 16.7841C10.803 16.4129 10.9337 16.0947 11.1989 15.8295C11.4678 15.5644 11.7917 15.4318 12.1705 15.4318C12.5303 15.4318 12.8466 15.5644 13.1193 15.8295C13.392 16.0947 13.5303 16.4129 13.5341 16.7841C13.5303 17.0341 13.464 17.2633 13.3352 17.4716C13.2102 17.6761 13.0455 17.8409 12.8409 17.9659C12.6364 18.0871 12.4129 18.1477 12.1705 18.1477Z" fill="#1D3B36" />
                  </svg>
                  <p className="text-[24px]">Google review booster</p>
                </td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
              </tr>
              <tr className="font-medium">
                <td className="border-b-[1px] border-b-[#E3E8EC] py-[20px] flex gap-[10px] items-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="11.5" fill="#D6EFEB" stroke="#1D3B36" strokeWidth="2" />
                    <path d="M11.0455 14.5114V14.3182C11.0492 13.6553 11.108 13.1269 11.2216 12.733C11.339 12.339 11.5095 12.0208 11.733 11.7784C11.9564 11.536 12.2254 11.3163 12.5398 11.1193C12.7746 10.9678 12.9848 10.8106 13.1705 10.6477C13.3561 10.4848 13.5038 10.3049 13.6136 10.108C13.7235 9.9072 13.7784 9.68371 13.7784 9.4375C13.7784 9.17614 13.7159 8.94697 13.5909 8.75C13.4659 8.55303 13.2973 8.40151 13.0852 8.29545C12.8769 8.18939 12.6458 8.13636 12.392 8.13636C12.1458 8.13636 11.9129 8.19129 11.6932 8.30114C11.4735 8.4072 11.2936 8.56629 11.1534 8.77841C11.0133 8.98674 10.9375 9.24621 10.9261 9.55682H8.60795C8.62689 8.79924 8.80871 8.17424 9.15341 7.68182C9.49811 7.18561 9.95455 6.81629 10.5227 6.57386C11.0909 6.32765 11.7178 6.20455 12.4034 6.20455C13.1572 6.20455 13.8239 6.32955 14.4034 6.57955C14.983 6.82576 15.4375 7.18371 15.767 7.65341C16.0966 8.12311 16.2614 8.68939 16.2614 9.35227C16.2614 9.79545 16.1875 10.1894 16.0398 10.5341C15.8958 10.875 15.6932 11.178 15.4318 11.4432C15.1705 11.7045 14.8617 11.9413 14.5057 12.1534C14.2064 12.3314 13.9602 12.517 13.767 12.7102C13.5777 12.9034 13.4356 13.1269 13.3409 13.3807C13.25 13.6345 13.2027 13.947 13.1989 14.3182V14.5114H11.0455ZM12.1705 18.1477C11.7917 18.1477 11.4678 18.0152 11.1989 17.75C10.9337 17.4811 10.803 17.1591 10.8068 16.7841C10.803 16.4129 10.9337 16.0947 11.1989 15.8295C11.4678 15.5644 11.7917 15.4318 12.1705 15.4318C12.5303 15.4318 12.8466 15.5644 13.1193 15.8295C13.392 16.0947 13.5303 16.4129 13.5341 16.7841C13.5303 17.0341 13.464 17.2633 13.3352 17.4716C13.2102 17.6761 13.0455 17.8409 12.8409 17.9659C12.6364 18.0871 12.4129 18.1477 12.1705 18.1477Z" fill="#1D3B36" />
                  </svg>
                  <p className="text-[24px]">In-store check-in & review tags</p>
                </td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">✅</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
                <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">❌</td>
              </tr>
              <tr>
                <td className="py-[20px]" colSpan={5}>
                  <div className="flex justify-center">
                    <button className="flex items-center justify-center gap-[10px] font-bold">
                      <span>View Full Feature Comparison</span>
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 13.125L17.5 21.875L26.25 13.125" stroke="#1D3B36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 gap-[20px] w-[632px] mx-auto my-[20px]">
          <div className="grid grid-cols-2 gap-[20px]">
            <button className="bg-[#C6E100] rounded-[8px] px-[24px] py-[12px] hover:bg-[#AAB800]">Start My 14-Day Free Trial</button>
            <button className="bg-[#F9F9F6] rounded-[8px] border-[1px] border-[#1D3B36] px-[24px] py-[12px] hover:bg-[#E3E3E3] relative">
              <svg className="absolute left-[25px] top-1/2 -translate-y-1/2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 2.5L12.6667 8.5L3.33334 14.5V2.5Z" stroke="#1D3B36" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Watch a Demo</span>
            </button>
          </div>
        </div>
      </div>
      <div className="py-[40px] bg-[#E3E8EC] grid gap-[20px]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">Testimonials</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">Real stories from real business owners who’ve seen the difference.</p>
        </div>
        <div className="grid grid-cols-4 gap-[20px] w-[1200px] mx-auto">
          <div className="flex gap-[10px] p-[20px] col-span-4  border-[#1D3B36] border-[1px] rounded-[12px]">
            <div className="grid gap-[10px]">
              <Image className="rounded-[12px]" src={`/images/testi-1.png`} width={402} height={250} alt="testi 1" />
              <p className="text-[24px] font-bold text-center">Dr. Anjali Mehra</p>
              <svg width="402" height="30" viewBox="0 0 402 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M136.049 2.92705C136.348 2.00574 137.652 2.00574 137.951 2.92705L140.143 9.67376C140.277 10.0858 140.661 10.3647 141.094 10.3647H148.188C149.157 10.3647 149.56 11.6044 148.776 12.1738L143.037 16.3435C142.686 16.5981 142.54 17.0495 142.674 17.4615L144.866 24.2082C145.165 25.1295 144.111 25.8956 143.327 25.3262L137.588 21.1565C137.237 20.9019 136.763 20.9019 136.412 21.1565L130.673 25.3262C129.889 25.8956 128.835 25.1295 129.134 24.2082L131.326 17.4615C131.46 17.0495 131.314 16.5981 130.963 16.3435L125.224 12.1738C124.44 11.6044 124.843 10.3647 125.812 10.3647H132.906C133.339 10.3647 133.723 10.0858 133.857 9.67376L136.049 2.92705Z" fill="#FFC84A" />
                <path d="M168.049 2.92705C168.348 2.00574 169.652 2.00574 169.951 2.92705L172.143 9.67376C172.277 10.0858 172.661 10.3647 173.094 10.3647H180.188C181.157 10.3647 181.56 11.6044 180.776 12.1738L175.037 16.3435C174.686 16.5981 174.54 17.0495 174.674 17.4615L176.866 24.2082C177.165 25.1295 176.111 25.8956 175.327 25.3262L169.588 21.1565C169.237 20.9019 168.763 20.9019 168.412 21.1565L162.673 25.3262C161.889 25.8956 160.835 25.1295 161.134 24.2082L163.326 17.4615C163.46 17.0495 163.314 16.5981 162.963 16.3435L157.224 12.1738C156.44 11.6044 156.843 10.3647 157.812 10.3647H164.906C165.339 10.3647 165.723 10.0858 165.857 9.67376L168.049 2.92705Z" fill="#FFC84A" />
                <path d="M200.049 2.92705C200.348 2.00574 201.652 2.00574 201.951 2.92705L204.143 9.67376C204.277 10.0858 204.661 10.3647 205.094 10.3647H212.188C213.157 10.3647 213.56 11.6044 212.776 12.1738L207.037 16.3435C206.686 16.5981 206.54 17.0495 206.674 17.4615L208.866 24.2082C209.165 25.1295 208.111 25.8956 207.327 25.3262L201.588 21.1565C201.237 20.9019 200.763 20.9019 200.412 21.1565L194.673 25.3262C193.889 25.8956 192.835 25.1295 193.134 24.2082L195.326 17.4615C195.46 17.0495 195.314 16.5981 194.963 16.3435L189.224 12.1738C188.44 11.6044 188.843 10.3647 189.812 10.3647H196.906C197.339 10.3647 197.723 10.0858 197.857 9.67376L200.049 2.92705Z" fill="#FFC84A" />
                <path d="M232.049 2.92705C232.348 2.00574 233.652 2.00574 233.951 2.92705L236.143 9.67376C236.277 10.0858 236.661 10.3647 237.094 10.3647H244.188C245.157 10.3647 245.56 11.6044 244.776 12.1738L239.037 16.3435C238.686 16.5981 238.54 17.0495 238.674 17.4615L240.866 24.2082C241.165 25.1295 240.111 25.8956 239.327 25.3262L233.588 21.1565C233.237 20.9019 232.763 20.9019 232.412 21.1565L226.673 25.3262C225.889 25.8956 224.835 25.1295 225.134 24.2082L227.326 17.4615C227.46 17.0495 227.314 16.5981 226.963 16.3435L221.224 12.1738C220.44 11.6044 220.843 10.3647 221.812 10.3647H228.906C229.339 10.3647 229.723 10.0858 229.857 9.67376L232.049 2.92705Z" fill="#FFC84A" />
                <path d="M264.049 2.92705C264.348 2.00574 265.652 2.00574 265.951 2.92705L268.143 9.67376C268.277 10.0858 268.661 10.3647 269.094 10.3647H276.188C277.157 10.3647 277.56 11.6044 276.776 12.1738L271.037 16.3435C270.686 16.5981 270.54 17.0495 270.674 17.4615L272.866 24.2082C273.165 25.1295 272.111 25.8956 271.327 25.3262L265.588 21.1565C265.237 20.9019 264.763 20.9019 264.412 21.1565L258.673 25.3262C257.889 25.8956 256.835 25.1295 257.134 24.2082L259.326 17.4615C259.46 17.0495 259.314 16.5981 258.963 16.3435L253.224 12.1738C252.44 11.6044 252.843 10.3647 253.812 10.3647H260.906C261.339 10.3647 261.723 10.0858 261.857 9.67376L264.049 2.92705Z" fill="#FFC84A" />
              </svg>
              <p className="text-[18px] italic font-medium text-center">Co-founder, Family Dental Care, CA</p>
            </div>
            <div className="mb-[20px] text-[24px]">
              <div className="font-bold mb-[10px]">Fewer no-shows — and more time with patients.</div>
              <p>“BookAndReview automated our reminders and confirmations — no more chasing patients. <strong className="text-[#00C461] font-bold">No-shows dropped 35%,</strong> and our schedule is more consistent. It also collects feedback securely — we got <strong className="text-[#00C461] font-bold">41 new Google reviews and handled 6 unhappy cases privately.</strong> Best of all, it runs everything — bookings to reviews — without us lifting a finger.”</p>
            </div>
          </div>
          <div className="px-[30px] py-[30px] rounded-[12px] border-[1px] border-[#1D3B36] flex flex-col gap-[20px]">
            <h4 className="text-[18px] py-[10px] font-bold border-b-[1px] border-b-[#1D3B36]">Hair / Nails Beauty Salon</h4>
            <p className="text-[18px] font-medium mb-[7px]">“BookAndReview transformed our salon experience. Clients love the ease of scheduling, and we’ve <strong className="text-[#00C461] font-bold">cut no-shows by 53%</strong> thanks to the automated reminders. Best of all, our Google rating jumped from <strong className="text-[#00C461] font-bold">4.2 to 4.8,</strong> and we’ve collected over <strong className="text-[#00C461] font-bold">42 new 5-star reviews</strong> in just two months!”</p>
            <div className="grid gap-[10px]">
              <Image className="rounded-[12px]" src={`/images/testi-2.png`} width={402} height={250} alt="testi 2" />
              <p className="text-[18px] font-medium text-center">Maria R.</p>
              <svg width="225" height="30" viewBox="0 0 225 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.5489 2.92705C47.8483 2.00574 49.1517 2.00574 49.4511 2.92705L51.6432 9.67376C51.7771 10.0858 52.161 10.3647 52.5943 10.3647H59.6882C60.6569 10.3647 61.0597 11.6044 60.2759 12.1738L54.5369 16.3435C54.1864 16.5981 54.0397 17.0495 54.1736 17.4615L56.3657 24.2082C56.6651 25.1295 55.6106 25.8956 54.8269 25.3262L49.0878 21.1565C48.7373 20.9019 48.2627 20.9019 47.9122 21.1565L42.1731 25.3262C41.3894 25.8956 40.3349 25.1295 40.6343 24.2082L42.8264 17.4615C42.9603 17.0495 42.8136 16.5981 42.4631 16.3435L36.7241 12.1738C35.9403 11.6044 36.3431 10.3647 37.3118 10.3647H44.4057C44.839 10.3647 45.2229 10.0858 45.3568 9.67376L47.5489 2.92705Z" fill="#FFC84A" />
                <path d="M79.5489 2.92705C79.8483 2.00574 81.1517 2.00574 81.4511 2.92705L83.6432 9.67376C83.7771 10.0858 84.161 10.3647 84.5943 10.3647H91.6882C92.6569 10.3647 93.0597 11.6044 92.2759 12.1738L86.5369 16.3435C86.1864 16.5981 86.0397 17.0495 86.1736 17.4615L88.3657 24.2082C88.6651 25.1295 87.6106 25.8956 86.8269 25.3262L81.0878 21.1565C80.7373 20.9019 80.2627 20.9019 79.9122 21.1565L74.1731 25.3262C73.3894 25.8956 72.3349 25.1295 72.6343 24.2082L74.8264 17.4615C74.9603 17.0495 74.8136 16.5981 74.4631 16.3435L68.7241 12.1738C67.9403 11.6044 68.3431 10.3647 69.3118 10.3647H76.4057C76.839 10.3647 77.2229 10.0858 77.3568 9.67376L79.5489 2.92705Z" fill="#FFC84A" />
                <path d="M111.549 2.92705C111.848 2.00574 113.152 2.00574 113.451 2.92705L115.643 9.67376C115.777 10.0858 116.161 10.3647 116.594 10.3647H123.688C124.657 10.3647 125.06 11.6044 124.276 12.1738L118.537 16.3435C118.186 16.5981 118.04 17.0495 118.174 17.4615L120.366 24.2082C120.665 25.1295 119.611 25.8956 118.827 25.3262L113.088 21.1565C112.737 20.9019 112.263 20.9019 111.912 21.1565L106.173 25.3262C105.389 25.8956 104.335 25.1295 104.634 24.2082L106.826 17.4615C106.96 17.0495 106.814 16.5981 106.463 16.3435L100.724 12.1738C99.9403 11.6044 100.343 10.3647 101.312 10.3647H108.406C108.839 10.3647 109.223 10.0858 109.357 9.67376L111.549 2.92705Z" fill="#FFC84A" />
                <path d="M143.549 2.92705C143.848 2.00574 145.152 2.00574 145.451 2.92705L147.643 9.67376C147.777 10.0858 148.161 10.3647 148.594 10.3647H155.688C156.657 10.3647 157.06 11.6044 156.276 12.1738L150.537 16.3435C150.186 16.5981 150.04 17.0495 150.174 17.4615L152.366 24.2082C152.665 25.1295 151.611 25.8956 150.827 25.3262L145.088 21.1565C144.737 20.9019 144.263 20.9019 143.912 21.1565L138.173 25.3262C137.389 25.8956 136.335 25.1295 136.634 24.2082L138.826 17.4615C138.96 17.0495 138.814 16.5981 138.463 16.3435L132.724 12.1738C131.94 11.6044 132.343 10.3647 133.312 10.3647H140.406C140.839 10.3647 141.223 10.0858 141.357 9.67376L143.549 2.92705Z" fill="#FFC84A" />
                <path d="M175.549 2.92705C175.848 2.00574 177.152 2.00574 177.451 2.92705L179.643 9.67376C179.777 10.0858 180.161 10.3647 180.594 10.3647H187.688C188.657 10.3647 189.06 11.6044 188.276 12.1738L182.537 16.3435C182.186 16.5981 182.04 17.0495 182.174 17.4615L184.366 24.2082C184.665 25.1295 183.611 25.8956 182.827 25.3262L177.088 21.1565C176.737 20.9019 176.263 20.9019 175.912 21.1565L170.173 25.3262C169.389 25.8956 168.335 25.1295 168.634 24.2082L170.826 17.4615C170.96 17.0495 170.814 16.5981 170.463 16.3435L164.724 12.1738C163.94 11.6044 164.343 10.3647 165.312 10.3647H172.406C172.839 10.3647 173.223 10.0858 173.357 9.67376L175.549 2.92705Z" fill="#FFC84A" />
              </svg>
              <p className="text-[18px] italic font-medium text-center">Owner</p>
              <p className="text-[18px] italic font-medium text-center">Royal Nails & Spa</p>
            </div>
          </div>
          <div className="p-[30px] rounded-[12px] border-[1px] border-[#1D3B36] flex flex-col gap-[20px]">
            <h4 className="text-[18px] py-[10px] font-bold border-b-[1px] border-b-[#1D3B36]">Hair / Nails Beauty Salon</h4>
            <p className="text-[18px] font-medium mb-[10px]">“We’re a small team, so we needed something simple but powerful. BookAndReview gave us a professional booking page and a system that automatically collects reviews. In 3 months, our booking rate increased by <strong className="text-[#00C461] font-bold">41%,</strong> and our review count doubled — from <strong className="text-[#00C461] font-bold">58 to 116</strong> — with almost no manual work.”</p>
            <div className="grid gap-[10px]">
              <Image className="rounded-[12px]" src={`/images/testi-3.png`} width={402} height={250} alt="testi 2" />
              <p className="text-[18px] font-medium text-center">Rafael T.</p>
              <svg width="225" height="30" viewBox="0 0 225 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.5489 2.92705C47.8483 2.00574 49.1517 2.00574 49.4511 2.92705L51.6432 9.67376C51.7771 10.0858 52.161 10.3647 52.5943 10.3647H59.6882C60.6569 10.3647 61.0597 11.6044 60.2759 12.1738L54.5369 16.3435C54.1864 16.5981 54.0397 17.0495 54.1736 17.4615L56.3657 24.2082C56.6651 25.1295 55.6106 25.8956 54.8269 25.3262L49.0878 21.1565C48.7373 20.9019 48.2627 20.9019 47.9122 21.1565L42.1731 25.3262C41.3894 25.8956 40.3349 25.1295 40.6343 24.2082L42.8264 17.4615C42.9603 17.0495 42.8136 16.5981 42.4631 16.3435L36.7241 12.1738C35.9403 11.6044 36.3431 10.3647 37.3118 10.3647H44.4057C44.839 10.3647 45.2229 10.0858 45.3568 9.67376L47.5489 2.92705Z" fill="#FFC84A" />
                <path d="M79.5489 2.92705C79.8483 2.00574 81.1517 2.00574 81.4511 2.92705L83.6432 9.67376C83.7771 10.0858 84.161 10.3647 84.5943 10.3647H91.6882C92.6569 10.3647 93.0597 11.6044 92.2759 12.1738L86.5369 16.3435C86.1864 16.5981 86.0397 17.0495 86.1736 17.4615L88.3657 24.2082C88.6651 25.1295 87.6106 25.8956 86.8269 25.3262L81.0878 21.1565C80.7373 20.9019 80.2627 20.9019 79.9122 21.1565L74.1731 25.3262C73.3894 25.8956 72.3349 25.1295 72.6343 24.2082L74.8264 17.4615C74.9603 17.0495 74.8136 16.5981 74.4631 16.3435L68.7241 12.1738C67.9403 11.6044 68.3431 10.3647 69.3118 10.3647H76.4057C76.839 10.3647 77.2229 10.0858 77.3568 9.67376L79.5489 2.92705Z" fill="#FFC84A" />
                <path d="M111.549 2.92705C111.848 2.00574 113.152 2.00574 113.451 2.92705L115.643 9.67376C115.777 10.0858 116.161 10.3647 116.594 10.3647H123.688C124.657 10.3647 125.06 11.6044 124.276 12.1738L118.537 16.3435C118.186 16.5981 118.04 17.0495 118.174 17.4615L120.366 24.2082C120.665 25.1295 119.611 25.8956 118.827 25.3262L113.088 21.1565C112.737 20.9019 112.263 20.9019 111.912 21.1565L106.173 25.3262C105.389 25.8956 104.335 25.1295 104.634 24.2082L106.826 17.4615C106.96 17.0495 106.814 16.5981 106.463 16.3435L100.724 12.1738C99.9403 11.6044 100.343 10.3647 101.312 10.3647H108.406C108.839 10.3647 109.223 10.0858 109.357 9.67376L111.549 2.92705Z" fill="#FFC84A" />
                <path d="M143.549 2.92705C143.848 2.00574 145.152 2.00574 145.451 2.92705L147.643 9.67376C147.777 10.0858 148.161 10.3647 148.594 10.3647H155.688C156.657 10.3647 157.06 11.6044 156.276 12.1738L150.537 16.3435C150.186 16.5981 150.04 17.0495 150.174 17.4615L152.366 24.2082C152.665 25.1295 151.611 25.8956 150.827 25.3262L145.088 21.1565C144.737 20.9019 144.263 20.9019 143.912 21.1565L138.173 25.3262C137.389 25.8956 136.335 25.1295 136.634 24.2082L138.826 17.4615C138.96 17.0495 138.814 16.5981 138.463 16.3435L132.724 12.1738C131.94 11.6044 132.343 10.3647 133.312 10.3647H140.406C140.839 10.3647 141.223 10.0858 141.357 9.67376L143.549 2.92705Z" fill="#FFC84A" />
                <path d="M175.549 2.92705C175.848 2.00574 177.152 2.00574 177.451 2.92705L179.643 9.67376C179.777 10.0858 180.161 10.3647 180.594 10.3647H187.688C188.657 10.3647 189.06 11.6044 188.276 12.1738L182.537 16.3435C182.186 16.5981 182.04 17.0495 182.174 17.4615L184.366 24.2082C184.665 25.1295 183.611 25.8956 182.827 25.3262L177.088 21.1565C176.737 20.9019 176.263 20.9019 175.912 21.1565L170.173 25.3262C169.389 25.8956 168.335 25.1295 168.634 24.2082L170.826 17.4615C170.96 17.0495 170.814 16.5981 170.463 16.3435L164.724 12.1738C163.94 11.6044 164.343 10.3647 165.312 10.3647H172.406C172.839 10.3647 173.223 10.0858 173.357 9.67376L175.549 2.92705Z" fill="#FFC84A" />
              </svg>
              <p className="text-[18px] italic font-medium text-center">Founder</p>
              <p className="text-[18px] italic font-medium text-center">Diamond Auto Detailing</p>
            </div>
          </div>
          <div className="px-[30px] py-[30px] rounded-[12px] border-[1px] border-[#1D3B36] flex flex-col gap-[20px]">
            <h4 className="text-[18px] py-[10px] font-bold border-b-[1px] border-b-[#1D3B36]">Hair / Nails Beauty Salon</h4>
            <p className="text-[18px] font-medium mb-[35px]">“Patients find us and book online with zero friction. We’ve reduced front desk calls by <strong className="text-[#00C461] font-bold">65%,</strong> cut appointment gaps by <strong className="text-[#00C461] font-bold">38%,</strong> and grew our Google reviews from <strong className="text-[#00C461] font-bold">23 to 89,</strong> reaching a solid <strong className="text-[#00C461] font-bold">4.9 rating.</strong> It’s like having a front desk assistant and reputation manager all in one.”</p>
            <div className="grid gap-[10px]">
              <Image className="rounded-[12px]" src={`/images/testi-4.png`} width={402} height={250} alt="testi 2" />
              <p className="text-[18px] font-medium text-center">Dr. Jenna L.</p>
              <svg width="225" height="30" viewBox="0 0 225 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.5489 2.92705C47.8483 2.00574 49.1517 2.00574 49.4511 2.92705L51.6432 9.67376C51.7771 10.0858 52.161 10.3647 52.5943 10.3647H59.6882C60.6569 10.3647 61.0597 11.6044 60.2759 12.1738L54.5369 16.3435C54.1864 16.5981 54.0397 17.0495 54.1736 17.4615L56.3657 24.2082C56.6651 25.1295 55.6106 25.8956 54.8269 25.3262L49.0878 21.1565C48.7373 20.9019 48.2627 20.9019 47.9122 21.1565L42.1731 25.3262C41.3894 25.8956 40.3349 25.1295 40.6343 24.2082L42.8264 17.4615C42.9603 17.0495 42.8136 16.5981 42.4631 16.3435L36.7241 12.1738C35.9403 11.6044 36.3431 10.3647 37.3118 10.3647H44.4057C44.839 10.3647 45.2229 10.0858 45.3568 9.67376L47.5489 2.92705Z" fill="#FFC84A" />
                <path d="M79.5489 2.92705C79.8483 2.00574 81.1517 2.00574 81.4511 2.92705L83.6432 9.67376C83.7771 10.0858 84.161 10.3647 84.5943 10.3647H91.6882C92.6569 10.3647 93.0597 11.6044 92.2759 12.1738L86.5369 16.3435C86.1864 16.5981 86.0397 17.0495 86.1736 17.4615L88.3657 24.2082C88.6651 25.1295 87.6106 25.8956 86.8269 25.3262L81.0878 21.1565C80.7373 20.9019 80.2627 20.9019 79.9122 21.1565L74.1731 25.3262C73.3894 25.8956 72.3349 25.1295 72.6343 24.2082L74.8264 17.4615C74.9603 17.0495 74.8136 16.5981 74.4631 16.3435L68.7241 12.1738C67.9403 11.6044 68.3431 10.3647 69.3118 10.3647H76.4057C76.839 10.3647 77.2229 10.0858 77.3568 9.67376L79.5489 2.92705Z" fill="#FFC84A" />
                <path d="M111.549 2.92705C111.848 2.00574 113.152 2.00574 113.451 2.92705L115.643 9.67376C115.777 10.0858 116.161 10.3647 116.594 10.3647H123.688C124.657 10.3647 125.06 11.6044 124.276 12.1738L118.537 16.3435C118.186 16.5981 118.04 17.0495 118.174 17.4615L120.366 24.2082C120.665 25.1295 119.611 25.8956 118.827 25.3262L113.088 21.1565C112.737 20.9019 112.263 20.9019 111.912 21.1565L106.173 25.3262C105.389 25.8956 104.335 25.1295 104.634 24.2082L106.826 17.4615C106.96 17.0495 106.814 16.5981 106.463 16.3435L100.724 12.1738C99.9403 11.6044 100.343 10.3647 101.312 10.3647H108.406C108.839 10.3647 109.223 10.0858 109.357 9.67376L111.549 2.92705Z" fill="#FFC84A" />
                <path d="M143.549 2.92705C143.848 2.00574 145.152 2.00574 145.451 2.92705L147.643 9.67376C147.777 10.0858 148.161 10.3647 148.594 10.3647H155.688C156.657 10.3647 157.06 11.6044 156.276 12.1738L150.537 16.3435C150.186 16.5981 150.04 17.0495 150.174 17.4615L152.366 24.2082C152.665 25.1295 151.611 25.8956 150.827 25.3262L145.088 21.1565C144.737 20.9019 144.263 20.9019 143.912 21.1565L138.173 25.3262C137.389 25.8956 136.335 25.1295 136.634 24.2082L138.826 17.4615C138.96 17.0495 138.814 16.5981 138.463 16.3435L132.724 12.1738C131.94 11.6044 132.343 10.3647 133.312 10.3647H140.406C140.839 10.3647 141.223 10.0858 141.357 9.67376L143.549 2.92705Z" fill="#FFC84A" />
                <path d="M175.549 2.92705C175.848 2.00574 177.152 2.00574 177.451 2.92705L179.643 9.67376C179.777 10.0858 180.161 10.3647 180.594 10.3647H187.688C188.657 10.3647 189.06 11.6044 188.276 12.1738L182.537 16.3435C182.186 16.5981 182.04 17.0495 182.174 17.4615L184.366 24.2082C184.665 25.1295 183.611 25.8956 182.827 25.3262L177.088 21.1565C176.737 20.9019 176.263 20.9019 175.912 21.1565L170.173 25.3262C169.389 25.8956 168.335 25.1295 168.634 24.2082L170.826 17.4615C170.96 17.0495 170.814 16.5981 170.463 16.3435L164.724 12.1738C163.94 11.6044 164.343 10.3647 165.312 10.3647H172.406C172.839 10.3647 173.223 10.0858 173.357 9.67376L175.549 2.92705Z" fill="#FFC84A" />
              </svg>
              <p className="text-[18px] italic font-medium text-center">Chiropractic Doctor</p>
              <p className="text-[18px] italic font-medium text-center">AlignWell Chiropractic</p>
            </div>
          </div>
          <div className="px-[30px] py-[30px] rounded-[12px] border-[1px] border-[#1D3B36] flex flex-col gap-[20px]">
            <h4 className="text-[18px] py-[10px] font-bold border-b-[1px] border-b-[#1D3B36]">Hair / Nails Beauty Salon</h4>
            <p className="text-[18px] font-medium mb-[5px]">“We switched from a messy calendar system to BookAndReview and never looked back. Within 60 days, we saw a <strong className="text-[#00C461] font-bold">30% reduction in missed appointments,</strong> and our online reviews jumped from <strong className="text-[#00C461] font-bold">17 to 74,</strong> bringing in <strong className="text-[#00C461] font-bold">20+ new clients a month</strong> through Google alone. We’re now booked out two weeks ahead!”</p>
            <div className="grid gap-[10px]">
              <Image className="rounded-[12px]" src={`/images/testi-5.png`} width={402} height={250} alt="testi 2" />
              <p className="text-[18px] font-medium text-center">Susan K.</p>
              <svg width="225" height="30" viewBox="0 0 225 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.5489 2.92705C47.8483 2.00574 49.1517 2.00574 49.4511 2.92705L51.6432 9.67376C51.7771 10.0858 52.161 10.3647 52.5943 10.3647H59.6882C60.6569 10.3647 61.0597 11.6044 60.2759 12.1738L54.5369 16.3435C54.1864 16.5981 54.0397 17.0495 54.1736 17.4615L56.3657 24.2082C56.6651 25.1295 55.6106 25.8956 54.8269 25.3262L49.0878 21.1565C48.7373 20.9019 48.2627 20.9019 47.9122 21.1565L42.1731 25.3262C41.3894 25.8956 40.3349 25.1295 40.6343 24.2082L42.8264 17.4615C42.9603 17.0495 42.8136 16.5981 42.4631 16.3435L36.7241 12.1738C35.9403 11.6044 36.3431 10.3647 37.3118 10.3647H44.4057C44.839 10.3647 45.2229 10.0858 45.3568 9.67376L47.5489 2.92705Z" fill="#FFC84A" />
                <path d="M79.5489 2.92705C79.8483 2.00574 81.1517 2.00574 81.4511 2.92705L83.6432 9.67376C83.7771 10.0858 84.161 10.3647 84.5943 10.3647H91.6882C92.6569 10.3647 93.0597 11.6044 92.2759 12.1738L86.5369 16.3435C86.1864 16.5981 86.0397 17.0495 86.1736 17.4615L88.3657 24.2082C88.6651 25.1295 87.6106 25.8956 86.8269 25.3262L81.0878 21.1565C80.7373 20.9019 80.2627 20.9019 79.9122 21.1565L74.1731 25.3262C73.3894 25.8956 72.3349 25.1295 72.6343 24.2082L74.8264 17.4615C74.9603 17.0495 74.8136 16.5981 74.4631 16.3435L68.7241 12.1738C67.9403 11.6044 68.3431 10.3647 69.3118 10.3647H76.4057C76.839 10.3647 77.2229 10.0858 77.3568 9.67376L79.5489 2.92705Z" fill="#FFC84A" />
                <path d="M111.549 2.92705C111.848 2.00574 113.152 2.00574 113.451 2.92705L115.643 9.67376C115.777 10.0858 116.161 10.3647 116.594 10.3647H123.688C124.657 10.3647 125.06 11.6044 124.276 12.1738L118.537 16.3435C118.186 16.5981 118.04 17.0495 118.174 17.4615L120.366 24.2082C120.665 25.1295 119.611 25.8956 118.827 25.3262L113.088 21.1565C112.737 20.9019 112.263 20.9019 111.912 21.1565L106.173 25.3262C105.389 25.8956 104.335 25.1295 104.634 24.2082L106.826 17.4615C106.96 17.0495 106.814 16.5981 106.463 16.3435L100.724 12.1738C99.9403 11.6044 100.343 10.3647 101.312 10.3647H108.406C108.839 10.3647 109.223 10.0858 109.357 9.67376L111.549 2.92705Z" fill="#FFC84A" />
                <path d="M143.549 2.92705C143.848 2.00574 145.152 2.00574 145.451 2.92705L147.643 9.67376C147.777 10.0858 148.161 10.3647 148.594 10.3647H155.688C156.657 10.3647 157.06 11.6044 156.276 12.1738L150.537 16.3435C150.186 16.5981 150.04 17.0495 150.174 17.4615L152.366 24.2082C152.665 25.1295 151.611 25.8956 150.827 25.3262L145.088 21.1565C144.737 20.9019 144.263 20.9019 143.912 21.1565L138.173 25.3262C137.389 25.8956 136.335 25.1295 136.634 24.2082L138.826 17.4615C138.96 17.0495 138.814 16.5981 138.463 16.3435L132.724 12.1738C131.94 11.6044 132.343 10.3647 133.312 10.3647H140.406C140.839 10.3647 141.223 10.0858 141.357 9.67376L143.549 2.92705Z" fill="#FFC84A" />
                <path d="M175.549 2.92705C175.848 2.00574 177.152 2.00574 177.451 2.92705L179.643 9.67376C179.777 10.0858 180.161 10.3647 180.594 10.3647H187.688C188.657 10.3647 189.06 11.6044 188.276 12.1738L182.537 16.3435C182.186 16.5981 182.04 17.0495 182.174 17.4615L184.366 24.2082C184.665 25.1295 183.611 25.8956 182.827 25.3262L177.088 21.1565C176.737 20.9019 176.263 20.9019 175.912 21.1565L170.173 25.3262C169.389 25.8956 168.335 25.1295 168.634 24.2082L170.826 17.4615C170.96 17.0495 170.814 16.5981 170.463 16.3435L164.724 12.1738C163.94 11.6044 164.343 10.3647 165.312 10.3647H172.406C172.839 10.3647 173.223 10.0858 173.357 9.67376L175.549 2.92705Z" fill="#FFC84A" />
              </svg>
              <p className="text-[18px] italic font-medium text-center">Co-owner</p>
              <p className="text-[18px] italic font-medium text-center">Paws ‘n Claws Pet Care</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[40px] bg-[#D6EFEB] grid gap-[20px]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">Pricing Summary</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">Simple, transparent pricing. No hidden fees. Cancel anytime.</p>
        </div>
        <div className="w-[1200px] mx-auto overflow-hidden border-[#1D3B36]">
          <div>
            <button
              onClick={() => handleTabClick('TabA')}
              className={`py-[10px] px-[30px] [border-width:1px_1px_0px_1px] border-[#1D3B36] rounded-tl-[12px] font-bold text-[24px] ${activeTab === 'TabA' ? 'bg-[#1D3B36] text-white' : 'bg-[#E3E8EC]'}`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => handleTabClick('TabB')}
              className={`py-[10px] px-[30px] [border-width:1px_1px_0px_1px] border-[#1D3B36] rounded-tr-[12px] font-bold text-[24px] ${activeTab === 'TabB' ? 'bg-[#1D3B36] text-white' : 'bg-[#E3E8EC]'}`}
            >
              Save More with Yearly Plan 👍
            </button>
          </div>
          <div className="border-[1px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] p-[20px] overflow-hidden bg-white">
            <div className={`${activeTab === "TabA" ? "grid" : "hidden"}`}>
              <table className="w-full divide-y divide-[#1D3B36] font-bold text-[24px]">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center w-[33.3333%]">ESSENTIALS</th>
                    <th className="text-center w-[33.3333%]">BRANDED PRO</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-left border-b-[1px] border-[#E3E8EC] py-[20px]">Monthly Base Fee</td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">$59/ month</td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">$99/ month</td>
                  </tr>
                  <tr>
                    <td className="text-left border-b-[1px] border-[#E3E8EC] py-[20px]">
                      <div>
                        <div>+ Per Appointment</div>
                        <div className="text-[18px] font-medium italic">Covers email/ SMS reminders, feedback requests and smart filtering to boost reviews and reduce no-shows.</div>
                      </div>
                    </td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">+ $0.40/ appt.</td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">+ $0.40/ appt.</td>
                  </tr>
                  <tr>
                    <td className="text-left border-b-[1px] border-[#E3E8EC] py-[20px]">
                      Domain Type
                    </td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">YourBiz.BookAndReview.com</td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">YourBiz.com</td>
                  </tr>
                  <tr>
                    <td className="text-left py-[20px]">
                      <div>
                        <div>Instore Check-in and Google Review Tags</div>
                        <div className="text-[18px] font-medium italic">Optional, but powerful — helps you collect more 5-star Google reviews right at your location using tap or scan.</div>
                      </div>
                    </td>
                    <td className="py-[20px]" colSpan={2}>
                      <div className="text-[24px] flex items-center justify-center text-left">
                        <Image src={`/images/pricing.png`} width={185} height={128} alt="Pricing" />
                        <div>
                          <p className="text-[#1D3B36] font-bold">$50/ set, includes:</p>
                          <p className="font-medium">✅ 2 Check-in Tags</p>
                          <p className="font-medium">✅ 10 Google Review Tags</p>
                          <p className="font-medium">✅ available in both plans</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={`${activeTab === "TabB" ? "grid" : "hidden"}`}>
              <table className="w-full divide-y divide-[#1D3B36] font-bold text-[24px]">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center w-[33.3333%]">ESSENTIALS</th>
                    <th className="text-center w-[33.3333%]">BRANDED PRO</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-left border-b-[1px] border-[#E3E8EC] py-[20px]">Yearly Base Fee</td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">
                      <p className="font-bold">$675/ year</p>
                      <p className="font-medium italic">(5% discount)</p>
                    </td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">
                      <p className="font-bold">$1,130/ year</p>
                      <p className="font-medium italic">(5% discount)</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left border-b-[1px] border-[#E3E8EC] py-[20px]">
                      <div>
                        <div>Plus Per Appointment Fee</div>
                        <div className="text-[18px] font-medium italic">Covers email/ SMS reminders, feedback requests and smart filtering to boost reviews and reduce no-shows.</div>
                      </div>
                    </td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">+$0.40/ appt.</td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">+$0.40/ appt.</td>
                  </tr>
                  <tr>
                    <td className="text-left border-b-[1px] border-[#E3E8EC] py-[20px]">
                      Domain Type
                    </td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">YourBiz.BookAndReview.com</td>
                    <td className="border-b-[1px] border-[#E3E8EC] py-[20px]">YourBiz.com</td>
                  </tr>
                  <tr>
                    <td className="text-left py-[20px]">
                      <div>
                        <div>Instore Check-in and Google Review Tags</div>
                        <div className="text-[18px] font-medium italic">Optional, but powerful — helps you collect more 5-star Google reviews right at your location using tap or scan.</div>
                      </div>
                    </td>
                    <td className="py-[20px]" colSpan={2}>
                      <div className="text-[24px] flex items-center justify-center text-left">
                        <Image src={`/images/pricing.png`} width={185} height={128} alt="Pricing" />
                        <div>
                          <p className="text-[#1D3B36] font-bold">$50/ set, includes:</p>
                          <p className="font-medium">✅ 2 Check-in Tags</p>
                          <p className="font-medium">✅ 10 Google Review Tags</p>
                          <p className="font-medium">✅ available in both plans</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-[32px] font-bold italic mx-auto text-center w-[760px] mt-[20px]">
            Get started in minutes. No dev team needed. Enjoy a 14-day free trial!
          </div>
          <div className="grid grid-cols-1 gap-[20px] w-[632px] mx-auto my-[20px]">
            <div className="grid grid-cols-2 gap-[20px]">
              <button className="bg-[#C6E100] rounded-[8px] px-[24px] py-[12px] hover:bg-[#AAB800] max-w-[300px]">Claim My 14-Day Free Trial</button>
              <button className="bg-[#F9F9F6] rounded-[8px] border-[1px] border-[#1D3B36] px-[24px] py-[12px] hover:bg-[#E3E3E3] relative">
                <span>Explore Full Pricing & Features</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[40px] bg-[#E3E8EC] grid gap-[20px]">
        <div className="w-[1200px] mx-auto text-center">
          <h2 className="text-[72px] font-semibold text-[#1D3B36]">Frequently Asked Questions</h2>
          <p className="text-[#444C53] font-medium text-[36px] w-[1110px]">Got questions? We've got answers.</p>
        </div>
        <div className="grid gap-[5px]">
          {
            items.map((item,index) => {
              const isActiveButton =  activeIndex === index || index === 0;
              const isOpen = activeIndex === index;
              return (
                <div key={index} className="w-[840px] mx-auto  border-[1px] border-[#E3E8EC]">
                  <button 
                  onClick={() => toggleArcordion(index)}
                  className={`w-full rounded-[8px] h-[51px] ${isActiveButton ? "bg-[#1D3B36] text-white" : "bg-white text-[#1D3B36]"}`}
                  >
                    <span>{item.title}</span>
                  </button>
                  <div className={`overflow-hidden px-[10px] ${isOpen ? "py-4" : "max-h-0"}`}>
                    {item.content}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
