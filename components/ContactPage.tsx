import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Info */}
      <motion.div
        className="w-full md:w-1/3 bg-[#0066FF] text-white p-8 md:p-12 flex flex-col justify-between min-h-[50vh] md:min-h-screen"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <motion.h1
            className="text-white mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Something Together.
          </motion.h1>

          <motion.div
            className="space-y-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-start gap-4 group">
              <Mail className="mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-white/70 mb-1 tracking-wider">EMAIL</p>
                <a
                  href="mailto:hello@startuparchitects.com"
                  className="text-white border-b-2 border-white/0 hover:border-[#C5FF00] transition-fast"
                >
                  hello@startuparchitects.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <Phone className="mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-white/70 mb-1 tracking-wider">PHONE</p>
                <a
                  href="tel:+233555123456"
                  className="text-white border-b-2 border-white/0 hover:border-[#C5FF00] transition-fast"
                >
                  +233 555 123 456
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <MapPin className="mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-white/70 mb-1 tracking-wider">LOCATION</p>
                <p className="text-white">
                  Accra, Ghana
                  <br />
                  West Africa
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 md:mt-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/70 mb-4 tracking-wider">FOLLOW US</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0066FF] transition-fast"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0066FF] transition-fast"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0066FF] transition-fast"
            >
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Panel - Form */}
      <motion.div
        className="w-full md:w-2/3 bg-white p-8 md:p-12 lg:p-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="mb-4">Start Your Project</h2>
          <p className="text-[#1A1A1A]/70 mb-12">
            Tell us about your vision, and we'll architect the path to success.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="border-b-2 border-[#E5E5E5] pb-4">
              <label
                htmlFor="name"
                className="block mb-2 tracking-wider text-[#1A1A1A]/70"
              >
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none outline-none p-0 text-[#1A1A1A]"
                placeholder="John Doe"
              />
            </div>

            <div className="border-b-2 border-[#E5E5E5] pb-4">
              <label
                htmlFor="email"
                className="block mb-2 tracking-wider text-[#1A1A1A]/70"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none outline-none p-0 text-[#1A1A1A]"
                placeholder="john@company.com"
              />
            </div>

            <div className="border-b-2 border-[#E5E5E5] pb-4">
              <label
                htmlFor="company"
                className="block mb-2 tracking-wider text-[#1A1A1A]/70"
              >
                COMPANY / STARTUP
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-none outline-none p-0 text-[#1A1A1A]"
                placeholder="Your Company Name"
              />
            </div>

            <div className="border-b-2 border-[#E5E5E5] pb-4">
              <label
                htmlFor="message"
                className="block mb-2 tracking-wider text-[#1A1A1A]/70"
              >
                PROJECT DETAILS
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border-none outline-none p-0 text-[#1A1A1A] resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>

            <motion.button
              type="submit"
              className="bg-[#0066FF] text-white px-12 py-4 border-4 border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-fast inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wider">SEND MESSAGE</span>
              <Send size={20} />
            </motion.button>
          </form>

          <div className="mt-16 p-8 bg-[#F5F5F5] border-l-4 border-[#C5FF00]">
            <p className="text-[#1A1A1A]/70">
              <strong className="text-[#1A1A1A]">Response Time:</strong> We
              typically respond within 24 hours. For urgent inquiries, please
              call us directly.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
