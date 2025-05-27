import { FaDiscord, FaTwitter } from "react-icons/fa";

export function FooterSection() {
  return (
    <div className=" absolute bottom-0 left-0 right-0 z-50">
      <div className="flex items-center justify-center relative">
        <div className="border-solid  max-w-7xl w-full bg-transparent rounded-full flex items-center justify-between px-10">
          <div>
            <span className="text-lg font-bold text-black">support@hushtap.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaDiscord size={24} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center my-2 ">
        <span className="text-black ">© 2025 Hushtap</span>
      </div>
    </div>
  );
}