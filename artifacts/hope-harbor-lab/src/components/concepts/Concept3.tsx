import { motion } from "framer-motion";
import { SendHorizonal, ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useChatSimulation } from "@/hooks/useChatSimulation";
import { HopeLogo } from "@/components/HopeLogo";

// Replies are specific, warm, and useful — not generic reassurance
const STARTER_REPLIES: Record<string, string> = {
  "I need help for myself":
    "Thank you for reaching out — that's often the hardest part. We'll match you with programs suited to your needs, location, and insurance. Can you tell me a little about what you're facing? We can go at whatever pace feels right.",
  "I'm looking for help for a loved one":
    "We understand how difficult it is to watch someone you care about struggle. We guide families through this every day — from understanding options to coordinating the right placement. Tell me a little about their situation.",
  "I'm a provider seeking a referral partner":
    "We'd love to work with your team. Our clinical liaisons can discuss real-time placement availability, intake criteria, and care coordination. Would you prefer a direct introduction to our provider team, or shall we start here?",
  "I need help quickly":
    "You've come to the right place. Our team is available now and can begin matching you to programs immediately — no referral required. Tell me what's happening and we'll move quickly.",
};

const STARTERS = Object.keys(STARTER_REPLIES);

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Start a conversation",
    body: "Tell us what you or your loved one is going through. No intake forms, no phone trees — just a direct conversation.",
  },
  {
    num: "02",
    title: "We find the right fit",
    body: "We match you to accredited programs based on clinical need, your location, and your insurance coverage.",
  },
  {
    num: "03",
    title: "Supported throughout",
    body: "From first contact to placement and ongoing care, you're never navigating this alone.",
  },
];

const PROVIDER_STATS = [
  { value: "94%", label: "Placement success" },
  { value: "24/7", label: "Always available" },
  { value: "200+", label: "Accredited facilities" },
];

