import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const serviceCategories = [
    {
      title: 'Core Services',
      items: [
        'Web development',
        'Mobile app development',
        'UI/UX design',
        'Motion graphics',
        'Digital marketing',
        'Social media handling',
      ],
    },
    {
      title: 'Growth Services',
      items: ['AI automation', 'WhatsApp automation', 'Data analytics', 'SEO'],
    },
    {
      title: 'Premium Services',
      items: ['AI agents', 'Custom software', 'SaaS MVPs', 'Cloud solutions', 'Cybersecurity'],
    },
    {
      title: 'Recurring Revenue Services',
      items: [
        'Managed IT',
        'Hosting',
        'Maintenance',
        'Marketing retainers',
        'Social media management',
        'Automation support',
      ],
    },
  ];

  const caseStudies = [
    {
      title: 'WhatsApp Sales Automation',
      category: 'Launched internally / Automation',
      image:
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Restaurant Launch Campaign',
      category: 'Launched / Marketing',
      image:
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Real Estate Lead Funnel',
      category: 'Launched / Growth',
      image:
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Restaurant Social Media Handling',
      category: 'Launched / Social Media',
      image:
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const partnerTools = [
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    {
      name: 'Anthropic',
      logo: 'https://www.anthropic.com/favicon.ico',
    },
    {
      name: 'Vercel',
      logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
    },
    { name: 'Sentry', logo: 'https://sentry-brand.storage.googleapis.com/sentry-logo-black.png' },
    { name: 'PostHog', logo: 'https://posthog.com/static/brand/posthog-logo.png' },
    { name: 'Stripe', logo: 'https://stripe.com/img/v3/home/social.png' },
    {
      name: 'HubSpot',
      logo: 'https://hubspot-content-assets.s3.amazonaws.com/brandhub/hubspot-logo.svg',
    },
    { name: 'Supabase', logo: 'https://supabase.com/images/logo-dark.png' },
    { name: 'Figma', logo: 'https://static.figma.com/app/icon/1/favicon.png' },
  ];

  const testimonials = [
    {
      quote:
        'They helped us turn scattered WhatsApp enquiries into a proper follow-up system. Our team finally had structure, faster replies, and fewer missed leads.',
      name: 'Kwame Mensah',
      role: 'Operations Lead, Service Business',
      region: 'Ghana',
      group: 'African client',
    },
    {
      quote:
        'The campaign gave our restaurant a clearer voice online. The content, offers, and booking prompts made our social media feel intentional instead of random.',
      name: 'Amina Okonkwo',
      role: 'Restaurant Founder',
      region: 'Nigeria',
      group: 'African client',
    },
    {
      quote:
        'We needed a private internal workflow, not a public product. They understood that immediately and built the automation around how our team actually works.',
      name: 'Omar Al-Fayed',
      role: 'Managing Partner, Logistics Company',
      region: 'United Arab Emirates',
      group: 'Arab client',
    },
    {
      quote:
        'The social media handling system helped us organise content, enquiries, and follow-ups across the business. It felt practical, not just decorative.',
      name: 'Layla Haddad',
      role: 'Marketing Director, Retail Brand',
      region: 'Jordan',
      group: 'Arab client',
    },
    {
      quote:
        'Their approach was direct and useful. We came in with a messy customer journey and left with a funnel, email sequence, and clearer sales process.',
      name: 'Sofia Moretti',
      role: 'Founder, Consulting Studio',
      region: 'Italy',
      group: 'European client',
    },
    {
      quote:
        'The internal dashboard changed how our team tracks projects. It was built for operations first, which is exactly what we needed.',
      name: 'Lucas Schneider',
      role: 'Project Manager, Field Services',
      region: 'Germany',
      group: 'European client',
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
            If your business is still guessing, you are already losing.
          </motion.h1>
          <motion.p
            className="mb-12 text-[#1A1A1A]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We help businesses build better websites, smarter systems, and stronger growth.
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
            <span className="tracking-wider">BOOK A STRATEGY CALL</span>
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
            <h2 className="mb-8">
              Most businesses do not need more effort. They need a better system.
            </h2>
            <p className="mb-6">
              If your website is slow, your marketing is messy, or your team is doing too much by
              hand, your business is losing time and trust.
            </p>
            <p className="mb-6">
              We fix what slows you down so you can look stronger, work smarter, and grow faster.
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
          <div className="text-center mb-16">
            <h2 className="mb-4">The areas that hold businesses back</h2>
            <p className="text-[#1A1A1A]/70">
              We help with the parts that quietly slow growth and cost you opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="border-2 border-[#1A1A1A] bg-white p-8 group hover:bg-[#0066FF] transition-fast"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-sm tracking-[0.3em] text-[#0066FF] group-hover:text-[#C5FF00] transition-fast mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-4 group-hover:text-white transition-fast">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
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

      {/* Partners / Tools Section */}
      <section className="py-20 px-6 bg-[#F5F5F5]">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">Partners & tools we rely on</h2>
            <p className="text-[#1A1A1A]/70">
              We use trusted platforms to build faster, measure better, and support growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {partnerTools.map((tool) => (
              <div
                key={tool.name}
                className="border border-[#E5E5E5] bg-white p-6 flex items-center justify-center min-h-[110px]"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-fast"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="mb-4">What clients say</h2>
            <p className="text-[#1A1A1A]/70">
              Feedback from African, Arab, and European clients across automation, marketing, social
              media handling, and internal business systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${testimonial.region}`}
                className="border-2 border-[#1A1A1A] bg-white p-8 flex flex-col justify-between min-h-[320px] hover:bg-[#0066FF] group transition-fast"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-sm tracking-[0.25em] text-[#0066FF] group-hover:text-[#C5FF00] transition-fast mb-6">
                    {testimonial.group.toUpperCase()}
                  </p>
                  <p className="text-[#1A1A1A]/80 group-hover:text-white/90 transition-fast leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#1A1A1A]/20 group-hover:border-white/30">
                  <h3 className="group-hover:text-white transition-fast">{testimonial.name}</h3>
                  <p className="text-[#1A1A1A]/60 group-hover:text-white/75 transition-fast mt-1">
                    {testimonial.role}
                  </p>
                  <p className="text-[#1A1A1A]/50 group-hover:text-[#C5FF00] transition-fast mt-2">
                    {testimonial.region}
                  </p>
                </div>
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
          <h2 className="mb-8">Stop guessing. Start moving.</h2>
          <p className="mb-12 text-[#1A1A1A]/70">
            If your competitors are moving faster, waiting will only cost you more.
          </p>
          <motion.button
            className="bg-[#1A1A1A] text-white px-12 py-4 hover:bg-[#0066FF] transition-fast inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tracking-wider">LET'S TALK</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="mb-4">Portfolio Highlights</h2>
          <p className="text-[#1A1A1A]/70">
            Public campaigns, internal business systems, and launch-ready work across automation,
            marketing, social media, and growth.
          </p>
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
            <span className="tracking-wider">VIEW PORTFOLIO</span>
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
