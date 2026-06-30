const steps = [
  {
    name: 'Browse Fleet',
    description: 'Explore our curated selection of premium vehicles and find your perfect match.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[#8AFF4B] group-hover:text-white transition-colors">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    name: 'Select Terms',
    description: 'Customize your lease duration and mileage to fit your lifestyle needs completely online.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[#8AFF4B] group-hover:text-white transition-colors">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    name: 'Fast Approval',
    description: 'Our digital process ensures swift underwriting decisions, often within minutes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[#8AFF4B] group-hover:text-white transition-colors">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    name: 'Doorstep Delivery',
    description: 'Sign digitally and have the car delivered straight to your driveway, ready to go.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[#8AFF4B] group-hover:text-white transition-colors">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 scroll-mt-20 bg-[#020617]">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white uppercase italic sm:text-5xl">
            THE <span className="text-[#8AFF4B]">PROCESS</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            A seamless, fully digital leasing experience designed for the future.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8AFF4B]/10 mb-6 ring-1 ring-inset ring-[#8AFF4B]/30 group-hover:bg-[#8AFF4B] group-hover:text-slate-900 transition-all duration-500">
                    {step.icon}
                  </div>
                </dt>
                <div className="text-xl font-black text-white mb-3 uppercase italic tracking-tighter">
                  <span className="text-[#8AFF4B] mr-2">0{index + 1}.</span>
                  {step.name}
                </div>
                <dd className="flex flex-auto flex-col text-sm leading-relaxed text-slate-400 italic">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
