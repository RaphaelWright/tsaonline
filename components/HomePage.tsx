import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
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

  const businessOutcomes = [
    {
      title: 'More qualified enquiries',
      description: 'Turn traffic into real leads with clear enquiry paths.',
    },
    {
      title: 'Faster customer response',
      description: 'Reply faster, follow up better, and stop losing warm prospects.',
    },
    {
      title: 'Stronger online trust',
      description: 'Look credible before customers even speak to you.',
    },
    {
      title: 'Less manual admin',
      description: 'Replace busywork with simple systems your team will use.',
    },
  ];

  const servicePackages = [
    {
      name: 'Website Launch System',
      fit: 'For a website that wins trust fast.',
      includes: ['Conversion-focused website', 'Lead capture flow', 'Analytics setup'],
    },
    {
      name: 'WhatsApp Sales Automation',
      fit: 'For faster replies and cleaner follow-up.',
      includes: ['Auto-replies and routing', 'Follow-up sequences', 'Lead tracking structure'],
    },
    {
      name: 'Social Growth Retainer',
      fit: 'For consistent content that brings enquiries.',
      includes: ['Content planning', 'Offer campaigns', 'Social media management'],
    },
    {
      name: 'Startup MVP Build',
      fit: 'For founders ready to launch a real product.',
      includes: ['Product planning', 'UI/UX design', 'Web app or SaaS MVP'],
    },
  ];

  const clientTypes = [
    'Restaurants',
    'Real estate businesses',
    'Service companies',
    'Retail brands',
    'Startups',
    'Consultants',
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
    { name: 'Stripe', logo: 'https://stripe.com/img/v3/home/social.png' },

    { name: 'Supabase', logo: 'https://supabase.com/images/logo-dark.png' },
    { name: 'Figma', logo: 'https://static.figma.com/app/icon/1/favicon.png' },
  ];

  const testimonials = [
    {
      quote:
        'They turned our WhatsApp enquiries into a clear follow-up system. Fewer missed leads, faster replies.',
      name: 'Kwame Mensah',
      role: 'Operations Lead, Service Business',
      region: 'Ghana',
      group: 'African client',
    },
    {
      quote:
        'Our restaurant finally looked serious online. The content and offers brought in better bookings.',
      name: 'Amina Okonkwo',
      role: 'Restaurant Founder',
      region: 'Nigeria',
      group: 'African client',
    },
    {
      quote:
        'They built automation around how our team actually works. Simple, private, and useful.',
      name: 'Omar Al-Fayed',
      role: 'Managing Partner, Logistics Company',
      region: 'United Arab Emirates',
      group: 'Arab client',
    },
    {
      quote:
        'They organised our content, enquiries, and follow-ups. It felt practical, not decorative.',
      name: 'Layla Haddad',
      role: 'Marketing Director, Retail Brand',
      region: 'Jordan',
      group: 'Arab client',
    },
    {
      quote:
        'We came in with a messy customer journey and left with a clearer sales process.',
      name: 'Sofia Moretti',
      role: 'Founder, Consulting Studio',
      region: 'Italy',
      group: 'European client',
    },
    {
      quote:
        'The dashboard made project tracking easier. It was built for real operations.',
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
            Build smarter. Sell faster. Grow with less stress.
          </motion.h1>
          <motion.p
            className="mb-12 text-[#1A1A1A]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Websites, automation, and digital systems built to bring more customers in.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-[#0066FF] text-white px-12 py-4 border-4 border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-fast inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
            >
              <span className="tracking-wider">BOOK A STRATEGY CALL</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="border-4 border-[#1A1A1A] text-[#1A1A1A] px-12 py-4 hover:bg-[#1A1A1A] hover:text-white transition-fast inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
            >
              <span className="tracking-wider">GET A FREE AUDIT</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <div>
              <p className="text-[#C5FF00] tracking-[0.3em] mb-4">WHAT CHANGES</p>
              <h2 className="text-white mb-6">
                Make your business easier to find, trust, and buy from.
              </h2>
              <p className="text-white/70">
                We turn interest into enquiries, follow-ups, and sales without adding more work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {businessOutcomes.map((outcome, index) => (
                <motion.div
                  key={outcome.title}
                  className="border-2 border-white/20 p-6 hover:border-[#C5FF00] transition-fast"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="text-[#C5FF00] mb-4" size={28} />
                  <h3 className="text-white mb-3">{outcome.title}</h3>
                  <p className="text-white/70">{outcome.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
              You do not need more effort. You need a better system.
            </h2>
            <p className="mb-6">
              Slow websites, messy marketing, and manual work cost you trust and sales.
            </p>
            <p className="mb-6">
              We fix the gaps so your business looks sharper and works better.
            </p>
            <div className="w-20 h-1 bg-[#C5FF00] mt-8" />
          </div>
        </motion.div>
      </section>

      {/* Service Packages Section */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <p className="text-[#0066FF] tracking-[0.3em] mb-4">START HERE</p>
              <h2 className="mb-4">Start with the biggest growth blocker</h2>
              <p className="text-[#1A1A1A]/70">
                Pick the fastest path to more leads, better systems, or a product people can use.
              </p>
            </div>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="bg-[#0066FF] text-white px-8 py-4 border-4 border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-fast inline-flex items-center gap-3 self-start lg:self-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-wider">ASK WHAT FITS</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {servicePackages.map((servicePackage, index) => (
              <motion.div
                key={servicePackage.name}
                className="bg-white border-2 border-[#1A1A1A] p-8 flex flex-col min-h-[420px] hover:bg-[#0066FF] group transition-fast"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-sm tracking-[0.3em] text-[#0066FF] group-hover:text-[#C5FF00] transition-fast mb-4">
                  PACKAGE {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-4 group-hover:text-white transition-fast">
                  {servicePackage.name}
                </h3>
                <p className="text-[#1A1A1A]/70 group-hover:text-white/80 transition-fast mb-8">
                  {servicePackage.fit}
                </p>
                <ul className="space-y-3 mt-auto">
                  {servicePackage.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#1A1A1A]/75 group-hover:text-white/90 transition-fast"
                    >
                      <span className="w-2 h-2 bg-[#C5FF00] rounded-full mt-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Client Fit Section */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="mb-4">Built for businesses that need results, not decoration.</h2>
            <p className="text-[#1A1A1A]/70">
              If customers find you online or message before buying, your systems should help you close.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {clientTypes.map((clientType) => (
              <div
                key={clientType}
                className="border-2 border-[#E5E5E5] px-5 py-4 text-[#1A1A1A] hover:border-[#0066FF] hover:text-[#0066FF] transition-fast"
              >
                {clientType}
              </div>
            ))}
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
            <h2 className="mb-4">Fix what slows growth</h2>
            <p className="text-[#1A1A1A]/70">
              We improve the digital parts that cost you leads, time, and trust.
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
            <h2 className="mb-4">Tools we trust</h2>
            <p className="text-[#1A1A1A]/70">
              Reliable platforms for faster builds, better tracking, and stronger growth.
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
              Clear wins across automation, marketing, social media, and internal systems.
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
            The longer you wait, the more leads slip away.
          </p>
          <motion.button
            className="bg-[#1A1A1A] text-white px-12 py-4 hover:bg-[#0066FF] transition-fast inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
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
            Campaigns, systems, and products built to move businesses forward.
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
