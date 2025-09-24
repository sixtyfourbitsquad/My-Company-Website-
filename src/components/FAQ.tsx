import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: 'Why should I choose [Your Agency] over other agencies?',
    answer:
      'We combine senior-level strategists with hands-on execution, offering transparent pricing, weekly sprints, and measurable goals. You get a dedicated team focused on revenue impact, not vanity metrics.'
  },
  {
    question: 'What sets [Your Agency] apart from the competition?',
    answer:
      'Our approach is experimentation-first and data-led. We craft full-funnel roadmaps, run rapid A/B tests, and share live dashboards. Creative, media, and analytics collaborate under one roof to ship faster.'
  },
  {
    question: 'How can [Your Agency] guarantee accurate reporting?',
    answer:
      'We implement server-side tracking where feasible, follow a strict analytics QA checklist, and reconcile ad platform data with analytics and CRM events. Every report includes definitions and methodology.'
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Need Help? <span role="img" aria-label="thinking">🤔</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Answers to common questions about how we work and report results.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <Disclosure key={item.question}>
              {({ open }) => (
                <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm overflow-hidden">
                  <Disclosure.Button className="w-full flex items-center justify-between px-6 py-4 text-left">
                    <span className="font-semibold text-slate-900">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-5 pt-0 text-slate-700 leading-relaxed">
                    {item.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


