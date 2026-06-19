import { motion, AnimatePresence } from 'framer-motion';
import { Target, Compass, Lightbulb, Users, Award, TrendingUp, X, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useRef, useEffect } from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const processRefs = useRef<(HTMLDivElement | null)[]>([]);

  const team = [
    {
      name: 'Kwame Mensah',
      role: 'Founder & Chief Architect',
      image: 'https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHBlcnNvbnxlbnwxfHx8fDE3NjA3Mjk1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Ama Boateng',
      role: 'Director of Strategy',
      image: 'https://images.unsplash.com/photo-1551862390-7894b509f8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDcyMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Kofi Asante',
      role: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYwNzA0NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const services = [
    {
      id: 'core',
      title: 'Core Services',
      items: [
        'Web development',
        'Mobile app development',
        'UI/UX design',
        'Motion graphics',
        'Digital marketing',
      ],
      philosophy: 'We deliver the core digital capabilities that help businesses launch faster, look sharper, and perform better across every touchpoint.',
    },
    {
      id: 'growth',
      title: 'Growth Services',
      items: [
        'AI automation',
        'WhatsApp automation',
        'Data analytics',
        'SEO',
      ],
      philosophy: 'We turn systems, data, and communication channels into growth engines that increase efficiency and unlock new revenue opportunities.',
    },
    {
      id: 'premium',
      title: 'Premium Services',
      items: [
        'AI agents',
        'Custom software',
        'SaaS MVPs',
        'Cloud solutions',
        'Cybersecurity',
      ],
      philosophy: 'We build high-value, future-ready solutions that give ambitious companies a competitive edge through smarter automation and stronger infrastructure.',
    },
    {
      id: 'recurring',
      title: 'Recurring Revenue Services',
      items: [
        'Managed IT',
        'Hosting',
        'Maintenance',
        'Marketing retainers',
        'Automation support',
      ],
      philosophy: 'We provide ongoing operational support so teams can stay secure, stay visible, and keep improving without losing momentum.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Foundation',
      description: 'Research & discovery sessions that define your market position.',
    },
    {
      number: '02',
      title: 'Blueprint',
      description: 'Strategic planning and prototype architecture.',
    },
    {
      number: '03',
      title: 'Construction',
      description: 'We develop, iterate, and test for stability.',
    },
    {
      number: '04',
      title: 'Elevation',
      description: 'Launch, scale, and continuous optimization.',
    },
  ];

  const stats = [

    { number: '20+', label: 'Team Members' },
    { number: '6', label: 'Countries Served' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('line-draw');
          }
        });
      },
      { threshold: 0.5 }
    );

    processRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6">
        <div className="absolute inset-0 blueprint-grid" />
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            You do not need more pressure. You need a better system.
          </motion.h1>
          <motion.p
            className="text-[#1A1A1A]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Most businesses are not struggling because they do not care. They are struggling because the basics are not strong enough.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-[#0066FF]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white mb-2">{stat.number}</h2>
              <p className="text-white/80 tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section - "Our Approach" */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <motion.div
          className="flex items-center justify-center p-12 md:p-20 bg-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="mb-8">Clear systems help businesses grow with less stress.</h2>
            <p className="mb-6">
              We help remove the small problems that slow teams down, confuse customers, and waste money.
            </p>
            <div className="border-l-4 border-[#1A1A1A] pl-6 my-8 italic">
              <p className="text-xl">
                "When the system is weak, everything feels harder."
              </p>
            </div>
            <p className="mb-6">
              Strong branding, simple processes, and reliable tools help people trust you faster.
            </p>
            <div className="w-24 h-2 bg-[#C5FF00] mt-8" />
          </div>
        </motion.div>
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695170152778-ef5d0a0bdf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjA3ODY2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Architectural geometry"
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
        </motion.div>
      </section>

      {/* Services Philosophy Grid - "What We Shape" */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="mb-4">Where we create real impact</h2>
            <p className="text-[#1A1A1A]/70">The areas that help businesses move faster, look better, and perform stronger.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="border border-[#E5E5E5] bg-white p-8 group hover:bg-[#0066FF] transition-fast cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedService(service.id)}
              >
                <p className="text-sm tracking-[0.3em] text-[#0066FF] group-hover:text-[#C5FF00] transition-fast mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-4 group-hover:text-white transition-fast">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[#1A1A1A]/75 group-hover:text-white/90 transition-fast"
                    >
                      <span className="w-2 h-2 bg-[#C5FF00] rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Service Philosophy Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-[#1A1A1A]/95 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="fixed inset-0 bg-[#0066FF] z-50"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
            <motion.div
              className="bg-white max-w-2xl w-full p-12 relative z-[60]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="w-12 h-12 border-2 border-[#1A1A1A] flex items-center justify-center mb-8 hover:bg-[#1A1A1A] hover:text-white transition-fast"
              >
                <X size={24} />
              </button>
              <h2 className="mb-6">
                {services.find((s) => s.id === selectedService)?.title}
              </h2>
              <p className="text-[#1A1A1A]/80 leading-relaxed">
                {services.find((s) => s.id === selectedService)?.philosophy}
              </p>
              <div className="w-24 h-2 bg-[#C5FF00] mt-8" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Process Section - "How We Build" */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="mb-4">How we remove friction</h2>
            <p className="text-[#1A1A1A]/70">A simple process built to expose the real blockers and fix them fast.</p>
          </div>
          <div className="bg-white border-2 border-[#1A1A1A]">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                ref={(el) => {
                  processRefs.current[index] = el;
                }}
                className={`flex items-start gap-8 p-8 ${
                  index < processSteps.length - 1 ? 'border-b border-[#E5E5E5]' : ''
                } process-step`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16">
                  <span
                    className="text-3xl tracking-tighter"
                    style={{ fontFamily: 'monospace' }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-[#1A1A1A]/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Vision / CTA Section - "Join the Movement" */}
      <section className="py-32 px-6 bg-[#0066FF] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-white">The businesses that move first are the ones that act now.</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto">
            If your systems, brand, or growth are falling behind, the cost of waiting keeps growing.
          </p>
          <motion.button
            className="bg-transparent text-white px-12 py-4 border-4 border-white hover:bg-white hover:text-[#0066FF] transition-fast inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tracking-wider">BOOK A CONSULTATION</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6">If you are ready to grow, we are ready to help.</h2>
          <p className="text-[#1A1A1A]/70 mb-12 max-w-2xl mx-auto">
            The right strategy and execution can help your business look stronger, work smoother, and compete better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => onNavigate('contact')}
              className="bg-[#0066FF] text-white px-12 py-4 border-4 border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-fast"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wider">BOOK A STRATEGY CALL</span>
            </motion.button>
            <motion.button
              onClick={() => onNavigate('portfolio')}
              className="bg-white text-[#1A1A1A] px-12 py-4 border-4 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-fast"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wider">SEE OUR WORK</span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
