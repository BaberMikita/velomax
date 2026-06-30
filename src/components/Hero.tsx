import { useEffect, useRef } from 'react';
import bgImg from '../assets/velomax.jpg';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const desc = descRef.current;
    const cta = ctaRef.current;

    const show = (el: HTMLElement | null, delay: number) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-5');
      }, delay);
    };

    show(title, 100);
    show(desc, 250);
    show(cta, 400);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#020617]">

      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImg}
          alt="Luxury Car Background"
          className="object-cover object-center w-full h-full brightness-100 contrast-[1.05]"
          style={{ position: 'absolute', inset: 0 }}
        />
        {/* Top edge smoothing */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020617]/80 to-transparent" />
        {/* Bottom edge smoothing */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020617]/80 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full min-h-screen container px-6 lg:px-8 flex flex-col items-center lg:items-start justify-start mx-auto pt-52 lg:pt-56 pb-16 text-center lg:text-left">

        <div className="relative max-w-4xl p-10 -ml-10">
          {/* Blur spot */}
          <div
            className="absolute -inset-[150px] -z-10 bg-black/[.03] backdrop-blur-[20px] pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            }}
          />

          {/* Main headline */}
          <h1
            ref={titleRef}
            id="hero-title"
            className="opacity-0 translate-y-5 transition-all duration-700 ease-out flex flex-col items-start gap-0"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl font-['Fugaz_One'] text-white leading-tight tracking-wide uppercase drop-shadow-lg">
              EXPERIENCE TRACK
            </span>
            <span className="text-7xl sm:text-8xl lg:text-[10rem] font-['Fugaz_One'] text-[#8AFF4B] leading-none tracking-wide uppercase mt-[-10px] drop-shadow-lg">
              RACING
            </span>
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            id="hero-desc"
            className="opacity-0 translate-y-5 transition-all duration-700 ease-out delay-150 mt-6 font-['Inter'] text-[18px] leading-[28px] tracking-[-0.01em] font-semibold text-white/90 max-w-[700px] drop-shadow-md"
          >
            Push the limits of engineering on a professional circuit. Get behind the wheel{' '}
            <br className="hidden sm:block" />
            of track-focused machines and experience pure motorsport dynamics.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            id="hero-cta"
            className="opacity-0 translate-y-5 transition-all duration-700 ease-out delay-300 mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-6"
          >
            <a
              href="#"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#8AFF4B] px-8 py-3 text-base font-['Fugaz_One'] uppercase tracking-wider text-slate-900 hover:bg-[#79e843] transition-all shadow-[0_0_20px_rgba(138,255,75,0.4)]"
            >
              <span className="relative z-10">Start Your Journey</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#0D1117] border border-[#8AFF4B] px-8 py-3 text-base font-['Fugaz_One'] uppercase tracking-wider text-[#8AFF4B] hover:bg-[#8AFF4B]/10 transition-all shadow-lg"
            >
              Explore Fleet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
