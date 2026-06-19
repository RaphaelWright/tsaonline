import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['all', 'branding', 'development', 'growth', 'automation'];

  const projects = [
    {
      id: 1,
      title: 'The website looks good, but leads are still low.',
      category: 'growth',
      scenario: 'A business had traffic, but visitors were not converting into real enquiries.',
      problem: 'The message was unclear, the offer was weak, and the site did not guide people to take action.',
      solution:
        'We simplified the messaging, improved the layout, added stronger calls to action, and rebuilt the conversion flow so visitors knew exactly what to do next.',
      outcome: 'The business saw a clear increase in qualified enquiries and better confidence in their online presence.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      result: '+38% enquiries',
    },
    {
      id: 2,
      title: 'The team is busy, but the business still feels disorganized.',
      category: 'automation',
      scenario: 'A growing company was wasting time on repetitive follow-ups and manual admin tasks.',
      problem: 'Important messages were delayed, internal processes were slow, and staff spent too much time doing work that could be automated.',
      solution:
        'We introduced workflow automation, smart follow-up systems, and better processes that saved time while keeping communication consistent.',
      outcome: 'The team became faster, more responsive, and much less dependent on manual effort.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      result: 'Hours saved weekly',
    },
    {
      id: 3,
      title: 'The brand looks outdated, and customers do not trust it fully.',
      category: 'branding',
      scenario: 'A business had strong experience, but its visual identity did not reflect the quality of its work.',
      problem: 'The brand felt inconsistent, the design was dated, and customers were not fully confident in the company.',
      solution:
        'We refined the brand positioning, updated the visual system, and created a clearer identity that matched the business value.',
      outcome: 'The brand started feeling more premium, professional, and memorable across every touchpoint.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      result: 'More trust, stronger brand recall',
    },
    {
      id: 4,
      title: 'The business is growing, but the systems are not ready for it.',
      category: 'development',
      scenario: 'A company had momentum, but its tools and digital setup could not support the next stage of growth.',
      problem: 'The website, workflows, and data handling were not built for scale, which created bottlenecks and confusion.',
      solution:
        'We rebuilt the core digital setup, improved the user journey, and created a more reliable system that could support future growth.',
      outcome: 'The business became easier to manage, faster to operate, and better positioned to scale.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      result: 'Better scalability and control',
    },
    {
      id: 5,
      title: 'The business is active online, but customers still do not understand the value.',
      category: 'development',
      scenario: 'A company had a digital presence, but the message and customer journey were not clear enough.',
      problem: 'The site was not helping people understand what the business offered, why it mattered, or why they should trust it.',
      solution:
        'We redesigned the experience around clarity, simplified the content, and improved the flow from first visit to final action.',
      outcome: 'Visitors started understanding the offer much faster, which improved both trust and conversion.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      result: 'Better clarity and higher trust',
    },
    {
      id: 6,
      title: 'The business wants to grow, but the process is still unclear.',
      category: 'branding',
      scenario: 'A company had ambition but no clear framework for how to present itself and scale its message.',
      problem: 'Different channels were sending different signals, and the audience was not getting a consistent story.',
      solution:
        'We aligned the brand message, cleaned up the positioning, and created a stronger structure for how the business should communicate.',
      outcome: 'The business became easier to understand, easier to trust, and stronger in the market.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      result: 'Clearer positioning and stronger market presence',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            Here are the kinds of challenges we solve when businesses need stronger systems, better growth, and more trust.
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
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4"
        layout
      >
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
                  {project.category.toUpperCase()}
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
                    {currentProject.category.toUpperCase()}
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

                {/* View Live Button */}
                <a
                  href={currentProject.link}
                  className="inline-flex items-center gap-3 bg-[#0066FF] text-white px-8 py-4 hover:bg-white hover:text-[#0066FF] transition-fast"
                >
                  <span className="tracking-wider">VIEW LIVE</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
