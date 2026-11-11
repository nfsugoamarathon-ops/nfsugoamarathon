import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/eventData';

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#DADBCF] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 sm:gap-4 py-3.5 sm:py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1749D1] rounded min-w-0 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-[#191A17] text-sm leading-relaxed flex-1 min-w-0 break-words pr-2">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="shrink-0 text-[#1749D1]" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-[#686D66]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 pr-2 sm:pr-6">
          <p className="text-[#686D66] text-sm leading-relaxed break-words">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(FAQS[0].category);
  const [openIndex, setOpenIndex] = useState(null);

  const categoryData = FAQS.find((f) => f.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  const handleToggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faqs" className="bg-[#FFFCEB] py-14 sm:py-20 md:py-24 scroll-mt-16 overflow-hidden" aria-labelledby="faqs-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full min-w-0">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">FAQs</p>
          <h2 id="faqs-heading" className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#191A17] leading-tight mb-3 sm:mb-4">
            Questions answered.
          </h2>
          <p className="text-[#686D66] text-sm sm:text-base">
            Everything you need to know about registering, paying, and racing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 w-full min-w-0">
          {/* Category filters */}
          <div className="w-full min-w-0 md:col-span-1">
            <nav
              aria-label="FAQ categories"
              className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide -mx-1 px-1 w-full min-w-0 max-w-full"
            >
              {FAQS.map((f) => (
                <button
                  key={f.category}
                  type="button"
                  onClick={() => handleCategoryChange(f.category)}
                  className={`flex-shrink-0 text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-[#1749D1] ${
                    activeCategory === f.category
                      ? 'bg-[#1749D1] text-white shadow'
                      : 'text-[#686D66] hover:text-[#191A17] hover:bg-white border border-[#DADBCF]'
                  }`}
                  aria-current={activeCategory === f.category ? 'true' : undefined}
                >
                  {f.category}
                </button>
              ))}
            </nav>
          </div>

          {/* Questions */}
          <div className="w-full min-w-0 md:col-span-3 bg-white border border-[#DADBCF] rounded-2xl p-4 sm:p-6 shadow-xs">
            <h3 className="font-semibold text-[#191A17] text-base mb-3 sm:mb-4">{activeCategory}</h3>
            {categoryData?.questions.map((q, i) => (
              <AccordionItem
                key={i}
                question={q.q}
                answer={q.a}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>

        {/* Still have questions? */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-[#686D66] text-sm mb-3">Still have questions?</p>
          <a
            href="https://wa.me/918788629231"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db254] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-xs"
          >
            💬 WhatsApp Abhay
          </a>
        </div>
      </div>
    </section>
  );
}

