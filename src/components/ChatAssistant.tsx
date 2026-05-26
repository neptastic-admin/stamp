import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Sparkles, RefreshCw, PhoneCall } from "lucide-react";
import { Message } from "../types";
import { BUSINESS_INFO } from "../data";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! Welcome to Neptastic Mohar & Stamp service in Greater Noida West. Ask me about custom layouts, GST formats, stamp types, or our RS Plaza location near Ace Divino!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    const queryLower = userMsg.content.toLowerCase();
    let fallbackText = "Sure, I can help you with that. We specialize in high quality rubber stamps. For custom layouts, message our direct experts on WhatsApp at +91 9267900106.";

    if (queryLower.includes("price") || queryLower.includes("cost") || queryLower.includes("rate")) {
      fallbackText = "We’ll share the right quote after understanding your stamp type, size, and layout requirements. Message us on WhatsApp and we’ll help immediately.";
    } else if (queryLower.includes("where") || queryLower.includes("address") || queryLower.includes("location") || queryLower.includes("shop")) {
      fallbackText = "We are located at Mohar & Stamp Printing Service By Neptastic, RS Plaza, Block B-07, Near Ace Divino, Sector 1, Greater Noida West, Uttar Pradesh – 201318.";
    } else if (queryLower.includes("delivery") || queryLower.includes("fast") || queryLower.includes("time")) {
      fallbackText = "We offer same-day express 3-hour courier delivery across Greater Noida West, Bisrakh, Noida, and Crossing Republik upon layout confirmation.";
    } else if (queryLower.includes("gst")) {
      fallbackText = "GST stamp layouts usually include the legal firm name, GSTIN, address, and signatory line. Share your details and we’ll help format it properly.";
    } else if (queryLower.includes("seal") || queryLower.includes("company")) {
      fallbackText = "Company seals usually work best with the registered company name and signatory designation. Share the exact text and we’ll guide you.";
    }

    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Action Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-950 text-white p-4.5 rounded-full shadow-2xl hover:bg-slate-900 transition flex items-center gap-2 group border border-indigo-800 cursor-pointer animate-bounce"
        >
          <MessageSquare className="w-5 h-5 text-rose-500 group-hover:rotate-12 transition duration-300" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-semibold tracking-wider uppercase font-mono">
            Ask AI Assistant
          </span>
          <span className="absolute -top-1.5 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-600" />
          </span>
        </button>
      )}

      {/* Collapsible Chat Modal Body */}
      {isOpen && (
        <div className="w-80 sm:w-[360px] h-[480px] bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col justify-between">
          
          {/* Header block with two main branding colors */}
          <div className="bg-gradient-to-r from-indigo-950 to-slate-900 text-white p-4 flex justify-between items-center border-b border-indigo-900">
            <div className="flex items-center gap-2.5">
              <div className="w-8.5 h-8.5 bg-rose-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm tracking-wide">Neptastic Stamp AI</h4>
                <span className="text-[10px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  ONLINE ASSISTANT
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition cursor-pointer p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat text message feeds */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, idx) => {
              const chatbot = m.role === "assistant";
              return (
                <div key={idx} className={`flex gap-2.5 ${chatbot ? "" : "flex-row-reverse"}`}>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${chatbot ? "bg-indigo-100 text-indigo-950" : "bg-rose-100 text-rose-700"}`}>
                    {chatbot ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  <div className="space-y-1 max-w-[75%]">
                    <div className={`p-3 rounded-2xl text-xs sm:text-sm shadow-sm leading-relaxed ${
                      chatbot
                        ? "bg-white text-slate-800 rounded-tl-none border border-slate-100"
                        : "bg-rose-600 text-white rounded-tr-none"
                    }`}>
                      {m.content}
                    </div>
                    <span className="text-[9px] text-slate-400 block px-1 text-right font-mono">
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-950 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-3 bg-white border border-slate-100 text-slate-400 text-xs rounded-2xl rounded-tl-none italic flex items-center gap-2">
                  <span>AI Agent formulation in progress...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick options helpers */}
          <div className="px-3.5 py-1.5 bg-slate-100 border-t border-b border-slate-200/50 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button
              onClick={() => setInputValue("Show stamp types")}
              className="text-[10px] bg-white hover:bg-slate-50 text-indigo-950 border rounded-full px-2.5 py-1 font-semibold font-mono"
            >
              Stamp Types
            </button>
            <button
              onClick={() => setInputValue("Show shop address")}
              className="text-[10px] bg-white hover:bg-slate-50 text-indigo-950 border rounded-full px-2.5 py-1 font-semibold font-mono"
            >
              📍 Location
            </button>
            <button
              onClick={() => setInputValue("What is standard GST stamp layout?")}
              className="text-[10px] bg-white hover:bg-slate-50 text-indigo-950 border rounded-full px-2.5 py-1 font-semibold font-mono"
            >
              📁 GST Layouts
            </button>
          </div>

          {/* Text editor input forms */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white flex gap-2 border-t">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a custom question..."
              className="flex-1 bg-slate-50 hover:bg-slate-100/50 border border-slate-200 text-slate-800 text-xs rounded-xl py-2 px-3 outline-none focus:border-indigo-600 focus:bg-white"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-indigo-950 hover:bg-slate-900 border border-slate-800 text-white p-2 rounded-xl disabled:opacity-50 transition shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
