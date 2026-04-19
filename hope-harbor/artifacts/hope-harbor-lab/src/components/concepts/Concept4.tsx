import { motion } from "framer-motion";
import { SendHorizonal, ArrowRight, LineChart, Target, Map } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useChatSimulation } from "@/hooks/useChatSimulation";

const LOGO_URL = `${import.meta.env.BASE_URL}hope-harbor-logo.png`;

// Brand palette derived from the real Hope Harbor logo + refined status green
const BRAND = {
  bg: "#0A0F1A",
  panel: "#0F1623",
  panelHi: "#141C2C",
  blue: "#3B9CE2",
  blueDeep: "#2D7DBF",
  sun: "#F5A623",
  sunSoft: "#F4B95C",
  online: "#34D17A",
  text: "#FFFFFF",
  muted: "rgba(255,255,255,0.55)",
  hairline: "rgba(255,255,255,0.06)",
};

const onlineGlow = (size = 7) => ({
  width: size,
  height: size,
  borderRadius: 999,
  background: BRAND.online,
  boxShadow: `0 0 0 ${size * 0.45}px ${BRAND.online}26, 0 0 ${size * 1.6}px ${BRAND.online}AA`,
  display: "inline-block",
});

const STARTER_REPLIES: Record<string, string> = {
  "I'm reaching out for myself":
    "Thank you for trusting us with this — that first step is often the hardest. Whenever you're ready, share a little about what you're going through and we'll help you find treatment that truly fits. There's no rush.",
  "I'm trying to help someone I love":
    "We walk families through this every day — from making sense of the options to coordinating the right care. Tell us a little about your loved one's situation and we'll find the right path together.",
  "I need to talk to someone now":
    "We're right here. Our team is on, day and night, and we can begin matching you to programs immediately — no referral or insurance check needed first. Tell us what's happening.",
  "I work at a treatment center":
    "Welcome — we partner with treatment centers to grow admissions and close revenue gaps through our Admissions Audit. I can connect you with our partnerships team, or you can read more just below.",
};

const STARTERS = Object.keys(STARTER_REPLIES);

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Start a conversation",
    body: "Tell us what you're going through. No intake forms, no phone trees — just a private conversation, on your terms.",
  },
  {
    num: "02",
    title: "We find your right fit",
    body: "We match you to accredited programs based on your clinical needs, your location, and what your life actually looks like.",
  },
  {
    num: "03",
    title: "We stay with you",
    body: "From first conversation to coordinated placement and the steps after — you're never navigating alone.",
  },
];

const AUDIT_PILLARS = [
  {
    icon: Target,
    title: "Funnel diagnostic",
    body: "We map every touchpoint from inquiry to admission — response times, drop-offs, intake friction — and quantify the admissions you're losing.",
  },
  {
    icon: LineChart,
    title: "Revenue mapping",
    body: "Payor mix, reimbursement recovery, length-of-stay economics, and the silent revenue leaks most centers never see.",
  },
  {
    icon: Map,
    title: "Growth roadmap",
    body: "A prioritized 90-day plan with projected admissions lift, the fixes that compound, and where to start on Monday.",
  },
];

