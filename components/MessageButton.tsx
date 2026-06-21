import { MessageCircle } from 'lucide-react';

const whatsappNumber = '233555123456';
const message = encodeURIComponent(
  'Hello The Startup Architects, I would like to discuss a project.'
);

export function MessageButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Message The Startup Architects on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[90] bg-[#C5FF00] text-[#1A1A1A] border-4 border-[#1A1A1A] hover:bg-[#0066FF] hover:text-white shadow-2xl px-5 py-4 inline-flex items-center gap-3 transition-fast"
    >
      <MessageCircle size={22} />
      <span className="tracking-wider">MESSAGE</span>
    </a>
  );
}
