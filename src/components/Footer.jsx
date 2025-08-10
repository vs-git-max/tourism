import Logo from "@/pages/Logo";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const footerData = [
  {
    category: "Social Media",
    type: "social",
    items: [
      {
        label: "Facebook",
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/YourTourismPage",
      },
      {
        label: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/YourTourismPage",
      },
      {
        label: "Twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com/YourTourismPage",
      },
      {
        label: "YouTube",
        icon: <FaYoutube />,
        link: "https://www.youtube.com/YourTourismPage",
      },
      {
        label: "TikTok",
        icon: <FaTiktok />,
        link: "https://www.tiktok.com/@YourTourismPage",
      },
    ],
  },
  {
    category: "Quick Navigation",
    type: "links",
    items: [
      { label: "Popular Destinations", link: "/destinations" },
      { label: "Things to Do", link: "/things-to-do" },
      { label: "Events & Festivals", link: "/events" },
      { label: "Travel Guides", link: "/guides" },
      { label: "Blog / Articles", link: "/blog" },
      { label: "Special Offers", link: "/offers" },
      { label: "Booking / Reservations", link: "/booking" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
  {
    category: "Contact & Support",
    type: "links",
    items: [
      { label: "Head Office Address", link: "/contact#address" },
      { label: "Phone Support", link: "tel:+254700000000" },
      { label: "Email Support", link: "mailto:info@tourismwebsite.com" },
      { label: "Live Chat", link: "/support/live-chat" },
      { label: "Emergency Helpline", link: "/support/emergency" },
    ],
  },
  {
    category: "Trust & Legal",
    type: "links",
    items: [
      { label: "About Us", link: "/about" },
      { label: "Privacy Policy", link: "/privacy-policy" },
      { label: "Terms & Conditions", link: "/terms" },
      { label: "Refund & Cancellation Policy", link: "/refund-policy" },
      { label: "Cookie Preferences", link: "/cookie-preferences" },
      { label: "Accessibility Statement", link: "/accessibility" },
    ],
  },
];

const Footer = () => {
  console.log(footerData.type);

  return (
    <div className="p-4 mt-5">
      <Logo />
      <div className="mt-4 flex  justify-between ">
        {footerData.map((footerLink) => (
          <div key={footerLink.category} className="">
            <h1 className="text-lg font-medium"> {footerLink.category}</h1>
            <div
              className={`flex ${
                footerLink.type === "social" ? "" : "flex-col"
              } items-center justify-between gap-2`}
            >
              {footerLink.items.map((linkItem) => (
                <a
                  href={linkItem.link}
                  className={` font-medium ${
                    footerLink.type === "social"
                      ? "text-xl hover:text-foreground duration-500 transition"
                      : ""
                  } text-sm text-muted-foreground hover:underline `}
                >
                  {footerLink.type === "social"
                    ? linkItem.icon
                    : linkItem.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
