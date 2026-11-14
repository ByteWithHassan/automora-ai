"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, RotateCcw, Loader2, Sparkles, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  isError?: boolean;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg_welcome",
      sender: "bot",
      text: "Hi! Welcome to Automora Flow. What would you like to automate today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const webhookUrl =
    process.env.NEXT_PUBLIC_AUTOMORA_CHAT_WEBHOOK ||
    "https://n8n.afrazkhan.com/webhook/automora-chat";

  // Persist sessionId per browser tab so refresh keeps conversation context, while closing tab resets it
  useEffect(() => {
    let storedSession = sessionStorage.getItem("automora_flow_session");
    if (!storedSession) {
      storedSession = `flow_session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      sessionStorage.setItem("automora_flow_session", storedSession);
    }
    setSessionId(storedSession);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const sendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage.trim();
    if (!text || isTyping) return;

    const activeSessionId =
      sessionId ||
      sessionStorage.getItem("automora_flow_session") ||
      `flow_session_${Date.now()}`;

    const userMsgId = `user_${Date.now()}`;
    const newMsg: Message = {
      id: userMsgId,
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          sessionId: activeSessionId,
        }),
      });

      if (!res.ok) {
        throw new Error(`Webhook responded with status ${res.status}`);
      }

      const data = await res.json();

      const botMsg: Message = {
        id: `bot_${Date.now()}`,
        sender: "bot",
        text:
          data.reply ||
          data.output ||
          "I've processed your request. How else can Automora Flow assist your team?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isError: data.success === false || !!data.error,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot_err_${Date.now()}`,
          sender: "bot",
          text: "Connection interrupted. Please try sending your message again.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Widget Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-cyan-300/40 cursor-pointer"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-7 h-7 text-slate-950" />
        </motion.button>
      )}

      {/* Modern Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[90vw] sm:w-[380px] h-[520px] rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-slate-950 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Automora Flow AI</h3>
                  <p className="text-[10px] font-mono text-cyan-400">n8n Neural Assistant</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none shadow-md"
                        : msg.isError
                        ? "bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded-tl-none"
                        : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-[9px] font-mono opacity-60 block text-right mt-1.5">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                    <span className="text-[11px] font-mono">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about automations..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isTyping}
                maxLength={2000}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="p-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 font-bold hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}