import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is TaskFlow free to use?", a: "We offer a generous free tier for individuals. Teams can upgrade to our Pro plan for advanced features." },
  { q: "Does it integrate with other tools?", a: "Yes! TaskFlow integrates seamlessly with Slack, Google Drive, GitHub, and many more." },
  { q: "Can I use it on mobile?", a: "Absolutely. Our progressive web app and native mobile apps ensure you stay productive on the go." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 text-left flex justify-between items-center font-semibold text-lg"
            >
              {faq.q}
              <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                <ChevronDown />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 opacity-70"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}