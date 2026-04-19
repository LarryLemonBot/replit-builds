import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { LayoutTemplate, SplitSquareHorizontal } from "lucide-react";
import Concept1 from "@/components/concepts/Concept1";
import Concept2 from "@/components/concepts/Concept2";
import Concept3 from "@/components/concepts/Concept3";
import Concept4 from "@/components/concepts/Concept4";
import Concept5 from "@/components/concepts/Concept5";

const CONCEPTS = [
  { id: 1, name: "Minimal Luxury", component: Concept1, recommended: false },
  { id: 2, name: "Cinematic Editorial", component: Concept2, recommended: false },
  { id: 3, name: "Hospitality Calm", component: Concept3, recommended: false },
  { id: 4, name: "Premium Clinical", component: Concept4, recommended: true },
  { id: 5, name: "Conversational", component: Concept5, recommended: false },
];

export default function ConceptLab() {
  const [activeConceptId, setActiveConceptId] = useState(4);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [compareConceptA, setCompareConceptA] = useState(1);
  const [compareConceptB, setCompareConceptB] = useState(2);

  const ActiveComponent = CONCEPTS.find((c) => c.id === activeConceptId)?.component || Concept1;
  const ComponentA = CONCEPTS.find((c) => c.id === compareConceptA)?.component || Concept1;
  const ComponentB = CONCEPTS.find((c) => c.id === compareConceptB)?.component || Concept2;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 h-16 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h1 className="font-serif font-medium text-lg tracking-wide text-foreground/90">
            Hope Harbor <span className="text-foreground/50 text-sm ml-2 font-sans tracking-normal">Concept Lab</span>
          </h1>
        </div>

        {!isCompareMode && (
          <nav className="hidden md:flex items-center bg-muted/30 p-1 rounded-full border border-border/50">
            {CONCEPTS.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveConceptId(concept.id)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  activeConceptId === concept.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeConceptId === concept.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="opacity-50">{concept.id}</span>
                  {concept.name}
                  {concept.recommended && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[#2ECAD4]/20 text-[#2ECAD4] tracking-wide leading-none">
                      REC
                    </span>
                  )}
                </span>
              </button>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCompareMode(!isCompareMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all border ${
              isCompareMode 
                ? "bg-secondary text-secondary-foreground border-secondary" 
                : "bg-transparent text-muted-foreground border-border hover:border-muted-foreground/30 hover:text-foreground"
            }`}
          >
            {isCompareMode ? <LayoutTemplate className="w-4 h-4" /> : <SplitSquareHorizontal className="w-4 h-4" />}
            <span>Compare</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {!isCompareMode ? (
            <motion.div
              key={activeConceptId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 w-full h-full overflow-y-auto"
            >
              <ActiveComponent />
            </motion.div>
          ) : (
            <motion.div
              key="compare"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col md:flex-row h-full overflow-hidden"
            >
              {/* Left Side */}
              <div className="flex-1 flex flex-col border-r border-border h-full relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <select 
                    value={compareConceptA}
                    onChange={(e) => setCompareConceptA(Number(e.target.value))}
                    className="bg-card/80 backdrop-blur-md border border-border text-sm px-3 py-1.5 rounded-full outline-none text-center shadow-lg"
                  >
                    {CONCEPTS.map(c => (
                      <option key={c.id} value={c.id}>{c.id}. {c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                  <div className="w-[100vw] md:w-[50vw] origin-top-left">
                    <ComponentA />
                  </div>
                </div>
              </div>
              
              {/* Right Side */}
              <div className="flex-1 flex flex-col h-full relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <select 
                    value={compareConceptB}
                    onChange={(e) => setCompareConceptB(Number(e.target.value))}
                    className="bg-card/80 backdrop-blur-md border border-border text-sm px-3 py-1.5 rounded-full outline-none text-center shadow-lg"
                  >
                    {CONCEPTS.map(c => (
                      <option key={c.id} value={c.id}>{c.id}. {c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                  <div className="w-[100vw] md:w-[50vw] origin-top-left">
                    <ComponentB />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
