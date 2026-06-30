import { useEffect, useRef } from 'react';

const categories = [
  {
    id: 'luxury',
    title: 'Luxury',
    description: 'Executive comfort and prestige.',
    price: 'From $899/mo',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8AFF4B]">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
      </svg>
    ),
    colSpan: 'md:col-span-2 lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'electric',
    title: 'Electric',
    description: 'The silent revolution.',
    price: 'From $499/mo',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8AFF4B]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    colSpan: 'md:col-span-1 lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'family',
    title: 'Family',
    description: 'Space for everyone.',
    price: 'From $399/mo',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8AFF4B]">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    colSpan: 'md:col-span-1 lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'sport',
    title: 'Sport',
    description: 'Adrenaline on demand.',
    price: 'From $799/mo',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8AFF4B]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    colSpan: 'md:col-span-2 lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function CarBento() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-5');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[#020617]">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-white uppercase sm:text-5xl italic">
            CHOOSE YOUR <span className="text-[#8AFF4B]">EXPERIENCE</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            A spectrum of performance and luxury, tailored for the discerning driver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => { itemsRef.current[index] = el; }}
              className={`opacity-0 translate-y-5 transition-all duration-700 ease-out group relative overflow-hidden rounded-[2rem] ${category.colSpan} min-h-[380px] p-10 flex flex-col justify-between cursor-pointer border border-white/5 hover:border-[#8AFF4B]/30`}
              style={{ backgroundColor: '#0A0F1E' }}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 opacity-35 group-hover:opacity-55 group-hover:scale-110 transition-all duration-1000 bg-cover bg-center group-hover:grayscale-0"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              {/* Custom Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'radial-gradient(circle at center, #10B9811a 0%, transparent 70%)' }}
              />

              {/* Content Top */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-[#8AFF4B]/50 transition-colors">
                  {category.icon}
                </div>
                <div className="text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full bg-[#8AFF4B]/10 text-[#8AFF4B] border border-[#8AFF4B]/20 backdrop-blur-xl">
                  {category.price}
                </div>
              </div>

              {/* Content Bottom */}
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-3 uppercase italic tracking-tighter">{category.title}</h3>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-sm font-medium text-slate-400 max-w-[200px] leading-relaxed italic">{category.description}</p>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#8AFF4B] text-slate-900 shadow-[0_0_20px_rgba(190,242,100,0.4)] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-[360deg]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
