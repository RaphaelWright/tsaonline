import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    { title: 'Consultation', description: 'Strategic planning and business architecture' },
    { title: 'Advertisement', description: 'Brand positioning and market reach' },
    { title: 'Web & Software Dev', description: 'Digital products built to scale' },
    { title: 'Marketing', description: 'Digital & traditional campaigns' },
    { title: 'Event Planning', description: 'Memorable brand experiences' },
    { title: 'IT Assistance', description: 'Technical support and infrastructure' },
  ];

  const caseStudies = [
    {
      title: 'FinTech Revolution',
      category: 'Branding & Development',
      image: 'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Urban Development',
      category: 'Marketing & Strategy',
      image: 'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Tech Innovation Hub',
      category: 'Full Development',
      image: 'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Global Expansion',
      category: 'Consulting',
      image: 'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <motion.div
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We Design IT Solutions for Businesses & Brands.
          </motion.h1>
          <motion.p
            className="mb-12 text-[#1A1A1A]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Consulting. Software Development. Advertising and Marketing. 
          </motion.p>
          <motion.button
            className="bg-[#0066FF] text-white px-12 py-4 border-4 border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-fast inline-flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
          >
            <span className="tracking-wider">START A PROJECT</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* About / Philosophy Section */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Architecture"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
        <motion.div
          className="flex items-center justify-center p-12 md:p-20 bg-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="mb-8">Structure Meets Strategy.</h2>
            <p className="mb-6">
              At The Startup Architects, we don't just build businesses—we engineer them. Our approach
              combines the precision of architectural thinking with the agility of modern innovation.
            </p>
            <p className="mb-6">
              Every startup is a structure waiting to be designed. We create the blueprints for sustainable
              growth, scalable systems, and brands that stand the test of time.
            </p>
            <div className="w-20 h-1 bg-[#C5FF00] mt-8" />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="aspect-square border-2 border-[#1A1A1A] bg-white p-8 flex flex-col justify-end group hover:bg-[#0066FF] transition-fast cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-fast">
                  <span className="text-8xl">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-3 group-hover:text-white transition-fast relative z-10">
                  {service.title}
                </h3>
                <p className="text-[#1A1A1A]/70 group-hover:text-white/90 transition-fast relative z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Community Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8">Join the Architects Network.</h2>
          <p className="mb-12 text-[#1A1A1A]/70">
            Connect with visionary founders, builders, and innovators shaping the future of business.
          </p>
          <motion.button
            className="bg-[#1A1A1A] text-white px-12 py-4 hover:bg-[#0066FF] transition-fast inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tracking-wider">JOIN THE NETWORK</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="mb-4">Case Studies</h2>
          <p className="text-[#1A1A1A]/70">Our blueprint for success, realized.</p>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 px-6 scrollbar-thin"
          style={{ scrollbarWidth: 'thin' }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="flex-shrink-0 w-[400px] md:w-[500px] aspect-[4/3] relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-fast"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[#C5FF00] mb-2 tracking-wider">{study.category}</p>
                <h3 className="text-white">{study.title}</h3>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-fast">
                <ExternalLink className="text-white" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.button
            onClick={() => onNavigate('portfolio')}
            className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-12 py-4 hover:bg-[#1A1A1A] hover:text-white transition-fast inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tracking-wider">EXPLORE OUR PORTFOLIO</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
          <div>
            <h3 className="mb-4 text-white">The Startup Architects</h3>
            <p className="text-white/70">Building the future, one startup at a time.</p>
          </div>
          <div>
            <h3 className="mb-4 text-white">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => onNavigate('home')}
                className="text-white/70 hover:text-[#C5FF00] transition-fast text-left"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-white/70 hover:text-[#C5FF00] transition-fast text-left"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="text-white/70 hover:text-[#C5FF00] transition-fast text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-white/70 hover:text-[#C5FF00] transition-fast text-left"
              >
                Contact
              </button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-white">Contact</h3>
            <p className="text-white/70 mb-2">hello@startuparchitects.com</p>
            <p className="text-white/70 mb-2">+233 555 123 456</p>
            <p className="text-white/70">Accra, Ghana</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-white/50 relative z-10">
          <p>&copy; 2025 The Startup Architects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}