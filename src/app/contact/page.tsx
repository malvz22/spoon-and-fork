import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Page = () => {
  return (
    <main className="custom-container">
      <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-2xl mb-3">Contact Information</h2>
          <div className="flex flex-row gap-3 items-center">
            <IoMail size={18} />
            <p>contact@spoonandfork.com</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <FaPhoneAlt size={18} />
            <p>(555) 123-4567</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <FaLocationDot size={18} />
            <p>123 Culinary Avenue, Flavor Town, CA 90210</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Page;
