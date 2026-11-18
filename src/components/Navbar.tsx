import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/mocHoaData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4EBDD]/95 backdrop-blur-md border-b border-[#D8C9B7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-element clean wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-serif text-2xl font-semibold tracking-tight text-[#3F2E24] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A77B5B] rounded"
        >
          Mộc hoa
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] font-medium text-[#735748]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#3F2E24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A77B5B] rounded ${
                  isActive ? 'text-[#3F2E24] font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#A77B5B]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action button + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A77B5B]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Giỏ quà</span>
            <span className="tabular-nums">({cartCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#3F2E24] hover:bg-[#D8C9B7]/40 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#D8C9B7] bg-[#F4EBDD] px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#3F2E24] hover:bg-[#D8C9B7]/35 transition-colors"
            >
              <span>
                <span className="text-[#A77B5B] tabular-nums mr-2.5 text-xs">{item.code}</span>
                {item.label}
              </span>
              <span className="text-xs text-[#735748]">{item.enLabel}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
