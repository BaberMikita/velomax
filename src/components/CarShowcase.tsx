import { useEffect, useRef } from 'react';
import carImg from '../assets/model-s-plaid.png';

const features = [
  {
    name: 'Top Speed',
    value: '322 km/h',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
  },
  {
    name: '0-100 km/h',
    value: '2.1s',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Range',
    value: '600 km',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect width="16" height="10" x="2" y="7" rx="2" ry="2" /><line x1="22" x2="22" y1="11" y2="13" />
      </svg>
    ),
  },
];

export default function CarShowcase() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'scale-95', 'translate-x-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-[#020617]">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Car Image */}
          <div
            ref={leftRef}
            className="opacity-0 scale-95 transition-all duration-1000 ease-out w-full relative group"
          >
            <div className="absolute -inset-4 bg-[#8AFF4B]/20 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div
              className="aspect-[16/9] lg:aspect-square w-full rounded-[2rem] relative overflow-hidden border border-white/5"
              style={{ background: 'linear-gradient(145deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 100%)' }}
            >
              {/* Green glow */}
              <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(138,255,75,0.12) 0%, transparent 65%)' }} />
              {/* Car photo */}
              <img
                src={carImg}
                alt="Tesla Model S Plaid"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Bottom label */}
              <div className="absolute bottom-0 inset-x-0 z-20 flex flex-col items-center pb-6 pt-16"
                style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.85) 0%, transparent 100%)' }}>
                <span className="uppercase tracking-widest text-xs font-bold text-[#8AFF4B]">Masterpiece</span>
                <span className="mt-1 text-white text-xl font-semibold">Model S Plaid</span>
              </div>
            </div>
          </div>

          {/* Right: Car Details */}
          <div
            ref={rightRef}
            className="opacity-0 translate-x-12 transition-all duration-1000 ease-out delay-200"
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8AFF4B] bg-[#8AFF4B]/10 border border-[#8AFF4B]/20 mb-8">
              Pinnacle Performance
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-6">
              THE <span className="text-[#8AFF4B]">PLAID</span> STANDARD
            </h2>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-bold tracking-tight text-white">$1,299</span>
              <span className="text-xl font-medium text-slate-500">/Month</span>
            </div>
            <p className="text-xl leading-relaxed text-slate-400 mb-12 max-w-lg">
              Redefining automotive limits. 1,020 horsepower at your command. The fastest acceleration of any production vehicle on the road.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col group">
                  <dt className="flex items-center gap-x-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 group-hover:text-[#8AFF4B] transition-colors">
                    {feature.icon}
                    {feature.name}
                  </dt>
                  <dd className="text-3xl font-bold tracking-tight text-white">{feature.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#"
              className="relative inline-flex items-center justify-center rounded-xl bg-[#8AFF4B] px-12 py-5 text-sm font-black uppercase tracking-widest text-slate-900 shadow-xl hover:bg-[#79e843] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Reserve Yours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