export default function Concept3() {
  const { messages, isTyping, sendMessage } = useChatSimulation(
    STARTER_REPLIES,
    undefined,
    "Hi. I'm here to help you find the right behavioral health care — for yourself or someone you love. There's no wrong place to start. What's on your mind today?"
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
    <div className="min-h-full relative overflow-hidden font-sans" style={{ background: "#0D1118" }}>
      {/* Ambient lighting */}
      <div className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full blur-[220px] opacity-[0.07] pointer-events-none" style={{ background: "#C9A84C" }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[220px] opacity-[0.06] pointer-events-none" style={{ background: "#1DB8C4" }} />

      {/* Nav */}
      <nav className="relative z-10 px-8 py-6 flex items-center justify-between max-w-[1280px] mx-auto">
        <HopeLogo
          iconSize={42}
          titleClass="text-[2.2rem]"
          accentColor="#C9A84C"
          textColor="#F0EDE8"
          subtitleOpacity={0.38}
        />
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7 text-[13.5px] font-light" style={{ color: "rgba(240,237,232,0.55)" }}>
            <a href="#" className="hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>Our Approach</a>
            <a href="#" className="hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>Programs</a>
            <a href="#" className="hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>For Providers</a>
          </div>
          <button
            className="px-5 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-200"
            style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,168,76,0.22)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(201,168,76,0.12)")}
          >
            Begin Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 pt-8 pb-24 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">

        {/* Left: brand statement */}
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ECAD4] animate-pulse" />
            <span className="text-[11px] tracking-[0.22em] uppercase font-light" style={{ color: "rgba(46,202,212,0.7)" }}>
              Available now
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif leading-[1.08] mb-7"
            style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)", color: "#F0EDE8" }}
          >
            Find the right care<br />
            <span className="italic" style={{ color: "rgba(240,237,232,0.6)" }}>
              for yourself or<br />someone you love.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[17px] font-light leading-relaxed mb-10"
            style={{ color: "rgba(240,237,232,0.5)" }}
          >
            Private. Compassionate. Expert behavioral health guidance from the first conversation through placement and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            {["100% Confidential", "All 50 States", "No referral needed"].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-[12px] font-light" style={{ color: "rgba(240,237,232,0.35)" }}>
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: "rgba(201,168,76,0.6)" }} />
                {tag}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Chat panel — the primary conversion element */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gradient border wrapper */}
          <div
            className="rounded-[28px] p-[1px]"
            style={{
              background: "linear-gradient(145deg, rgba(201,168,76,0.35) 0%, rgba(46,202,212,0.12) 60%, rgba(255,255,255,0.04) 100%)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
            }}
          >
            <div className="rounded-[27px] overflow-hidden flex flex-col" style={{ background: "#131922", height: "580px" }}>

              {/* Chat header */}
              <div
                className="flex items-center gap-4 px-6 pt-6 pb-5 shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.12)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="2" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M12 7v14" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M6.5 10h11" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M6.5 10Q5 17 9 21" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M17.5 10Q19 17 15 21" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M9 21Q12 23 15 21" stroke="#C9A84C" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold" style={{ color: "#F0EDE8" }}>Hope Harbor</p>
                  <p className="text-[12px] font-light flex items-center gap-1.5" style={{ color: "rgba(240,237,232,0.4)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2ECAD4] animate-pulse inline-block" />
                    Guidance team online
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4" style={{ scrollbarWidth: "none" }}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`max-w-[88%] rounded-2xl px-4 py-3.5 ${
                      msg.role === "user" ? "self-end rounded-br-sm" : "self-start rounded-bl-sm"
                    }`}
                    style={
                      msg.role === "user"
                        ? { background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }
                        : { background: "#0D1118", color: "rgba(240,237,232,0.88)", border: "1px solid rgba(255,255,255,0.05)" }
                    }
                  >
                    <p className="text-[14px] leading-relaxed">{msg.content}</p>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="self-start rounded-2xl rounded-bl-sm px-4 py-3.5 flex gap-1.5 items-center"
                    style={{ background: "#0D1118", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    {[0, 170, 340].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{ background: "rgba(201,168,76,0.4)", animationDelay: `${d}ms` }}
                      />
                    ))}
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Starter prompts */}
              {messages.length === 1 && (
                <div className="px-5 pb-4 flex flex-col gap-1.5 shrink-0">
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-[13px] text-left px-4 py-2.5 rounded-xl transition-all duration-200"
                      style={{
                        color: "rgba(240,237,232,0.6)",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "#F0EDE8";
                        e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                        e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "rgba(240,237,232,0.6)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-5 pb-5 pt-3 shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="w-full pl-5 pr-12 py-3.5 rounded-2xl text-[14px] focus:outline-none transition-colors font-light"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#F0EDE8",
                    }}
                    onFocus={e => (e.target.style.borderColor = "rgba(201,168,76,0.3)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.07)")}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-25"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}
                  >
                    <SendHorizonal className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── BELOW FOLD ── */}

      {/* Section 1: How we help — consumer process */}
      <section className="relative z-10 py-28" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[11px] tracking-[0.22em] uppercase font-light mb-16 text-center"
            style={{ color: "rgba(201,168,76,0.5)" }}
          >
            How we help
          </motion.p>
          <div className="grid md:grid-cols-3 gap-12">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
              >
                <div className="text-[13px] font-light mb-6" style={{ color: "rgba(201,168,76,0.45)" }}>{step.num}</div>
                <div className="w-10 h-px mb-6" style={{ background: "rgba(201,168,76,0.2)" }} />
                <h3 className="font-serif text-[1.25rem] mb-4 leading-snug" style={{ color: "#F0EDE8" }}>{step.title}</h3>
                <p className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(240,237,232,0.45)" }}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Founder credibility */}
      <section className="relative z-10 py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-8 h-8 mx-auto mb-8 opacity-30">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="2" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M12 7v14" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M6.5 10h11" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M6.5 10Q5 17 9 21" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M17.5 10Q19 17 15 21" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M9 21Q12 23 15 21" stroke="#C9A84C" strokeWidth="1.5" />
              </svg>
            </div>
            <h2 className="font-serif text-[1.6rem] md:text-[2rem] leading-snug mb-7" style={{ color: "#F0EDE8" }}>
              Founded by clinicians.<br />
              <span className="italic" style={{ color: "rgba(240,237,232,0.55)" }}>Built for people.</span>
            </h2>
            <p className="text-[16px] font-light leading-relaxed mb-12" style={{ color: "rgba(240,237,232,0.48)" }}>
              Hope Harbor was established by board-certified addiction psychiatrists and licensed clinical social workers who experienced firsthand how fragmented the system had become. Every part of our guidance model — from this conversation to coordinated placement — was designed to be the experience they wished existed for their own patients.
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {["Board-Certified Clinical Team", "JCAHO Accredited Network", "Licensed in All 50 States"].map((cred) => (
                <span key={cred} className="text-[12px] font-light tracking-wide" style={{ color: "rgba(240,237,232,0.3)" }}>
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Provider credibility — subtle */}
      <section className="relative z-10 pb-24 pt-4">
        <div className="max-w-[1280px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl px-10 py-10 md:px-14 md:py-12 grid md:grid-cols-[1fr_auto] gap-10 items-center"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.055)",
            }}
          >
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase font-light mb-5" style={{ color: "rgba(201,168,76,0.5)" }}>
                For Clinical Providers
              </div>
              <h3 className="font-serif text-[1.4rem] md:text-[1.6rem] leading-snug mb-4" style={{ color: "#F0EDE8" }}>
                Trusted by clinical teams<br />
                <span className="italic" style={{ color: "rgba(240,237,232,0.55)" }}>who refer with confidence.</span>
              </h3>
              <p className="text-[14px] font-light leading-relaxed max-w-lg" style={{ color: "rgba(240,237,232,0.42)" }}>
                We coordinate referrals with the same rigor and discretion you extend to your patients. Our clinical liaison team is available directly — with real-time availability and full documentation transparency.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-8 md:items-end">
              <div className="flex gap-8 md:gap-10">
                {PROVIDER_STATS.map((stat) => (
                  <div key={stat.label} className="text-center md:text-right">
                    <div className="font-serif text-[1.8rem] leading-none mb-1" style={{ color: "#F0EDE8" }}>{stat.value}</div>
                    <div className="text-[11px] font-light tracking-wide" style={{ color: "rgba(240,237,232,0.3)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <button
                className="flex items-center gap-2 text-[13px] font-medium transition-colors duration-200 group"
                style={{ color: "#C9A84C" }}
              >
                Explore Provider Resources
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
