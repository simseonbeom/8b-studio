import { useState } from 'react';
import { navLinks } from '../content';
import { useScrolled } from '../hooks';
import { Icon } from './ui';

const BARCODE_WIDTHS = [3, 1, 3, 3, 1, 3, 1, 3];

export function Header() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? 'nav is-scrolled' : 'nav'}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__logo" aria-label="8B-studio 홈">
          <span className="en nav__name">8B-studio</span>
          <span className="nav__barcode" aria-hidden="true">
            {BARCODE_WIDTHS.map((width, i) => (
              <i key={i} style={{ width }} />
            ))}
          </span>
          <span className="mono nav__tag">IT PRODUCT STUDIO</span>
        </a>

        <nav className="nav__menu" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <a key={link.href} className="navlink" href={link.href}>
              {link.label}
              {link.href === '#portfolio' && (
                <span className="en nav__badge" aria-hidden="true">
                  3
                </span>
              )}
            </a>
          ))}
        </nav>

        <a className="btn btn-p nav__cta" href="#contact">
          무료 상담
        </a>

        <button
          type="button"
          className="nav__burger"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon size={24} strokeWidth={1.8}>
            <path className="burger-line burger-line--top" d="M4 9h16" />
            <path className="burger-line burger-line--bottom" d="M4 15h16" />
          </Icon>
        </button>
      </div>

      {menuOpen && (
        <nav className="nav__mobile" aria-label="모바일 메뉴">
          {navLinks.map((link) => (
            <a key={link.href} className="en nav__mobile-link" href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-p" href="#contact" onClick={closeMenu}>
            무료 상담
          </a>
        </nav>
      )}
    </header>
  );
}
