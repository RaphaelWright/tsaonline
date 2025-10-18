import { motion, AnimatePresence } from 'motion/react';
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
      id: 'consulting',
      title: 'Consulting',
      philosophy: 'We architect your business foundation. Through deep discovery and strategic analysis, we create blueprints for sustainable growth. Every recommendation is data-driven, every strategy is scalable.',
    },
    {
      id: 'advertising',
      title: 'Advertising',
      philosophy: 'Your brand is your building\'s facade. We design advertising campaigns with architectural precision—every message positioned for maximum impact, every touchpoint engineered for conversion.',
    },
    {
      id: 'development',
      title: 'Web & Software Development',
      philosophy: 'Code is our construction material. We build digital products with structural integrity—clean architecture, scalable systems, and user experiences that stand the test of time.',
    },
    {
      id: 'marketing',
      title: 'Marketing (Digital & Traditional)',
      philosophy: 'Marketing is the infrastructure of growth. We combine digital innovation with traditional wisdom, creating campaigns that connect, convert, and compound your success.',
    },
    {
      id: 'events',
      title: 'Events & Planning',
      philosophy: 'Experiences are architectural moments. We design events as immersive brand environments—every detail orchestrated, every interaction intentional, every memory lasting.',
    },
    {
      id: 'it',
      title: 'IT Assistance',
      philosophy: 'Technology is your foundation. We provide structural support for your digital infrastructure—reliable, responsive, and ready to scale as you build.',
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
    { number: '150+', label: 'Projects Delivered' },
    { number: '40+', label: 'Team Members' },
    { number: '15', label: 'Countries Served' },
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
            We Are The Architects of Innovation.
          </motion.h1>
          <motion.p
            className="text-[#1A1A1A]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the future of startups through strategic design, precision development,
            and architectural thinking. Every great structure starts with a blueprint.
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
            <h2 className="mb-8">Structure. Clarity. Precision.</h2>
            <p className="mb-6">
              We believe startups should be designed like architecture — built on structure, not chaos.
              Every system, every strategy, every line of code we create is intentional, efficient, and scalable.
            </p>
            <div className="border-l-4 border-[#1A1A1A] pl-6 my-8 italic">
              <p className="text-xl">
                "We build for permanence — not prototypes."
              </p>
            </div>
            <p className="mb-6">
              Like the greatest architectural achievements, we design with the future in mind.
              Our approach combines timeless principles with modern innovation, creating businesses
              that don't just launch—they endure.
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
            <h2 className="mb-4">What We Shape</h2>
            <p className="text-[#1A1A1A]/70">Our architectural disciplines.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="aspect-square border border-[#E5E5E5] bg-white p-8 flex flex-col justify-center items-center group hover:bg-[#0066FF] transition-fast cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedService(service.id)}
              >
                <h3 className="text-center group-hover:text-white transition-fast">
                  {service.title}
                </h3>
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
            <h2 className="mb-4">How We Build</h2>
            <p className="text-[#1A1A1A]/70">Our construction methodology.</p>
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

      {/* Team Section - "The Architects" */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8">
            {/* Intro Column */}
            <motion.div
              className="md:col-span-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">The People Behind the Plans.</h2>
              <p className="text-[#1A1A1A]/70">
                Our multidisciplinary team of designers, developers, and strategists think like
                builders — we turn ideas into structures.
              </p>
              <div className="w-16 h-1 bg-[#C5FF00] mt-6" />
            </motion.div>

            {/* Team Members */}
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-square mb-4 overflow-hidden border border-[#E5E5E5] group-hover:border-[#0066FF] transition-fast">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-fast"
                  />
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-[#0066FF] tracking-wider">{member.role}</p>
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
          <h2 className="mb-8 text-white">We're Designing the Next Generation of Startups.</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto">
            Join a community of visionaries, builders, and innovators who are reshaping the future of business.
          </p>
          <motion.button
            className="bg-transparent text-white px-12 py-4 border-4 border-white hover:bg-white hover:text-[#0066FF] transition-fast inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tracking-wider">JOIN OUR COMMUNITY</span>
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
          <h2 className="mb-6">Ready to Build Your Future?</h2>
          <p className="text-[#1A1A1A]/70 mb-12 max-w-2xl mx-auto">
            Let's architect something extraordinary together. Your vision deserves
            a team that thinks beyond the blueprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => onNavigate('contact')}
              className="bg-[#0066FF] text-white px-12 py-4 border-4 border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-fast"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wider">START A PROJECT</span>
            </motion.button>
            <motion.button
              onClick={() => onNavigate('portfolio')}
              className="bg-white text-[#1A1A1A] px-12 py-4 border-4 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-fast"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wider">VIEW OUR WORK</span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
