import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    'all',
    'automation',
    'marketing',
    'social media',
    'branding',
    'development',
    'growth',
  ];

  const projects = [
    {
      id: 1,
      title: 'WhatsApp Sales Automation for a Service Company',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A home-service business was getting enquiries through WhatsApp, Instagram, and referrals, but the team was slow to respond and inconsistent with follow-ups.',
      problem:
        'New leads were buried in chat threads, staff repeated the same answers manually, and serious prospects were not separated from casual enquiries.',
      solution:
        'We created a WhatsApp automation flow with instant replies, service menus, qualification questions, quote request prompts, follow-up reminders, and a simple lead status board for the team.',
      outcome:
        'The automation system was launched internally for the team. It was built for business operations, not as a public-facing product.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 2,
      title: 'Local Restaurant Launch Campaign',
      category: 'marketing',
      status: 'Launched campaign',
      launched: true,
      launchLabel: 'PUBLIC CAMPAIGN LAUNCHED',
      scenario:
        'A restaurant wanted to promote a new menu, increase weekday orders, and turn social media attention into actual bookings and pickup orders.',
      problem:
        'The brand had photos and followers, but no campaign structure, offer sequence, landing page, or clear customer journey from post to order.',
      solution:
        'We built a campaign plan with menu hooks, launch-week content, paid ad angles, WhatsApp order prompts, limited-time offers, and a simple landing page for reservations and pickup requests.',
      outcome:
        'The campaign launched with a clearer offer, stronger content direction, and a smoother path from social attention to orders and reservations.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 3,
      title: 'Real Estate Lead Generation Funnel',
      category: 'growth',
      status: 'Launched funnel',
      launched: true,
      launchLabel: 'PUBLIC FUNNEL LAUNCHED',
      scenario:
        'A property business needed a better way to capture buyer interest for available homes and follow up with serious prospects.',
      problem:
        'Leads were coming from social posts and phone calls, but there was no qualification flow, no buyer segmentation, and no automated nurture sequence.',
      solution:
        'We created a property funnel with listing pages, buyer intent questions, budget filters, WhatsApp handoff, retargeting copy, and a seven-day follow-up sequence.',
      outcome:
        'The funnel launched as a structured buyer journey with clearer qualification and more consistent follow-up for interested prospects.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 4,
      title: 'Beauty Brand Retention Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A beauty and skincare business wanted to increase repeat purchases without manually messaging every customer after a sale.',
      problem:
        'Customers bought once and disappeared because there was no refill reminder, review request, product education, or personalized reactivation flow.',
      solution:
        'We designed an email and WhatsApp retention system with post-purchase education, review collection, replenishment reminders, bundle offers, and win-back messages.',
      outcome:
        'The retention automation launched internally as a private customer follow-up system for the business.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 5,
      title: 'Coaching Business Authority Campaign',
      category: 'marketing',
      status: 'Launched campaign',
      launched: true,
      launchLabel: 'PUBLIC CAMPAIGN LAUNCHED',
      scenario:
        'A business coach needed to move from random posting into a focused content campaign that could attract qualified consultation calls.',
      problem:
        'The offer was useful, but the content did not explain the transformation clearly or build enough trust before asking people to book.',
      solution:
        'We created a 30-day authority campaign with content pillars, lead magnet copy, email nurture, booking page messaging, objection-handling posts, and consultation call prompts.',
      outcome:
        'The campaign launched with a clearer point of view, stronger lead magnet messaging, and a more direct route into booked consultation calls.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 6,
      title: 'Premium Construction Company Rebrand',
      category: 'branding',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A construction company wanted to move from small renovation jobs into premium residential and commercial projects.',
      problem:
        'The company had strong work, but its visual identity, proposal documents, and online presence felt too informal for higher-value clients.',
      solution:
        'We created brand positioning, service messaging, proposal copy, project showcase structure, social proof sections, and a cleaner visual direction for higher-ticket projects.',
      outcome:
        'The rebrand system launched internally first so the team could align proposals, sales language, and project presentation before wider public rollout.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 7,
      title: 'Clinic Appointment Growth System',
      category: 'growth',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A private clinic needed a clearer way to turn website visitors and social media enquiries into booked consultations.',
      problem:
        'Patients had questions about services, pricing, and availability, but the website did not guide them toward a confident booking decision.',
      solution:
        'We created service landing page copy, appointment prompts, trust sections, FAQ content, reminder messages, and a follow-up sequence for incomplete bookings.',
      outcome:
        'The growth system was launched internally to support enquiry handling and appointment follow-up. It was not designed as a public product.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 8,
      title: 'Field Team Operations Dashboard',
      category: 'development',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A field-service company needed a simple internal tool to assign jobs, capture updates, and reduce phone-based coordination.',
      problem:
        'Managers relied on calls, spreadsheets, and scattered messages, which made job status, staff workload, and client updates hard to control.',
      solution:
        'We mapped a lean dashboard with role-based views, job cards, field updates, client notifications, daily reports, and an operations handoff process.',
      outcome:
        'The dashboard was launched internally for business operations, giving managers a private tool for job tracking and team coordination.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 9,
      title: 'E-commerce Abandoned Cart Recovery',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'An online store was getting product views and cart activity, but too many shoppers left before completing payment.',
      problem:
        'The store had no recovery sequence, no segmented offers, and no reminder flow for customers who showed buying intent.',
      solution:
        'We created an abandoned cart recovery workflow with email reminders, WhatsApp nudges, product-specific copy, limited-time incentives, and post-purchase cross-sell messages.',
      outcome:
        'The recovery workflow launched internally as a sales support system. Customers experience the messages, but the product itself is not public-facing.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 10,
      title: 'Fitness Studio Membership Campaign',
      category: 'marketing',
      status: 'Launched campaign',
      launched: true,
      launchLabel: 'PUBLIC CAMPAIGN LAUNCHED',
      scenario:
        'A fitness studio wanted to promote memberships, fill weekday classes, and create a stronger reason for new customers to book a trial session.',
      problem:
        'The studio had good classes but weak offer packaging, inconsistent social messaging, and no clear follow-up after someone showed interest.',
      solution:
        'We built a membership campaign with class-specific hooks, trial session ads, landing page copy, testimonial prompts, and a follow-up sequence for interested leads.',
      outcome:
        'The campaign launched with a more direct message and a clearer journey from first impression to trial booking.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 11,
      title: 'Logistics Quote Request Portal',
      category: 'development',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A logistics company needed a better way for customers to request delivery quotes without long phone calls and repeated back-and-forth messages.',
      problem:
        'Quote requests arrived with missing details, staff had to chase customers for information, and response times were difficult to control.',
      solution:
        'We planned a quote request portal with shipment details, pickup and drop-off fields, urgency levels, internal notes, and a customer follow-up workflow.',
      outcome:
        'The quote request portal was launched internally for operations and client intake. It was built for controlled business use, not public browsing.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 12,
      title: 'Event Brand and Ticket Sales Funnel',
      category: 'branding',
      status: 'Launched brand campaign',
      launched: true,
      launchLabel: 'PUBLIC CAMPAIGN LAUNCHED',
      scenario:
        'An event team needed a sharper brand direction and a stronger digital funnel to sell tickets before the event date.',
      problem:
        'The event had a good concept, but the visuals, offer copy, sponsor messaging, and ticket journey did not feel cohesive.',
      solution:
        'We created the event positioning, campaign language, visual direction, ticket page copy, sponsor pitch structure, and launch content sequence.',
      outcome:
        'The brand campaign launched with a clearer identity and a more persuasive path from discovery to ticket purchase.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 13,
      title: 'B2B Email Nurture Campaign',
      category: 'growth',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A B2B service provider needed to stay visible after discovery calls and educate prospects who were not ready to buy immediately.',
      problem:
        'Prospects went cold after initial conversations because there was no structured follow-up, proof content, or objection-handling sequence.',
      solution:
        'We created a nurture campaign with value emails, case-style proof points, service education, comparison content, and booking prompts for warm leads.',
      outcome:
        'The sequence launched internally as a private follow-up engine for the sales team, not as a public product.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 14,
      title: 'School Admissions Campaign',
      category: 'marketing',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A private school wanted to increase admissions enquiries and explain its value to parents before the next academic intake.',
      problem:
        'The school had strong facilities and teaching quality, but the website and social content did not answer parent questions clearly enough.',
      solution:
        'We created admissions campaign copy, parent-focused landing page sections, open-day messaging, FAQ content, and follow-up messages for interested families.',
      outcome:
        'The campaign launched internally for admissions planning, parent follow-up, and intake preparation.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 15,
      title: 'Restaurant Social Media Handling',
      category: 'social media',
      status: 'Launched management system',
      launched: true,
      launchLabel: 'SERVICE LAUNCHED',
      scenario:
        'A restaurant needed consistent social media handling to keep the brand active, promote daily offers, and turn comments and DMs into real customer visits.',
      problem:
        'Posting was inconsistent, captions did not guide people to order or book, and customer messages were handled without a clear response process.',
      solution:
        'We created a monthly content calendar, post themes, caption templates, story prompts, offer announcements, DM response scripts, and weekly reporting structure.',
      outcome:
        'The social media handling system launched with a clearer posting rhythm, stronger promotional content, and a more organized way to handle enquiries.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 16,
      title: 'Real Estate Social Content Management',
      category: 'social media',
      status: 'Launched content handling',
      launched: true,
      launchLabel: 'SERVICE LAUNCHED',
      scenario:
        'A real estate business needed social content that could showcase listings, educate buyers, and create more serious enquiries from Instagram and Facebook.',
      problem:
        'Listings were posted without a clear angle, buyer questions were repeated in DMs, and the page did not build enough trust before asking people to call.',
      solution:
        'We created listing post formats, buyer education carousels, neighbourhood highlights, reels prompts, DM qualification replies, and a weekly content schedule.',
      outcome:
        'The social content handling launched as a more structured system for promoting properties and moving interested buyers into the lead funnel.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 17,
      title: 'Clinic Social Media Education Plan',
      category: 'social media',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A clinic wanted social media content that could educate patients, reduce repeated questions, and make services easier to understand before booking.',
      problem:
        'The page had occasional posts but no content pillars, no patient education sequence, and no consistent way to move followers toward appointments.',
      solution:
        'We created healthcare content pillars, FAQ post ideas, service explainer captions, testimonial prompts, story Q&A formats, and appointment call-to-action templates.',
      outcome:
        'The social media handling plan launched internally as the clinic team’s approved education and scheduling framework.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 18,
      title: 'Salon Social Media Account Handling',
      category: 'social media',
      status: 'Service launched',
      launched: true,
      launchLabel: 'SERVICE LAUNCHED',
      scenario:
        'A salon needed consistent account handling to promote hairstyles, beauty offers, customer transformations, and appointment slots.',
      problem:
        'The account had good visuals but no posting rhythm, weak captions, and no clear process for turning comments and DMs into bookings.',
      solution:
        'We created weekly content themes, before-and-after post formats, story templates, booking captions, DM reply scripts, and monthly performance notes.',
      outcome:
        'The social media account handling launched as an active management service with a clearer content rhythm and better appointment prompts.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Service launched',
    },
    {
      id: 19,
      title: 'Fashion Boutique Social Media Handling',
      category: 'social media',
      status: 'Service launched',
      launched: true,
      launchLabel: 'SERVICE LAUNCHED',
      scenario:
        'A fashion boutique needed account handling for product drops, outfit styling, seasonal promotions, and customer enquiries.',
      problem:
        'New arrivals were posted inconsistently, product captions lacked urgency, and customer questions about sizes, prices, and availability were handled manually.',
      solution:
        'We created drop calendars, outfit carousel ideas, reels prompts, sales captions, comment response guides, and DM templates for product enquiries.',
      outcome:
        'The social media handling launched with a stronger product storytelling system and a clearer route from post engagement to purchase enquiry.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Service launched',
    },
    {
      id: 20,
      title: 'Gym Social Media Account Handling',
      category: 'social media',
      status: 'Service launched',
      launched: true,
      launchLabel: 'SERVICE LAUNCHED',
      scenario:
        'A gym needed social media account handling to promote classes, trainer expertise, membership offers, and member results.',
      problem:
        'The account showed activity but did not explain the membership value clearly or create enough urgency around trial sessions.',
      solution:
        'We created class promotion posts, trainer spotlight content, transformation story formats, membership offer captions, and DM scripts for trial bookings.',
      outcome:
        'The account handling launched with stronger weekly structure and clearer calls to action for new memberships.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Service launched',
    },
    {
      id: 21,
      title: 'Hotel Booking Follow-up Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A hotel needed a better way to follow up with guests who asked about rooms, rates, events, and weekend availability.',
      problem:
        'Guest enquiries were spread across calls, WhatsApp, and social media, with no consistent reminder system or booking confirmation flow.',
      solution:
        'We created an internal booking follow-up automation with enquiry tags, room availability prompts, reminder messages, confirmation copy, and upsell suggestions.',
      outcome:
        'The automation launched internally to help staff respond faster and manage booking conversations more consistently.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 22,
      title: 'Invoice Reminder Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A professional services business needed to reduce late payments without having staff manually chase every client.',
      problem:
        'Payment reminders were inconsistent, invoices were followed up too late, and the tone of messages varied between team members.',
      solution:
        'We created an internal invoice reminder flow with polite due-date reminders, overdue notices, payment confirmation messages, and escalation prompts.',
      outcome:
        'The automation launched internally as an accounts support system for more consistent client payment follow-up.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 23,
      title: 'HR Onboarding Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A growing company needed a smoother way to onboard new staff and reduce repeated manual instructions from managers.',
      problem:
        'New team members received scattered documents, missed key setup steps, and depended too much on managers for basic onboarding information.',
      solution:
        'We created an internal onboarding automation with welcome messages, document checklists, tool access reminders, policy links, and first-week task prompts.',
      outcome:
        'The onboarding automation launched internally to make new staff setup more consistent and less dependent on manual follow-up.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 24,
      title: 'Inventory Alert Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A retail business needed internal alerts when fast-moving products were running low or when suppliers needed to be contacted.',
      problem:
        'Stock checks were manual, popular products ran out without warning, and reorder decisions were delayed.',
      solution:
        'We created inventory alert rules, low-stock notification copy, reorder prompts, supplier message templates, and a weekly stock review workflow.',
      outcome:
        'The automation launched internally to help the team spot low-stock issues earlier and respond before sales were affected.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 25,
      title: 'Customer Review Request Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A service business wanted more reviews after completed jobs but did not want staff manually asking every customer.',
      problem:
        'Happy customers were not being prompted at the right time, and the business had no consistent review request process.',
      solution:
        'We created an internal review request automation with timing rules, thank-you messages, review links, follow-up reminders, and service feedback prompts.',
      outcome:
        'The workflow launched internally to help the business collect more customer feedback and public proof without extra admin work.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 26,
      title: 'Procurement Request Tracker',
      category: 'development',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'An operations team needed a private tool to manage purchase requests, approvals, supplier notes, and delivery status.',
      problem:
        'Procurement requests were handled through messages and spreadsheets, making approvals slow and accountability unclear.',
      solution:
        'We mapped and structured an internal tracker with request forms, approval states, supplier fields, budget notes, and delivery follow-up steps.',
      outcome:
        'The tracker launched internally as an operations product for staff, not as a public-facing platform.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 27,
      title: 'Training Company Webinar Campaign',
      category: 'marketing',
      status: 'Public campaign launched',
      launched: true,
      launchLabel: 'PUBLIC CAMPAIGN LAUNCHED',
      scenario:
        'A training company needed a campaign to drive webinar registrations and convert attendees into paid programme enquiries.',
      problem:
        'The webinar topic was strong, but the registration page, reminder content, and post-event follow-up were not structured.',
      solution:
        'We created webinar campaign copy, registration page sections, reminder emails, social post angles, and post-webinar nurture messages.',
      outcome:
        'The campaign launched publicly with a clearer registration journey and stronger follow-up after the event.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 28,
      title: 'Cleaning Company Lead Funnel',
      category: 'growth',
      status: 'Public funnel launched',
      launched: true,
      launchLabel: 'PUBLIC FUNNEL LAUNCHED',
      scenario:
        'A cleaning company needed a simple lead funnel to promote home, office, and post-construction cleaning services.',
      problem:
        'The business depended on referrals and scattered enquiries, with no clear service pages or structured quote request path.',
      solution:
        'We created service-specific funnel copy, quote request prompts, trust sections, WhatsApp handoff, and follow-up messages for interested leads.',
      outcome:
        'The funnel launched publicly to give prospects a clearer way to understand services and request quotes.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 29,
      title: 'Nonprofit Donation Journey',
      category: 'development',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A nonprofit needed a clearer donation journey and an internal way to follow up with supporters after they expressed interest.',
      problem:
        'Supporter details were scattered, donation intent was not tracked well, and follow-up depended on individual team members.',
      solution:
        'We structured a donation journey with supporter forms, internal follow-up stages, thank-you messages, campaign notes, and donor re-engagement prompts.',
      outcome:
        'The system launched internally for supporter management and donor follow-up, while public donation messaging remained campaign-specific.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 30,
      title: 'Travel Agency Enquiry Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A travel agency needed to handle trip enquiries, package questions, and quote follow-ups without losing prospects in chat threads.',
      problem:
        'Travel requests arrived with incomplete details, quote follow-up was inconsistent, and staff had to repeat destination and budget questions manually.',
      solution:
        'We created an enquiry automation with destination prompts, budget questions, travel date capture, quote reminders, and package follow-up messages.',
      outcome:
        'The automation launched internally as a private sales support workflow for the agency team.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 31,
      title: 'Pharmacy Refill Reminder Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A pharmacy needed a better way to remind customers about repeat purchases, prescription refills, and pickup availability.',
      problem:
        'Refill reminders were handled manually, customers forgot pickup dates, and staff repeated the same availability updates throughout the week.',
      solution:
        'We created refill reminder messages, pickup confirmation prompts, stock availability replies, and an internal follow-up workflow for repeat customers.',
      outcome:
        'The automation launched internally as a private customer support workflow for the pharmacy team.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 32,
      title: 'Car Rental Booking Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A car rental business needed to handle availability checks, booking questions, driver details, and payment reminders faster.',
      problem:
        'Staff spent too much time collecting the same trip details and confirming availability manually across calls and messages.',
      solution:
        'We created a booking automation with vehicle options, trip date capture, driver requirement prompts, payment reminders, and confirmation messages.',
      outcome:
        'The workflow launched internally to support booking operations without becoming a public-facing product.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 33,
      title: 'Restaurant Influencer Content Campaign',
      category: 'marketing',
      status: 'Public campaign launched',
      launched: true,
      launchLabel: 'PUBLIC CAMPAIGN LAUNCHED',
      scenario:
        'A restaurant wanted to use creator content to increase awareness for a new menu and drive more weekend visits.',
      problem:
        'The restaurant had good food visuals but no structured creator brief, posting plan, or offer tied to influencer content.',
      solution:
        'We created creator briefs, campaign angles, offer captions, story prompts, visit-day content direction, and a tracking plan for enquiries.',
      outcome:
        'The campaign launched publicly with stronger creator-led content and clearer calls to action for customers.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 34,
      title: 'Dental Clinic Smile Campaign',
      category: 'marketing',
      status: 'Public campaign launched',
      launched: true,
      launchLabel: 'PUBLIC CAMPAIGN LAUNCHED',
      scenario:
        'A dental clinic needed a campaign to promote teeth cleaning, whitening, and consultation bookings.',
      problem:
        'Potential patients did not understand the difference between services, pricing questions slowed enquiries, and booking prompts were weak.',
      solution:
        'We created campaign copy, service education posts, offer messaging, landing page sections, FAQ answers, and appointment follow-up prompts.',
      outcome:
        'The campaign launched publicly with clearer service explanations and a more confident path to appointment enquiries.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 35,
      title: 'Law Firm Consultation Funnel',
      category: 'growth',
      status: 'Public funnel launched',
      launched: true,
      launchLabel: 'PUBLIC FUNNEL LAUNCHED',
      scenario:
        'A law firm needed a clearer way to turn website visitors into consultation requests without overwhelming them with legal language.',
      problem:
        'Service pages were too broad, enquiry forms did not qualify prospects, and follow-up messaging was inconsistent.',
      solution:
        'We created practice-area landing page copy, consultation prompts, eligibility questions, trust sections, and follow-up messages for new enquiries.',
      outcome:
        'The funnel launched publicly with a simpler journey from legal concern to consultation request.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 36,
      title: 'Restaurant Staff Shift Tracker',
      category: 'development',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A restaurant needed a private tool to manage staff shifts, attendance notes, and handover tasks across busy service periods.',
      problem:
        'Schedules lived in chats and spreadsheets, creating confusion around availability, replacements, and daily responsibilities.',
      solution:
        'We structured an internal shift tracker with staff roles, availability notes, handover tasks, absence reporting, and manager review states.',
      outcome:
        'The tracker launched internally for the management team and was not designed as a public product.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 37,
      title: 'Agency Client Portal',
      category: 'development',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A creative agency needed a private client portal for project updates, approvals, assets, and next-step visibility.',
      problem:
        'Clients asked for updates across multiple channels, approvals were hard to track, and project files were scattered.',
      solution:
        'We created a client portal structure with project stages, asset links, approval checkpoints, feedback notes, and delivery timelines.',
      outcome:
        'The portal launched internally for client management and controlled access, not as a public-facing website.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 38,
      title: 'Makeup Artist Social Media Handling',
      category: 'social media',
      status: 'Service launched',
      launched: true,
      launchLabel: 'SERVICE LAUNCHED',
      scenario:
        'A makeup artist needed social media handling to show transformations, bridal work, bookings, and client trust signals.',
      problem:
        'The account had strong visuals but no content structure for services, pricing confidence, booking rules, or client education.',
      solution:
        'We created content pillars, transformation captions, booking policy posts, bridal package highlights, reels prompts, and DM reply templates.',
      outcome:
        'The account handling launched as a structured social media service with clearer booking prompts and stronger portfolio presentation.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Service launched',
    },
    {
      id: 39,
      title: 'Interior Decor Social Media Handling',
      category: 'social media',
      status: 'Service launched',
      launched: true,
      launchLabel: 'SERVICE LAUNCHED',
      scenario:
        'An interior decor business needed content handling to showcase projects, design ideas, consultations, and premium service value.',
      problem:
        'Project photos were underused, captions did not explain design thinking, and enquiries lacked a clear path to consultation.',
      solution:
        'We created room reveal formats, design tip carousels, consultation prompts, project story captions, and DM scripts for quote requests.',
      outcome:
        'The social media handling launched with a stronger project showcase system and clearer consultation messaging.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Service launched',
    },
    {
      id: 40,
      title: 'Tech Startup Brand Launch',
      category: 'branding',
      status: 'Public brand launched',
      launched: true,
      launchLabel: 'PUBLIC BRAND LAUNCHED',
      scenario:
        'A tech startup needed brand messaging, launch copy, and a clearer identity before introducing its product to early users.',
      problem:
        'The product idea was strong, but the audience, promise, feature language, and landing page story were not clear enough.',
      solution:
        'We created positioning, brand language, landing page copy, launch announcement content, feature messaging, and early-access prompts.',
      outcome:
        'The brand launched publicly with a clearer story and stronger first impression for early users and partners.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 41,
      title: 'Food Delivery Partner Onboarding',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A food delivery business needed a faster way to onboard restaurants, collect details, and confirm partnership requirements.',
      problem:
        'Restaurant onboarding relied on manual messages, missing documents, and repeated explanations of fees and delivery rules.',
      solution:
        'We created onboarding prompts, document checklists, partner requirement messages, confirmation copy, and internal status tracking.',
      outcome:
        'The onboarding automation launched internally to help the team manage restaurant partners more consistently.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 42,
      title: 'Customer Support FAQ Automation',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A growing online business needed to reduce repeated customer support questions without making customers wait for staff replies.',
      problem:
        'The team answered the same delivery, payment, refund, and product questions every day across multiple channels.',
      solution:
        'We created FAQ response flows, support categories, escalation prompts, delivery update templates, and internal tagging rules.',
      outcome:
        'The support automation launched internally to help the team answer common questions faster and escalate complex issues properly.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 43,
      title: 'Corporate Training Lead Funnel',
      category: 'growth',
      status: 'Public funnel launched',
      launched: true,
      launchLabel: 'PUBLIC FUNNEL LAUNCHED',
      scenario:
        'A training provider needed a funnel to attract companies looking for staff development and leadership workshops.',
      problem:
        'The offer sounded generic, decision-makers did not see enough business value, and enquiry forms did not qualify company needs.',
      solution:
        'We created corporate training pages, workshop outcomes, enquiry questions, proof sections, and follow-up messages for HR teams.',
      outcome:
        'The funnel launched publicly with clearer value for business buyers and a stronger route to consultation requests.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched',
    },
    {
      id: 44,
      title: 'Event Vendor Management Tracker',
      category: 'development',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'An event planning team needed a private tracker for vendors, budgets, payment stages, and delivery responsibilities.',
      problem:
        'Vendor details lived in separate chats and spreadsheets, making it hard to see what was confirmed, paid, or pending.',
      solution:
        'We structured an internal tracker with vendor categories, contact details, payment states, task ownership, and deadline reminders.',
      outcome:
        'The tracker launched internally as an operations tool for event planning and vendor coordination.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
    {
      id: 45,
      title: 'Microfinance Loan Enquiry Flow',
      category: 'automation',
      status: 'Launched internally',
      launched: true,
      launchLabel: 'LAUNCHED INTERNALLY',
      scenario:
        'A microfinance business needed to collect loan enquiries, qualify applicants, and reduce repeated manual explanations from staff.',
      problem:
        'Prospects asked the same eligibility questions, submitted incomplete details, and required multiple follow-ups before staff could assess fit.',
      solution:
        'We created a loan enquiry flow with eligibility prompts, document checklists, repayment question routing, staff handoff notes, and follow-up messages.',
      outcome:
        'The enquiry flow launched internally to support staff screening and follow-up without exposing the system as a public product.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      result: 'Launched internally',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const currentProject = projects.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />
        <div className="relative z-10 py-12">
          <h1 className="mb-4">Every strong business starts with a clear problem.</h1>
          <p className="text-[#1A1A1A]/70">
            This portfolio includes public campaigns, internal business systems, and launch-ready
            projects across automation, marketing, social media handling, funnels, brand content,
            and digital product planning.
          </p>
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-3 border-2 transition-fast ${
              selectedCategory === category
                ? 'bg-[#0066FF] text-white border-[#0066FF]'
                : 'bg-white text-[#1A1A1A] border-[#0066FF] hover:bg-[#0066FF] hover:text-white'
            }`}
          >
            <span className="tracking-wider">{category.toUpperCase()}</span>
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="aspect-square border-2 border-white bg-white relative overflow-hidden group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0066FF] opacity-0 group-hover:opacity-90 transition-fast" />
              <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-fast">
                <p className="text-[#C5FF00] mb-2 tracking-wider">
                  {project.category.toUpperCase()} / {project.status.toUpperCase()}
                </p>
                <h3 className="text-white">{project.title}</h3>
                <p className="text-white/80 text-sm mt-2">{project.scenario}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && currentProject && (
          <motion.div
            className="fixed inset-0 bg-[#1A1A1A]/95 z-50 flex items-center justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full md:w-2/3 lg:w-1/2 h-full bg-[#1A1A1A] text-white overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-12">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 border-2 border-white flex items-center justify-center mb-8 hover:bg-white hover:text-[#1A1A1A] transition-fast"
                >
                  <X size={24} />
                </button>

                {/* Project Info */}
                <div className="mb-8">
                  <p className="text-[#C5FF00] mb-2 tracking-wider">
                    {currentProject.category.toUpperCase()} / {currentProject.status.toUpperCase()}
                  </p>
                  <h2 className="text-white mb-4">{currentProject.title}</h2>
                  <div className="flex gap-8 mb-6">
                    <div>
                      <p className="text-white/50 mb-1">Outcome</p>
                      <p className="text-white">{currentProject.result}</p>
                    </div>
                    <div>
                      <p className="text-white/50 mb-1">Focus</p>
                      <p className="text-white">{currentProject.category}</p>
                    </div>
                    <div>
                      <p className="text-white/50 mb-1">Status</p>
                      <p className="text-white">{currentProject.status}</p>
                    </div>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-8 relative">
                  <div className="aspect-video bg-[#0066FF]/10 mb-4 overflow-hidden">
                    <ImageWithFallback
                      src={currentProject.images[currentImageIndex]}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {currentProject.images.length > 1 && (
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev > 0 ? prev - 1 : currentProject.images.length - 1
                          )
                        }
                        className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-fast"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev < currentProject.images.length - 1 ? prev + 1 : 0
                          )
                        }
                        className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-fast"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Scenario and Solution */}
                <div className="space-y-8 mb-8">
                  <div>
                    <p className="text-[#C5FF00] mb-2 tracking-wider">SCENARIO</p>
                    <p className="text-white/80 leading-relaxed">{currentProject.scenario}</p>
                  </div>
                  <div>
                    <p className="text-[#C5FF00] mb-2 tracking-wider">THE PROBLEM</p>
                    <p className="text-white/80 leading-relaxed">{currentProject.problem}</p>
                  </div>
                  <div>
                    <p className="text-[#C5FF00] mb-2 tracking-wider">THE SOLUTION</p>
                    <p className="text-white/80 leading-relaxed">{currentProject.solution}</p>
                  </div>
                  <div>
                    <p className="text-[#C5FF00] mb-2 tracking-wider">THE OUTCOME</p>
                    <p className="text-white/80 leading-relaxed">{currentProject.outcome}</p>
                  </div>
                </div>

                {/* Launch Status */}
                <div className="inline-flex items-center gap-3 bg-[#0066FF] text-white px-8 py-4">
                  <span className="tracking-wider">
                    {currentProject.launchLabel ??
                      (currentProject.launched ? 'LAUNCHED' : 'LAUNCHED INTERNALLY')}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
