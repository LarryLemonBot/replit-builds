import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useChatSimulation } from "@/hooks/useChatSimulation";
import { HopeLogo } from "@/components/HopeLogo";

const STARTER_REPLIES: Record<string, string> = {
  "I need help for myself":
    "That took something real. Hope Harbor matches you to care built around your specific situation — private, expert, and without compromise. Tell us a little more.",
  "I'm looking for help for a loved one":
    "Watching someone you love struggle is one of the hardest positions to be in. We have helped many families navigate this. Let us help you think it through.",
  "I'm a provider seeking resources":
    "We maintain a curated network of accredited facilities. Our clinical team can speak with you directly about referral criteria and current placement availability.",
  "I need help quickly":
    "We understand. Give us two minutes and we will have something concrete for you. The right path exists — let's find it together.",
};

const STARTERS = Object.keys(STARTER_REPLIES);

const STATS = [
  { value: "2,400+", label: "Individuals guided" },
  { value: "47", label: "Accredited facilities" },
  { value: "All 50", label: "States covered" },
  { value: "24/7", label: "Always available" },
];

export default function Concept2() {
  const { messages, isTyping, sendMessage } = useChatSimulation(
    STARTER_REPLIES,
    undefined,
    "Welcome. I'm here to help you find the right path forward. What brings you to Hope Harbor today?"
  );
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="min-h-full bg-[#08101E] relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[70vw] h-[70vh] bg-gradient-to-bl from-[#C9A84C]/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[55vw] h-[55vh] bg-gradient-to-tr from-[#1DB8C4]/[0.07] via-transparent to-transparent pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 px-8 py-6 flex items-center justify-between max-w-[1400px] mx-auto border-b border-white/[0.05]">
        <HopeLogo
          iconSize={32}
          titleClass="text-[1.7rem]"
          accentColor="#C9A84C"
          textColor="white"
        />
        <div className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.18em] uppercase text-white/50">
          <a href="#" className="hover:text-white transition-colors duration-300">Programs</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Philosophy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Admissions</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 pt-14 pb-24 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-start">
        <div className="pt-6">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-px h-14 bg-[#C9A84C]/40 mb-8 origin-top"
          />
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[68px] md:text-[88px] leading-[0.93] text-white tracking-tight mb-12"
          >
            Find your <br />
            <span className="text-[#C9A84C] italic">way back.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-6 items-start max-w-md"
          >
            <div className="w-8 h-px bg-white/15 mt-3 shrink-0" />
            <p className="text-[17px] text-white/60 font-light leading-relaxed">
              A private, restorative environment designed to guide you through recovery with dignity, expertise, and complete confidentiality.
            </p>
          </motion.div>
        </div>

        {/* Chat */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:mt-10"
        >
          <div className="bg-[#0B1524] border border-[#C9A84C]/20 shadow-2xl flex flex-col h-[560px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C9A84C]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C9A84C]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C9A84C]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C9A84C]/60" />

            <div className="px-8 pt-7 pb-5 border-b border-white/[0.05]">
              <span className="text-[11px] tracking-[0.22em] text-[#C9A84C]/70 uppercase font-light">Private Consultation</span>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-6 scrollbar-none">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`max-w-[90%] ${
                    msg.role === "user"
                      ? "text-[#1DB8C4] self-end text-right"
                      : "text-white/75 self-start"
                  }`}
                >
                  <p className="text-[15px] font-serif leading-relaxed">{msg.content}</p>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/35 self-start font-serif italic text-[15px]"
                >
                  Writing...
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-8 pb-5 flex flex-col gap-2">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-[14px] font-serif text-white/55 hover:text-white border-b border-white/[0.08] hover:border-white/30 pb-2 text-left transition-all duration-200"
                  >
                    "{s}"
                  </button>
                ))}
              </div>
            )}

            <div className="px-8 pb-7 pt-4 border-t border-white/[0.05]">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Begin typing..."
                  className="flex-1 bg-transparent text-white placeholder:text-white/25 focus:outline-none font-serif text-[15px]"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="text-white/35 hover:text-[#C9A84C] disabled:opacity-0 transition-colors duration-200"
                >
                  <SendHorizonal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Below Fold ── */}

      {/* Stats bar */}
      <section className="relative z-10 border-t border-white/[0.05] py-20">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-serif text-[44px] leading-none text-white mb-3">{stat.value}</div>
              <div className="text-[12px] tracking-[0.15em] uppercase text-white/35 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Credibility block */}
      <section className="relative z-10 border-t border-white/[0.05] py-24">
        <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#C9A84C]/50 mb-6 font-light">
              Clinical Foundation
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">
              Founded by clinicians.<br />
              <span className="italic text-white/60">Built for people.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="pt-2"
          >
            <p className="text-[17px] text-white/55 font-light leading-relaxed mb-10">
              Hope Harbor was established by a team of board-certified addiction psychiatrists and licensed clinical social workers who saw firsthand how disjointed the treatment landscape had become. Our guidance model was built from that experience — rigorous, confidential, and centered on the individual.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "JCAHO Accredited network facilities",
                "Licensed in all 50 states",
                "For providers: dedicated clinical liaison team",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[13px] text-white/40 font-light">
                  <div className="w-1 h-1 rounded-full bg-[#C9A84C]/50 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
