"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Calendar,
  Users,
  MapPin,
  Minus,
  Plus,
  Crown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ---------------------------------- */
/* Types                              */
/* ---------------------------------- */

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type Sender = "bot" | "user";

interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  time: string;
}

interface Destination {
  name: string;
  emoji: string;
}

interface TravelPackage {
  name: string;
  price: string;
  desc: string;
  tag?: string;
}

/* ---------------------------------- */
/* Static data                        */
/* ---------------------------------- */

const destinations: Destination[] = [
  { name: "Manali", emoji: "🏔️" },
  { name: "Kashmir", emoji: "🏞️" },
  { name: "Shimla", emoji: "❄️" },
  { name: "Goa", emoji: "🏖️" },
  { name: "Kerala", emoji: "🌴" },
  { name: "Udaipur", emoji: "🏰" },
  { name: "Jaipur", emoji: "👑" },
  { name: "Leh Ladakh", emoji: "🏍️" },
  { name: "Rishikesh", emoji: "🕉️" },
  { name: "Andaman", emoji: "🐠" },
  { name: "Darjeeling", emoji: "🚞" },
  { name: "Agra", emoji: "🕌" },
];

const packages: TravelPackage[] = [
  { name: "Silver", price: "₹4,999", desc: "Budget friendly package" },
  { name: "Gold", price: "₹6,999", desc: "Hotel + Transport" },
  {
    name: "Premium",
    price: "₹9,999",
    desc: "Hotel + Meals + Sightseeing",
    tag: "Most Popular",
  },
  { name: "Luxury", price: "₹11,999", desc: "Premium Hotels + Cab" },
  {
    name: "Royal",
    price: "₹14,999",
    desc: "Complete Luxury Experience",
    tag: "Best Value",
  },
];

const WHATSAPP_NUMBER = "918535042494";

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

/* ---------------------------------- */
/* Component                          */
/* ---------------------------------- */

