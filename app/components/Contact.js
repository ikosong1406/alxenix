import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// NOTE: These social icon imports must be present if you are using them in the JSX
import { FaWhatsapp, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const router = useRouter();

  // Placeholder for your actual social links
  const SOCIAL_LINKS = {
    whatsapp: "https://wa.me/YOUR_PHONE_NUMBER", // CHANGE THIS
    x: "https://x.com/Alexandervirt14", // CHANGE THIS TO YOUR X/Twitter handle
  };

  const handleCtaClick = () => {
    // Redirects to your X/Twitter profile or DMs
    router.push(SOCIAL_LINKS.x);
  };

  // Assuming fadeInUp is defined elsewhere or imported
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="py-12 md:py-16 bg-gradient-to-r from-black to-gray-800"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-20 text-white">
        {/* CTA Box */}
        <div className="bg-black2 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to Initiate a Contract?
            </h3>
            <p className="text-gray-300 mt-1">
              Let's discuss your project scope and next steps immediately.
            </p>
          </div>

          <button
            onClick={handleCtaClick}
            className="bg-green text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-green/50 transition duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Send a Direct Message
          </button>
        </div>

        {/* Social Links Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <div className="flex gap-6">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green transition-colors"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-green transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
