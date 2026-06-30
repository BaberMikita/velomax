import { useState } from 'react';

const faqs = [
  {
    question: 'How does the leasing process work?',
    answer:
      'Our leasing process is fully digital. You browse our fleet, select your vehicle, choose your terms (duration and mileage), and complete our fast approval process online. Once approved, we will deliver the car to your door.',
  },
  {
    question: 'What is included in the monthly payment?',
    answer:
      'Your monthly transparent payment covers the vehicle lease, comprehensive insurance, routine maintenance, and 24/7 roadside assistance. No hidden fees are ever passed down to the user.',
  },
  {
    question: 'Can I swap cars during my lease term?',
    answer:
      "Yes, our flexible 'Drive & Swap' program allows you to upgrade or switch your vehicle after the first 6 months of your active lease. Additional fees may apply based on the vehicle class.",
  },
  {
    question: 'Do I need a down payment?',
    answer:
      'We offer zero-down payment options for qualified applicants. The total due at signing will depend on your credit profile and the specific vehicle model chosen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 scroll-mt-20 bg-[#020617]">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">FAQ</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Everything you need to know about our premium leasing service.
            </p>
          </div>
          <div className="mt-10">
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
                  aria-expanded={openIndex === index}
                  onClick={() => toggle(index)}
                >
                  <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`ml-6 flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#8AFF4B]">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="pb-6 text-base text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
