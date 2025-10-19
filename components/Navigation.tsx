import { motion } from 'framer-motion';
import { Home, Briefcase, Mail, Menu, Info } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'HOME' },
    { id: 'about', icon: Info, label: 'ABOUT' },
    { id: 'portfolio', icon: Briefcase, label: 'PORTFOLIO' },
    { id: 'contact', icon: Mail, label: 'CONTACT' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed left-0 top-0 h-screen w-20 bg-[#0066FF] z-50 hidden md:flex flex-col items-center justify-between py-12"
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="text-white rotate-180 cursor-pointer"
            style={{ writingMode: 'vertical-rl' }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="tracking-wider">ARCHITECTS</span>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-12 h-12 flex items-center justify-center transition-fast ${
                currentPage === item.id ? 'bg-white' : 'bg-transparent hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon
                className={currentPage === item.id ? 'text-[#0066FF]' : 'text-white'}
                size={20}
              />
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="w-px h-16 bg-white/20" />
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0066FF] px-6 py-4 flex items-center justify-between">
        <span className="text-white tracking-wider">THE STARTUP ARCHITECTS</span>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white"
        >
          <Menu size={24} />
        </button>
      </motion.div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-16 left-0 right-0 bg-[#0066FF] z-40 p-6"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsExpanded(false);
              }}
              className={`w-full text-left py-3 px-4 mb-2 transition-fast ${
                currentPage === item.id ? 'bg-white text-[#0066FF]' : 'text-white hover:bg-white/20'
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
}