export default function TravelWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(0);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [travelersCount, setTravelersCount] = useState(1);
  const [travelDate, setTravelDate] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(
    null
  );
  const [query, setQuery] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idCounter = useRef(0);
  const initialized = useRef(false);

  const genId = () => `msg-${idCounter.current++}`;

  const addUserMessage = useCallback((text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: genId(), sender: "user", text, time: formatTime() },
    ]);
  }, []);

  const botSay = useCallback(async (texts: string[]) => {
    for (const text of texts) {
      setIsTyping(true);
      await sleep(600 + Math.random() * 500);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: genId(), sender: "bot", text, time: formatTime() },
      ]);
      await sleep(150);
    }
  }, []);

  // Welcome sequence on first open
  useEffect(() => {
    if (open && !initialized.current) {
      initialized.current = true;
      botSay([
        "👋 Welcome to GoYatrik",
        "How can I assist you today? Please enter your good name.",
      ]);
    }
  }, [open, botSay]);

  // Listen for external open trigger
  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("openTravelChat", openChat);
    return () => window.removeEventListener("openTravelChat", openChat);
  }, []);

  // Auto scroll on every message / typing change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping, step]);

  // Autofocus input when relevant steps are active
  useEffect(() => {
    if (step === 0 || step === 5) {
      inputRef.current?.focus();
    }
  }, [step, open]);

  const handleEnter = async () => {
    const value = input.trim();
    if (!value) return;

    addUserMessage(value);
    setInput("");

    if (step === 0) {
      setName(value);
      await botSay([
        `Nice to meet you ${value} ✨`,
        "Where do you want to go for your next tour?",
      ]);
      setStep(1);
    } else if (step === 5) {
      setQuery(value);
      await botSay(["Perfect. Review your trip summary below."]);
      setStep(6);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEnter();
    }
  };

  const handleDestinationSelect = async (item: Destination) => {
    setDestination(item.name);
    addUserMessage(`${item.emoji} ${item.name}`);
    await botSay([
      `${item.name} is an amazing choice ${item.emoji}`,
      "How many travellers are joining?",
    ]);
    setStep(2);
  };

  const confirmTravelers = async () => {
    addUserMessage(
      `${travelersCount} ${travelersCount === 1 ? "traveller" : "travellers"}`
    );
    await botSay(["Please select your travel date."]);
    setStep(3);
  };

  const handleDateSelect = async (value: string) => {
    if (!value) return;
    setTravelDate(value);
    addUserMessage(
      new Date(value).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
    await botSay(["Choose your preferred package."]);
    setStep(4);
  };

  const handlePackageSelect = async (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    addUserMessage(`${pkg.name} — ${pkg.price}`);
    await botSay(["Any special query or requirements?"]);
    setStep(5);
  };

  const sendWhatsApp = async () => {
    const msg = `Hello GoYatrik

Name: ${name}
Destination: ${destination}
Travellers: ${travelersCount}
Date: ${travelDate}
Package: ${selectedPackage?.name} (${selectedPackage?.price})

Query:
${query}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    await botSay([
      "✅ Thank you for choosing GoYatrik.",
      "Our travel expert will contact you shortly.",
      "Have a wonderful journey ahead ✈️🌍",
    ]);
  };

  const todayISO = new Date().toISOString().split("T")[0];

  return (
    <>
      {/* Floating launcher button */}
      {!open && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-4 text-white shadow-[0_10px_40px_-10px_rgba(99,49,222,0.6)]"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-violet-500/30" />
          <MessageCircle size={22} />
          <div className="text-left">
            <p className="text-[11px] leading-none text-white/80">
              Welcome To GoYatrik
            </p>
            <p className="font-bold leading-tight">Plan Your Trip</p>
          </div>
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 z-[9999] flex h-[650px] w-[380px] max-w-[95vw] flex-col overflow-hidden rounded-[28px] border border-white/40 bg-white/80 text-slate-900 shadow-[0_20px_60px_-15px_rgba(30,20,80,0.45)] backdrop-blur-xl sm:h-[650px]"
          >
            {/* Header */}
            <div className="relative flex items-center justify-between bg-gradient-to-r from-indigo-950 via-indigo-900 to-violet-900 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-lg font-black text-indigo-950 shadow-inner">
                  G
                </div>
                <div>
                  <h3 className="flex items-center gap-1.5 font-bold leading-tight text-white">
                    GoYatrik Assistant
                    <Sparkles size={14} className="text-amber-300" />
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Online
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-slate-50 to-white p-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                      x: msg.sender === "user" ? 20 : -20,
                    }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                        msg.sender === "bot"
                          ? "rounded-tl-sm bg-white text-slate-800 shadow-md"
                          : "rounded-tr-sm bg-gradient-to-br from-indigo-600 to-violet-600 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="mt-1 px-1 text-[10px] text-slate-400">
                      {msg.time}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start"
                  >
                    <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-md">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-slate-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 1: destination cards */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 gap-2"
                >
                  {destinations.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleDestinationSelect(item)}
                      className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 text-left text-sm font-medium shadow-sm transition hover:border-indigo-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg"
                    >
                      <span className="text-lg">{item.emoji}</span>
                      {item.name}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Step 2: traveller stepper */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-white p-4 shadow-md"
                >
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-600">
                    <Users size={16} className="text-indigo-600" />
                    Number of travellers
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() =>
                        setTravelersCount((c) => Math.max(1, c - 1))
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                      aria-label="Decrease travellers"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-bold text-indigo-700">
                      {travelersCount}
                    </span>
                    <button
                      onClick={() => setTravelersCount((c) => c + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                      aria-label="Increase travellers"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={confirmTravelers}
                    className="mt-4 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-2.5 font-semibold text-white shadow-md transition hover:opacity-90"
                  >
                    Confirm
                  </button>
                </motion.div>
              )}

              {/* Step 3: date picker (past dates disabled) */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-white p-4 shadow-md"
                >
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-600">
                    <Calendar size={16} className="text-indigo-600" />
                    Select your travel date
                  </div>
                  <input
                    type="date"
                    min={todayISO}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-900 outline-none focus:border-indigo-400"
                    onChange={(e) => handleDateSelect(e.target.value)}
                  />
                </motion.div>
              )}

              {/* Step 4: package cards */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  {packages.map((pkg) => (
                    <motion.button
                      key={pkg.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePackageSelect(pkg)}
                      className={`relative w-full rounded-2xl border bg-white p-4 text-left shadow-sm transition hover:shadow-xl ${
                        pkg.name === "Royal"
                          ? "border-amber-300 ring-1 ring-amber-200"
                          : "border-slate-100 hover:border-indigo-300"
                      }`}
                    >
                      {pkg.tag && (
                        <span className="absolute -top-2 right-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                          {pkg.tag}
                        </span>
                      )}
                      <div className="flex items-center gap-2">
                        {pkg.name === "Royal" && (
                          <Crown size={16} className="text-amber-500" />
                        )}
                        <h4 className="font-bold text-slate-900">
                          {pkg.name}
                        </h4>
                      </div>
                      <p className="font-bold text-indigo-600">{pkg.price}</p>
                      <p className="text-sm text-slate-500">{pkg.desc}</p>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Step 6: summary */}
              {step === 6 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-white p-4 shadow-md"
                >
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    Trip Summary
                  </h3>

                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Name:</strong> {name}
                    </p>
                    <p className="flex items-center gap-1">
                      <MapPin size={14} className="text-indigo-500" />
                      <strong>Destination:</strong> {destination}
                    </p>
                    <p>
                      <strong>Travellers:</strong> {travelersCount}
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {travelDate &&
                        new Date(travelDate).toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                    </p>
                    <p>
                      <strong>Package:</strong> {selectedPackage?.name} (
                      {selectedPackage?.price})
                    </p>
                    <p>
                      <strong>Query:</strong> {query}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={sendWhatsApp}
                    className="mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 font-bold text-white shadow-md transition hover:shadow-lg"
                  >
                    Send To WhatsApp
                  </motion.button>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Text input bar (name / query steps only) */}
            {(step === 0 || step === 5) && (
              <div className="flex gap-2 border-t border-slate-100 bg-white/90 p-3 backdrop-blur">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    step === 0 ? "Enter your name" : "Write your query"
                  }
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-400 focus:bg-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnter}
                  disabled={!input.trim()}
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 text-white shadow-md transition disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}