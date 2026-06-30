import { useEffect, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = navRef.current;
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('backdrop-blur-md', 'border-b', 'border-white/5');
      } else {
        navbar.classList.remove('backdrop-blur-md', 'border-b', 'border-white/5');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="velomax-navbar"
      ref={navRef}
      className="fixed w-full top-0 z-50 transition-all duration-500"
    >
      <div className="mx-auto container px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="group flex items-center gap-2">
              <span className="text-3xl font-['Fugaz_One'] tracking-wide text-[#8AFF4B] uppercase transition-colors duration-500 hover:text-[#8AFF4B]/80">
                VELOMAX
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:gap-x-16 items-center">
            {['About', 'Services', 'Team', 'Contacts'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-xl font-['Fugaz_One'] uppercase tracking-wide text-white/90 hover:text-white transition-all duration-300"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#8AFF4B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Sign In CTA */}
          <div className="flex flex-1 justify-end items-center gap-6">
            <a
              href="#"
              className="relative overflow-hidden group rounded-md bg-[#8AFF4B] px-6 py-2 text-sm font-['Fugaz_One'] uppercase tracking-wider text-slate-900 transition-all hover:bg-[#79e843] active:scale-95"
            >
              <span className="relative z-10">Book a test drive</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
