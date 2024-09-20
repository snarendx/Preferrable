import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#657ED4] text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
        <div className="w-full md:w-auto">
          <img src="logo.jpg" alt="Logo" className="mb-2 mx-auto md:mx-0" />
        </div>

        <div className="w-full md:w-auto">
          <p className="font-bold">Placement</p>
          <ul className="space-y-1">
            <li>Freshers</li>
            <li>Working professional</li>
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <p className="font-bold">Company</p>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Blogs</li>
            <li>Parent company</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <p className="font-bold">Follow us!</p>
          <div className="flex justify-center md:justify space-x-4 text-white mt-2">
            <FaYoutube />
            <FaInstagram />
            <FaWhatsapp />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
