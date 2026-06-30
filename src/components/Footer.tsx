const navigation = {
  vehicles: [
    { name: 'Luxury Sedans', href: '#' },
    { name: 'Electric SUVs', href: '#' },
    { name: 'Sports Cars', href: '#' },
    { name: 'Family Vehicles', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Leasing Agreement', href: '#' },
    { name: 'Insurance Info', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="text-white/80 bg-[#020617] border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto container px-6 pb-8 pt-24 lg:px-8 sm:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Info */}
          <div className="space-y-8 xl:col-span-1">
            <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
              VELO<span className="text-[#8AFF4B]">MAX</span>
            </span>
            <p className="text-sm leading-6 text-slate-500 max-w-xs">
              Redefining the racing experience. Drive the cars of tomorrow, today, with absolute flexibility and zero compromise.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-600 hover:text-[#8AFF4B] transition-colors">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Vehicles</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.vehicles.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-slate-500 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-slate-500 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-1 md:gap-8 flex items-start justify-start md:justify-end">
              <div className="w-full max-w-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Stay Updated</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Subscribe to our newsletter for the latest fleet additions.
                </p>
                <form className="mt-6 sm:flex sm:max-w-md" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-grow">
                    <input
                      type="email"
                      name="email-address"
                      id="footer-email"
                      required
                      className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8AFF4B]/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-full bg-[#8AFF4B] px-6 py-3 text-sm font-bold text-slate-900 shadow-xl hover:bg-[#79e843] transition-all"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 sm:mt-20 lg:mt-24 border-t border-white/5 text-center sm:text-left">
          <p className="text-xs leading-5 text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} VELOMAX, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
