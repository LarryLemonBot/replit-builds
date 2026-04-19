import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useChatSimulation } from "@/hooks/useChatSimulation";
import { HopeLogo } from "@/components/HopeLogo";

const STARTER_REPLIES: Record<string, string> = {
  "I need help for myself":
    "That quiet courage took something real. We'll guide you with care and complete discretion — at whatever pace feels right. There's no rush here, and no pressure.",
  "I'm looking for help for a loved one":
    "Caring for someone who is struggling carries its own kind of weight. Let's find the right support together — for both of you. You don't have to figure this out alone.",
  "I'm a provider seeking resources":
    "We work closely with referring clinicians and care teams. Our clinical liaison is available to discuss placement options, criteria, and availability directly.",
  "I need help quickly":
    "We hear you. There is no waiting list for this conversation. Tell me a little more, and we'll move forward together right now.",
};

const STARTERS = Object.keys(STARTER_REPLIES);

const PRINCIPLES = [
  {
    num: "I",
    title: "Clarity first.",
    body: "We cut through a fragmented system to give you one clear path — matched to your situation, not a template.",
  },
  {
    num: "II",
    title: "Privacy as a standard.",
    body: "Every conversation here is completely confidential. Your story belongs to you.",
  },
  {
    num: "III",
    title: "No two paths are the same.",
    body: "Guidance built around your specific circumstances — with the time and precision this decision deserves.",
  },
];

export default function Concept1() {
  const { messages, isTyping, sendMessage } = useChatSimulation(STARTER_REPLIES);
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
    <div className="min-h-full bg-[#0B0F1A] relative overflow-hidden font-sans">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1DB8C4] blur-[180px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A84C] blur-[200px] opacity-[0.04] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 px-8 py-7 flex items-center justify-between max-w-7xl mx-auto">
        <HopeLogo iconSize={30} titleClass="text-[1.6rem]" accentColor="#2ECAD4" />
        <div className="hidden md:flex items-center gap-8 text-[13px] font-light text-white/60 tracking-wide">
          <a href="#" className="hover:text-white transition-colors duration-300">Programs</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Approach</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Locations</a>
          <button className="text-[#C9A84C] hover:text-[#D4A843] transition-colors duration-300">Contact Us</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-10 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[11px] tracking-[0.25em] uppercase text-[#2ECAD4]/60 mb-7 font-light"
          >
            Hope Harbor Health
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl leading-[1.04] text-white mb-8"
          >
            Clarity <br />
            <span className="italic text-white/70">in the</span> calm.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[17px] text-white/50 font-light leading-relaxed max-w-md"
          >
            Guiding you toward lasting recovery with unhurried precision and deep compassion.
          </motion.p>
        </div>

        {/* Chat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-6 shadow-2xl flex flex-col h-[520px]">
            <div className="flex-1 overflow-y-auto pr-2 mb-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`max-w-[88%] rounded-2xl px-5 py-3.5 ${
                    msg.role === "user"
                      ? "bg-white/10 text-white self-end rounded-tr-sm"
                      : "bg-transparent text-white/80 border border-white/[0.07] self-start rounded-tl-sm"
                  }`}
                >
                  <p className="text-[14px] font-light leading-relaxed">{msg.content}</p>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="self-start px-5 py-3 flex gap-1.5 items-center"
                >
                  {[0, 150, 300].map((d) => (
                    <span
                      key={d}
                      className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce"
                      style={{ animationDelay: `${d}ms` }}
                    />
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs text-[#2ECAD4] border border-[#2ECAD4]/25 hover:bg-[#2ECAD4]/10 rounded-full px-3.5 py-1.5 transition-all duration-200 text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="w-full bg-white/[0.04] border border-white/[0.09] rounded-full pl-5 pr-12 py-3.5 text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 transition-colors font-light"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/40 hover:text-[#2ECAD4] disabled:opacity-30 transition-colors"
              >
                <SendHorizonal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Below Fold ── */}

      {/* Principles */}
      <section className="relative z-10 border-t border-white/[0.06] py-28">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-3 gap-16">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            >
              <div className="font-serif italic text-[#C9A84C]/40 text-sm mb-5">{p.num}.</div>
              <div className="font-serif text-xl text-white mb-4 leading-snug">{p.title}</div>
              <div className="text-[14px] text-white/40 font-light leading-relaxed">{p.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="relative z-10 py-24">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-10 h-[1px] bg-[#C9A84C]/30 mx-auto mb-10 origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-white/60 italic leading-relaxed"
          >
            "Finding the right care should feel like being guided — not processed."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-[11px] tracking-[0.2em] uppercase text-white/25 font-light"
          >
            Clinical Advisory Board — Hope Harbor Health
          </motion.p>
        </div>
        <div className="max-w-3xl mx-auto px-8 mt-16 flex flex-col md:flex-row items-center gap-4 justify-center">
          {["For Providers & Referring Teams", "All 50 States", "100% Confidential"].map((tag) => (
            <span
              key={tag}
              className="text-[12px] text-white/30 tracking-[0.15em] uppercase border border-white/[0.08] rounded-full px-5 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
