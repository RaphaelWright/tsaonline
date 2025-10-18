import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['all', 'branding', 'development', 'marketing', 'consulting'];

  const projects = [
    {
      id: 1,
      title: 'FinTech Revolution',
      category: 'development',
      description: 'A complete digital banking platform built from the ground up, featuring real-time transactions, advanced security, and intuitive UX design.',
      images: [
        'https://images.unsplash.com/photo-1760443728261-9982db69e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MDc0ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      year: '2024',
      client: 'Digital Bank Co.',
    },
    {
      id: 2,
      title: 'Urban Development',
      category: 'marketing',
      description: 'Strategic marketing campaign for a major real estate development, including brand positioning, digital presence, and event activations.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      year: '2024',
      client: 'Urban Spaces Ltd.',
    },
    {
      id: 3,
      title: 'Tech Innovation Hub',
      category: 'branding',
      description: 'Complete brand identity system for a tech accelerator, including logo design, brand guidelines, and environmental design.',
      images: [
        'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA3NzY3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      year: '2024',
      client: 'Innovation Labs',
    },
    {
      id: 4,
      title: 'Global Expansion',
      category: 'consulting',
      description: 'Strategic consulting for international market entry, including business planning, competitive analysis, and operational frameworks.',
      images: [
        'https://images.unsplash.com/photo-1597217261290-9049528c94b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNzg1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      year: '2023',
      client: 'Global Ventures',
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      category: 'development',
      description: 'Full-stack e-commerce solution with advanced features including AI recommendations, dynamic pricing, and seamless checkout.',
      images: [
        'https://images.unsplash.com/photo-1759395162607-e88e492efe76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjA3ODUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      year: '2023',
      client: 'Retail Dynamics',
    },
    {
      id: 6,
      title: 'Brand Transformation',
      category: 'branding',
      description: 'Complete rebrand for a legacy company entering the digital age, modernizing their identity while respecting heritage.',
      images: [
        'https://images.unsplash.com/photo-1617554935961-cae01717899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYwNzEwNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: '#',
      year: '2023',
      client: 'Heritage Corp.',
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
          <h1 className="mb-4">Our Work Is Our Blueprint.</h1>
          <p className="text-[#1A1A1A]/70">
            Every project is a structure designed for success.
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
                      <p className="text-white/50 mb-1">Client</p>
                      <p className="text-white">{currentProject.client}</p>
                    </div>
                    <div>
                      <p className="text-white/50 mb-1">Year</p>
                      <p className="text-white">{currentProject.year}</p>
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

                {/* Description */}
                <div className="mb-8">
                  <p className="text-white/80 leading-relaxed">
                    {currentProject.description}
                  </p>
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
