import { useState } from "react";

export type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const DEFAULT_OPENING = "Hi there. I'm here to help you find the right path forward. What brings you here today?";

const DEFAULT_FALLBACKS = [
  "Take a breath. You've already taken the most important step. We're here to help you find what fits — with complete privacy and no pressure.",
  "Every situation is different, and we treat it that way. Tell me a little more and we'll find the right path forward together.",
];

export function useChatSimulation(
  starterReplies?: Record<string, string>,
  fallbackReplies?: string[],
  openingMessage?: string
) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content: openingMessage ?? DEFAULT_OPENING,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const fallbacks = fallbackReplies ?? DEFAULT_FALLBACKS;
    const specificReply = starterReplies?.[content];
    const replyContent =
      specificReply ?? fallbacks[Math.floor(Math.random() * fallbacks.length)];

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: replyContent,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1400 + Math.random() * 900);
  };

  return { messages, isTyping, sendMessage };
}
