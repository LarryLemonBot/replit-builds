import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useChatSimulation } from "@/hooks/useChatSimulation";

const STARTER_REPLIES: Record<string, string> = {
  "I need help for myself":
    "Understood. Scanning programs matched to your profile. Are you looking for inpatient, outpatient, or are you not sure yet — I can help you figure that out.",
  "I'm looking for help for a loved one":
    "Family-initiated intake is one of the most common paths we support. A few questions will help me find the right fit. Is your loved one aware you're reaching out today?",
  "I'm a provider seeking resources":
    "Routing to provider interface. You can access real-time bed availability, clinical intake criteria, and direct coordination from there — or walk through it here with me.",
  "I need help quickly":
    "Flagging as priority. Our team is available right now — day or night. Should I connect you with a specialist directly, or would you like to continue here?",
};

const STARTERS = Object.keys(STARTER_REPLIES);

const HOW_IT_WORKS = [
  { id: "01", title: "Share what you need", body: "No forms. No phone trees. Start a conversation and tell us what's happening." },
  { id: "02", title: "Matched in minutes", body: "The platform surfaces accredited programs matched precisely to your clinical needs and location." },
  { id: "03", title: "Connected to care", body: "A specialist joins the conversation to confirm the match and coordinate the transition — zero friction." },
];

export default function Concept5() {
  const { messages, isTyping, sendMessage } = useChatSimulation(
    STARTER_REPLIES,
    undefined,
    "Hope Harbor is online. I'm here to help you find treatment guidance, navigate options, or connect with a specialist. Where would you like to start?"
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
    <div className="min-h-full bg-[#050508] relative overflow-hidden font-mono flex flex-col">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Ambient teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1DB8C4] blur-[300px] opacity-[0.04] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 px-8 py-6 flex items-center justify-between shrink-0 border-b border-white/[0.04]">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="2" stroke="#1DB8C4" strokeWidth="1.5" />
            <path d="M12 7v14" stroke="#1DB8C4" strokeWidth="1.5" />
            <path d="M6.5 10h11" stroke="#1DB8C4" strokeWidth="1.5" />
            <path d="M6.5 10Q5 17 9 21" stroke="#1DB8C4" strokeWidth="1.5" />
            <path d="M17.5 10Q19 17 15 21" stroke="#1DB8C4" strokeWidth="1.5" />
            <path d="M9 21Q12 23 15 21" stroke="#1DB8C4" strokeWidth="1.5" />
          </svg>
          <span className="text-[13px] tracking-[0.2em] text-white/50 uppercase">Hope Harbor</span>
          <span className="text-white/15 text-[13px]">/</span>
          <span className="text-[13px] tracking-[0.2em] text-[#1DB8C4]/60 uppercase">Health</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1DB8C4] animate-pulse" />
          <span className="text-[11px] text-white/35 uppercase tracking-[0.18em]">System Online</span>
        </div>
      </nav>

      {/* Chat Hero */}
      <main className="flex-1 relative z-10 flex flex-col max-w-3xl mx-auto w-full px-8 pb-10">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto pt-10 pb-6 flex flex-col gap-7 scrollbar-none min-h-[420px]">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col max-w-[88%] ${msg.role === "user" ? "self-end items-end" : "self-start"}`}
            >
              <span className="text-[10px] text-white/25 uppercase tracking-[0.18em] mb-2 flex items-center gap-2">
                {msg.role === "user" ? "You" : "HH"}
                <span className="w-1 h-1 rounded-full bg-white/15" />
                {new Date().toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" })}
              </span>
              <div
                className={`text-[15px] leading-relaxed ${
                  msg.role === "user" ? "text-[#1DB8C4]" : "text-white/80"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="self-start flex items-center gap-3 text-[14px] text-white/30"
            >
              <div className="w-px h-4 bg-[#1DB8C4] animate-pulse" />
              Processing
              <span className="animate-[pulse_1.5s_ease-in-out_infinite]">...</span>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Starters */}
        <AnimatePresence>
          {messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-2.5 mb-7"
            >
              {STARTERS.map((s, i) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-[12px] uppercase tracking-wider text-white/50 border border-white/[0.09] hover:border-[#1DB8C4]/40 hover:text-[#1DB8C4] bg-transparent px-4 py-2.5 transition-all duration-200 flex items-center gap-2.5 group"
                >
                  <span className="text-white/20 group-hover:text-[#1DB8C4]/40 font-mono">[{i + 1}]</span>
                  {s}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input */}
        <div className="border-t border-white/[0.07] pt-5">
          <div className="flex items-center gap-4">
            <span className="text-[#1DB8C4] text-[16px] shrink-0 select-none">{">"}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message and press enter..."
              className="flex-1 bg-transparent text-white/80 placeholder:text-white/18 focus:outline-none text-[14px] tracking-wide"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="text-white/25 hover:text-[#1DB8C4] disabled:opacity-0 transition-colors duration-200 shrink-0"
            >
              <SendHorizonal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* ── Below Fold ── */}

      {/* How it works */}
      <section className="relative z-10 border-t border-white/[0.05] py-24">
        <div className="max-w-3xl mx-auto px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-12"
          >
            — How it works
          </motion.p>
          <div className="flex flex-col gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-8 items-start border-b border-white/[0.04] pb-6 last:border-0"
              >
                <span className="text-[#1DB8C4]/40 text-[12px] tracking-wider shrink-0 mt-0.5 w-6">{step.id}</span>
                <div>
                  <div className="text-white/80 text-[15px] mb-2 tracking-wide">{step.title}</div>
                  <div className="text-white/30 text-[13px] leading-relaxed font-sans font-light">{step.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Platform */}
      <section className="relative z-10 border-t border-white/[0.05] py-20 mb-10">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#1DB8C4]/15 p-8 relative"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1DB8C4]/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#1DB8C4]/30" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#1DB8C4]/50 mb-4">
                  — Provider Platform
                </div>
                <h3 className="text-[20px] text-white/80 mb-3 tracking-wide">Hope Harbor for Providers</h3>
                <p className="text-[13px] text-white/35 font-sans font-light leading-relaxed max-w-sm">
                  Real-time bed availability, clinical intake criteria, and direct referral coordination — built for clinical teams who need answers fast.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <button className="flex items-center gap-2 text-[#1DB8C4] border border-[#1DB8C4]/25 hover:border-[#1DB8C4]/60 px-5 py-3 text-[12px] tracking-wider uppercase transition-all duration-200 group">
                  Provider Access
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
                <div className="text-[10px] tracking-[0.18em] uppercase text-white/20 text-center">
                  provider.hopeharbor.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
