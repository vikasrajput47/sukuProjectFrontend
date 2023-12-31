import React from "react";
import logo from "./img/logo.png";
import facebookIcon from './img/fb.png';
import linkedinIcon from './img/in.png';
import instagramIcon from './img/insta.png';

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-slate-500 mt-8 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <img src={logo} className="h-24" alt="Logo" />
            <div className="md:w-1/2 mb-4 md:mb-0 mt-5">
              <p>
                Founded in 1997, Tridend is a group of companies redefining the
                3PL services ecosystem in India with a unique specialization in
                the booming automobile industry.
              </p>
            </div>

            
            {/* Social Media Icons */}
            <div className="md:w-1/2 mt-4 md:mt-5 flex justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61554705075603&mibextid=ZbWKwL"
                className="text-white mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" className="h-10" />
              </a>
              <a
                href="https://www.linkedin.com/company/3t-logistics-warehousing/"
                className="text-white mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-9" />
              </a>
              <a
                href="https://www.instagram.com/threetee.logistics?igsh=a215dXJkbmd2NGoz"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" className="h-9" />
              </a>
            </div>
          </div>

          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <strong className="text-2xl">Quick Contact:</strong>
              <p>
                For general and business queries, please connect via details
                given below.
              </p>
              <h2>
                <strong className="text-xl">&#128222;: +91 9811586103</strong>
              </h2>
              <h2>
                <strong className="text-xl">&#9993;: rkpal@3tl.in</strong>
              </h2>
              <p></p>
              <div>
                <address>
                  3T House – 2316/23, Opp. Payal Cinema, Sector 14, Gurugram,
                  Haryana. 122001
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