export default function Concept4() {
  const { messages, isTyping, sendMessage } = useChatSimulation(
    STARTER_REPLIES,
    undefined,
    "Hi — we're glad you're here. Whether you're reaching out for yourself or someone you love, we'll listen first and help you find treatment that truly fits. What would you like to share?"
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

  const scrollToProviders = () => {
    document.getElementById("treatment-centers")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-full relative overflow-hidden font-sans" style={{ background: BRAND.bg }}>
      {/* Ambient lighting */}
      <div className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full blur-[220px] opacity-[0.07] pointer-events-none" style={{ background: BRAND.sun }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full blur-[220px] opacity-[0.08] pointer-events-none" style={{ background: BRAND.blue }} />

      {/* Nav */}
      <nav
        className="relative z-10 px-8 py-6 flex items-center justify-between max-w-[1320px] mx-auto"
        style={{ borderBottom: `1px solid ${BRAND.hairline}` }}
      >
        <a href="/" className="flex items-center shrink-0" aria-label="Hope Harbor home">
          <img
            src={LOGO_URL}
            alt="Hope Harbor — Addiction Treatment Navigation"
            className="h-[88px] w-auto select-none"
            draggable={false}
          />
        </a>
        <div className="hidden md:flex items-center gap-9">
          <div className="flex items-center gap-8 text-[13.5px] font-light" style={{ color: BRAND.muted }}>
            <a href="#" className="hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>How we help</a>
            <a href="#" className="hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>Our story</a>
            <button onClick={scrollToProviders} className="hover:text-white transition-colors duration-300" style={{ color: "inherit", background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>
              For treatment centers
            </button>
          </div>
          <button
            className="px-5 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-200"
            style={{ background: `${BRAND.blue}1F`, color: BRAND.blue, border: `1px solid ${BRAND.blue}33` }}
            onMouseEnter={e => (e.currentTarget.style.background = `${BRAND.blue}33`)}
            onMouseLeave={e => (e.currentTarget.style.background = `${BRAND.blue}1F`)}
          >
            Begin Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10 max-w-[1320px] mx-auto px-8 pt-14 pb-24 grid lg:grid-cols-[1fr_1.22fr] gap-12 lg:gap-16 items-center">

        {/* Left */}
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2.5 mb-8"
          >
            <span style={onlineGlow(7)} />
            <span className="text-[11px] tracking-[0.22em] uppercase font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
              Available right now · Day or night
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif leading-[1.06] mb-7"
            style={{ fontSize: "clamp(2.7rem, 4.6vw, 3.95rem)", color: BRAND.text }}
          >
            The right care<br />
            <span className="italic" style={{ color: "rgba(255,255,255,0.55)" }}>
              starts with a<br />conversation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[17px] font-light leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Confidential addiction treatment navigation, guided by people who listen first. We help you find the right program — and stay with you long after the first call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-3.5"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-[12px] font-light" style={{ color: BRAND.blue, opacity: 0.7, fontVariantNumeric: "tabular-nums" }}>01</span>
              <span className="text-[14px] font-light" style={{ color: "rgba(255,255,255,0.72)" }}>Free, private, no insurance check to start</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[12px] font-light" style={{ color: BRAND.blue, opacity: 0.7, fontVariantNumeric: "tabular-nums" }}>02</span>
              <span className="text-[14px] font-light" style={{ color: "rgba(255,255,255,0.72)" }}>Matched to accredited, vetted programs nationwide</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[12px] font-light" style={{ color: BRAND.blue, opacity: 0.7, fontVariantNumeric: "tabular-nums" }}>03</span>
              <span className="text-[14px] font-light" style={{ color: "rgba(255,255,255,0.72)" }}>Grounded in 10+ years of treatment program operations</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Chat */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="rounded-2xl p-[1px]"
            style={{
              background: `linear-gradient(145deg, ${BRAND.blue}73 0%, ${BRAND.sun}26 55%, rgba(255,255,255,0.04) 100%)`,
              boxShadow: "0 40px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02)",
            }}
          >
            <div
              className="rounded-[calc(1rem-1px)] overflow-hidden flex flex-col"
              style={{ background: BRAND.panel, height: "600px" }}
            >
              {/* Chat header */}
              <div
                className="flex items-center justify-between px-5 pt-4 pb-4 shrink-0"
                style={{ borderBottom: `1px solid ${BRAND.hairline}`, background: BRAND.panelHi }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={LOGO_URL}
                    alt="Hope Harbor"
                    className="h-[48px] w-auto select-none"
                    draggable={false}
                  />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-light flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <span style={onlineGlow(6)} />
                      Guidance team online · 24/7
                    </span>
                  </div>
                </div>
                <span
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5"
                  style={{ color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.05)", border: `1px solid ${BRAND.hairline}` }}
                >
                  <span style={onlineGlow(5)} />
                  Private
                </span>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4" style={{ scrollbarWidth: "none" }}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`max-w-[88%] rounded-xl px-4 py-3.5 ${
                      msg.role === "user" ? "self-end rounded-br-sm" : "self-start rounded-bl-sm"
                    }`}
                    style={
                      msg.role === "user"
                        ? { background: `${BRAND.blue}14`, color: BRAND.blue, border: `1px solid ${BRAND.blue}26` }
                        : { background: BRAND.panelHi, color: "rgba(255,255,255,0.88)", border: `1px solid ${BRAND.hairline}` }
                    }
                  >
                    <p className="text-[14px] leading-relaxed font-light">{msg.content}</p>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="self-start rounded-xl rounded-bl-sm px-4 py-3.5 flex gap-1.5 items-center"
                    style={{ background: BRAND.panelHi, border: `1px solid ${BRAND.hairline}` }}
                  >
                    {[0, 170, 340].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{ background: `${BRAND.blue}66`, animationDelay: `${d}ms` }}
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
                      className="text-[13px] font-light text-left px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group"
                      style={{
                        color: "rgba(255,255,255,0.62)",
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${BRAND.hairline}`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.background = `${BRAND.blue}12`;
                        e.currentTarget.style.borderColor = `${BRAND.blue}33`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.62)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.borderColor = BRAND.hairline;
                      }}
                    >
                      {s}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-50 transition-opacity duration-200 shrink-0" style={{ color: BRAND.blue }} />
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
                    aria-label="Send a message to Hope Harbor"
                    className="w-full pl-5 pr-12 py-3.5 rounded-xl text-[14px] font-light focus:outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                    onFocus={e => (e.target.style.borderColor = `${BRAND.blue}59`)}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    aria-label="Send message"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-25"
                    style={{ background: `${BRAND.blue}1F`, color: BRAND.blue }}
                  >
                    <SendHorizonal className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ── BELOW FOLD ── */}

      {/* Section 1: How we help (consumer-facing, with subtle provider link) */}
      <section
        className="relative z-10 py-28"
        style={{ borderTop: `1px solid ${BRAND.hairline}` }}
        aria-labelledby="how-we-help"
      >
        <div className="max-w-[1280px] mx-auto px-8">
          <motion.p
            id="how-we-help"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[11px] tracking-[0.22em] uppercase font-light mb-16 text-center"
            style={{ color: BRAND.blue, opacity: 0.65 }}
          >
            How we help
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
              >
                <div className="text-[13px] font-light mb-6" style={{ color: BRAND.blue, opacity: 0.55, fontVariantNumeric: "tabular-nums" }}>{step.num}</div>
                <div className="w-10 h-px mb-6" style={{ background: `${BRAND.blue}40` }} />
                <h3 className="font-serif text-[1.25rem] mb-4 leading-snug text-white">{step.title}</h3>
                <p className="text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Subtle pivot to providers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToProviders}
              className="text-[12.5px] font-light flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 group"
              style={{ color: "rgba(255,255,255,0.5)", border: `1px solid ${BRAND.hairline}`, background: "rgba(255,255,255,0.02)" }}
              onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = `${BRAND.blue}40`; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = BRAND.hairline; }}
            >
              We help on the other side too — see how we grow treatment centers
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" style={{ color: BRAND.blue }} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Founder credibility */}
      <section
        className="relative z-10 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        aria-labelledby="our-story"
      >
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={LOGO_URL}
              alt="Hope Harbor"
              className="h-[72px] w-auto mx-auto mb-10 opacity-90 select-none"
              draggable={false}
            />
            <h2 id="our-story" className="font-serif text-[1.7rem] md:text-[2.05rem] leading-snug mb-7 text-white">
              Built from the inside.<br />
              <span className="italic" style={{ color: "rgba(255,255,255,0.5)" }}>For the people the system failed.</span>
            </h2>
            <p className="text-[16px] font-light leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.5)" }}>
              Hope Harbor was founded by Alex Lind — a former PHP, IOP, and MAT facility operator with more than ten years of behavioral health operating experience across admissions, growth, compliance, and treatment operations in North Carolina. After a decade running programs firsthand, Alex built Hope Harbor to be what he saw missing from the inside: honest, informed navigation that puts the person seeking care first, every time.
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8"
              style={{ borderTop: `1px solid ${BRAND.hairline}` }}
            >
              {["10+ years behavioral health operations", "Former PHP · IOP · MAT operator", "JCAHO-accredited partner network"].map((cred) => (
                <span key={cred} className="text-[12px] font-light tracking-wide" style={{ color: "rgba(255,255,255,0.32)" }}>
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: For Treatment Centers — The Admissions Audit */}
      <section
        id="treatment-centers"
        className="relative z-10 py-28"
        style={{ borderTop: `1px solid ${BRAND.hairline}` }}
        aria-labelledby="admissions-audit"
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="text-[11px] tracking-[0.22em] uppercase font-light mb-6" style={{ color: BRAND.sun, opacity: 0.85 }}>
              For Treatment Centers
            </div>
            <h2 id="admissions-audit" className="font-serif text-[2rem] md:text-[2.6rem] leading-[1.08] mb-7 text-white">
              The admissions you're missing.<br />
              <span className="italic" style={{ color: "rgba(255,255,255,0.5)" }}>The revenue you can recover.</span>
            </h2>
            <p className="text-[16px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              The Hope Harbor Admissions Audit is a 14-day diagnostic review that quantifies the admissions slipping through your funnel, the revenue your operation is leaving on the table, and the fastest path to close both — built by someone who has operated PHP, IOP, and MAT programs — and seen the revenue gaps firsthand.
            </p>
          </motion.div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-px mb-16 rounded-2xl overflow-hidden" style={{ background: BRAND.hairline }}>
            {AUDIT_PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="px-9 py-12"
                  style={{ background: BRAND.panel }}
                >
                  <Icon className="w-5 h-5 mb-7" style={{ color: BRAND.blue }} strokeWidth={1.4} />
                  <h3 className="font-serif text-[1.2rem] mb-4 text-white">{p.title}</h3>
                  <p className="text-[13.5px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{p.body}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing + CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl px-10 py-12 md:px-16 md:py-14 grid md:grid-cols-[1fr_auto] gap-12 items-center"
            style={{
              background: `linear-gradient(140deg, ${BRAND.blue}10 0%, rgba(255,255,255,0.025) 60%)`,
              border: `1px solid ${BRAND.blue}26`,
            }}
          >
            <div>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-serif text-white" style={{ fontSize: "2.4rem", lineHeight: 1 }}>$500</span>
                <span className="text-[14px] font-light" style={{ color: "rgba(255,255,255,0.4)" }}>– $1,500</span>
              </div>
              <p className="text-[13.5px] font-light leading-relaxed mb-1" style={{ color: "rgba(255,255,255,0.62)" }}>
                Scoped to your facility size and audit depth.
              </p>
              <p className="text-[12.5px] font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
                Delivered as a written report and a 90-minute strategy session with our team.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <button
                className="px-7 py-3.5 rounded-full text-[13.5px] font-medium transition-all duration-200 flex items-center gap-2.5"
                style={{ background: BRAND.blue, color: "#0A0F1A" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#5AB1EA"; }}
                onMouseLeave={e => { e.currentTarget.style.background = BRAND.blue; }}
              >
                Schedule your audit
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                className="text-[12.5px] font-light transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                Talk to our partnerships team →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer hairline */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-10 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: `1px solid ${BRAND.hairline}` }}>
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Hope Harbor" className="h-[36px] w-auto opacity-80" draggable={false} />
        </div>
        <div className="text-[11.5px] font-light" style={{ color: "rgba(255,255,255,0.32)" }}>
          © {new Date().getFullYear()} Hope Harbor · Confidential addiction treatment navigation
        </div>
      </div>
    </div>
  );
}
