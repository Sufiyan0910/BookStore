import React from "react";
import { BsX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <hr className="mt-10" />
      <footer className="footer footer-center p-8 text-base-content rounded dark:bg-slate-900 dark:text-white">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Contact Information & Social Links */}
        <nav className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6">
          {/* Contact Info */}
          <div className="text-center">
            <p>
              Phone:{" "}
              <a
                href="tel: +91 9137460802"
                className="hover:text-blue-300 hover:underline"
              >
                +91 9137460802
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sufiyankhann2027@gmail.com"
                className="hover:text-blue-300 hover:underline"
              >
                sufiyankhann2027@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/Sufiyan0910"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl hover:text-gray-500 hover:scale-125 transition duration-200" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100012829745857"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-3xl hover:text-blue-500 hover:scale-125 transition duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/sufiyan-khan-b951411a4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl hover:text-blue-600 hover:scale-125 transition duration-200" />
            </a>
            <a
              href="https://www.instagram.com/sufiyan_0910/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl hover:text-red-500 hover:scale-125 transition duration-200" />
            </a>
            <a
              href="https://x.com/Sufiyan_0910"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <BsX className="text-4xl hover:text-black hover:scale-125 transition duration-200" />
            </a>
          </div>
        </nav>

        {/* Copyright Text */}
        <aside className="mt-6 font-extrabold">
          <p>Copyright © 2025 - All Rights Reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
