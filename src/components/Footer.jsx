import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaLinkedinIn,
    FaPinterestP,
  } from "react-icons/fa";
  import { IoLocationSharp } from "react-icons/io5";
  import { MdPhone, MdEmail } from "react-icons/md";
  
  export default function Footer() {
    return (
      <footer className="bg-gray-100 text-black py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
  <div className="flex items-center gap-2 mb-2">
    <img src="/Logo.png" alt="App Store" className="h-10" />
    <h1 className="text-2xl font-bold text-teal-700 tracking-wide">TealPot</h1>

  </div>
  <p className="text-sm mb-4">
    Transforming the Freelance Ecosystem with a platform that empowers
    both Freelancers and Clients.
  </p>
  {/* Social Icons */}
  <div className="flex gap-4 text-xl mb-4">
    <FaFacebookF />
    <FaInstagram />
    <FaTiktok />
    <FaYoutube />
    <FaLinkedinIn />
    <FaPinterestP />
  </div>
  {/* App Store Buttons */}
  <div className="flex gap-2">
    <img src="/newgoogleplaybutton.png" alt="Google Play" className="h-10" />
    <img src="/newapplestorebutton.png" alt="App Store" className="h-10" />
  </div>
</div>

  
          {/* About Tealpot */}
          <div>
            <h2 className="font-bold mb-3">About Tealpot</h2>
            <ul className="space-y-2 text-sm">
              <li>Help Articles</li>
              <li>EU Licence Agreement</li>
              <li>Equal Opportunity</li>
              <li>Terms and Conditions</li>
              <li>FAQs</li>
              <li>About</li>
              <li>Help</li>
            </ul>
          </div>
  
          {/* For Freelancers */}
          <div>
            <h2 className="font-bold mb-3">For Freelancers</h2>
            <ul className="space-y-2 text-sm">
              <li>Create Account</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h2 className="font-bold mb-3">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <IoLocationSharp /> United States Of America
              </li>
              <li className="flex items-center gap-2">
                <MdPhone /> +1 877 547 0990
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> support@tealpot.com
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Links */}
        <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
          <p>Copyright © 2024 Tealpot. All rights reserved</p>
          <div className="flex justify-center gap-6 mt-2">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>
          </div>
        </div>
      </footer>
    );
  }
  