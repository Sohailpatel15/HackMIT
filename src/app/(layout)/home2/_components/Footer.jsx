import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const socialLinks = [
  {
    href: "https://www.instagram.com/hack.mitwpu",
    icon: <Instagram className="h-6 w-6" />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/hack-mit-wpu/",
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:hackathon.secretariat@mitwpu.edu.in",
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-hack-100 py-16 text-hack-500 z-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:gap-4">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-center text-lg font-light md:text-left">
            ©HACK MIT-WPU {CURRENT_YEAR}. All rights reserved
          </p>
          <div className="flex items-center gap-2 text-lg font-light z-50 hover:text-yellow-500 transition-colors duration-300">
            <Phone className="h-4 w-4 " />
            <Link href="tel:7700061776">Contact Us: +91 7700061776</Link>
          </div>
        </div>

        <nav
          className="flex justify-center gap-6 md:justify-start z-50"
          aria-label="Social media links"
        >
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-hack-500 transition-all duration-300 ease-in-out hover:scale-110 hover:text-yellow-500"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </nav>

        <Link
          href="/privacy-policy"
          className="text-center text-lg pr-7 font-light transition-colors duration-300 hover:text-white hover:underline md:text-right"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
