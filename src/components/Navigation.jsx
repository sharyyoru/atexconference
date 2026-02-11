import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#comparison', label: 'Compare' },
    { href: '#topics', label: 'Expertise' },
    { href: '#impact', label: 'Impact' },
    { href: '#resources', label: 'Resources' },
    { href: '#costs', label: 'Investment' },
  ];

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
          <a href="#" style={{ fontSize: '15px', fontWeight: '600', color: '#171717', textDecoration: 'none' }}>
            ATEX 2026
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: '14px', color: '#737373', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
