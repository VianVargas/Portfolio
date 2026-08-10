"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Check,
  Copy,
  Terminal,
} from "lucide-react";
import type { ThemeMode } from "@/types";
import { PERSONAL_INFO } from "@/config/site";

interface Props {
  themeMode?: ThemeMode;
}

export default function Contact({ themeMode = "dark" }: Props) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);
  const isLight = themeMode === "light";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setSenderName("");
      setSenderEmail("");
      setMessage("");
    }, 4000);
  };

  const web3formAction = "https://api.web3forms.com/submit";

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono ${
              isLight
                ? "bg-blue-50 border-blue-200 text-blue-800"
                : "bg-white/5 border-white/10 text-slate-400"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span>contact</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Get in Touch
          </h2>

          <p
            className={`text-base max-w-2xl font-sans leading-relaxed ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}
          >
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Ping Stats */}
          <div className="lg:col-span-5 space-y-4">
            {/* Link Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className={`px-4 py-3 rounded-xl border font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md group ${
                  isLight
                    ? "bg-white border-blue-200 text-slate-800 hover:bg-blue-50"
                    : "bg-white/5 border-white/15 text-slate-200 hover:bg-white/10"
                }`}
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-blue-600 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 ml-1" />
                )}
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-3 rounded-xl border font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md ${
                  isLight
                    ? "bg-white border-blue-200 text-slate-800 hover:bg-blue-50"
                    : "bg-white/5 border-white/15 text-slate-200 hover:bg-white/10"
                }`}
              >
                <Github className="w-4 h-4 text-blue-600 dark:text-white" />
                <span className="font-mono">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-3 rounded-xl border font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md ${
                  isLight
                    ? "bg-white border-blue-200 text-slate-800 hover:bg-blue-50"
                    : "bg-white/5 border-white/15 text-slate-200 hover:bg-white/10"
                }`}
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span className="font-mono">LinkedIn</span>
              </a>
            </div>

            {/* Server Latency Terminal Card */}
            <div
              className={`liquid-glass rounded-2xl p-5 border space-y-3 font-mono text-xs ${
                isLight
                  ? "bg-white/90 border-blue-200 text-slate-800"
                  : "bg-black/60 border-white/10 text-slate-300"
              }`}
            >
              <div
                className={`flex items-center justify-between border-b pb-2 ${
                  isLight
                    ? "border-blue-100 text-slate-600"
                    : "border-white/10 text-slate-400"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  ping -c 3 vian.dev
                </span>
                <span className="text-blue-500 font-bold">ONLINE</span>
              </div>
              <div
                className={`space-y-1 text-[11px] ${isLight ? "text-slate-600" : "text-slate-400"}`}
              >
                <p>
                  64 bytes from vian.dev (104.21.80.12): icmp_seq=1 ttl=58
                  time=12.1 ms
                </p>
                <p>
                  64 bytes from vian.dev (104.21.80.12): icmp_seq=2 ttl=58
                  time=11.8 ms
                </p>
                <p>
                  64 bytes from vian.dev (104.21.80.12): icmp_seq=3 ttl=58
                  time=12.4 ms
                </p>
                <p className="text-blue-600 dark:text-blue-300 pt-1">
                  --- vian.dev ping statistics --- 0% packet loss, avg rtt =
                  12.1ms
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div
              className={`liquid-glass rounded-2xl p-6 border shadow-2xl space-y-5 ${
                isLight ? "bg-white/90 border-blue-200" : "border-white/10"
              }`}
            >
              <div
                className={`border-b pb-3 flex items-center justify-between font-mono text-xs ${
                  isLight
                    ? "border-blue-100 text-slate-600"
                    : "border-white/10 text-slate-400"
                }`}
              >
                <span>cat &gt; /dev/messages/vian.msg</span>
                <span className="text-blue-500 font-semibold">
                  SMTP Message Handler
                </span>
              </div>

              <form
                action={web3formAction}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 font-mono text-xs"
              >
                {/* Web3form hidden fields placeholder */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3FORM_ACCESS_KEY"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className={
                        isLight
                          ? "text-slate-700 font-semibold"
                          : "text-slate-400 font-semibold"
                      }
                    >
                      Your Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full border rounded-xl px-3.5 py-2.5 outline-none transition-colors ${
                        isLight
                          ? "bg-blue-50/50 border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                          : "bg-black/50 border-white/10 text-white placeholder-slate-500 focus:border-blue-400"
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className={
                        isLight
                          ? "text-slate-700 font-semibold"
                          : "text-slate-400 font-semibold"
                      }
                    >
                      Your Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="s.jenkins@company.com"
                      className={`w-full border rounded-xl px-3.5 py-2.5 outline-none transition-colors ${
                        isLight
                          ? "bg-blue-50/50 border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                          : "bg-black/50 border-white/10 text-white placeholder-slate-500 focus:border-blue-400"
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className={
                      isLight
                        ? "text-slate-700 font-semibold"
                        : "text-slate-400 font-semibold"
                    }
                  >
                    Message Payload:
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Vian, I reviewed your portfolio and would love to discuss a Software Engineering role..."
                    className={`w-full border rounded-xl p-3.5 outline-none transition-colors resize-none font-sans text-sm ${
                      isLight
                        ? "bg-blue-50/50 border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                        : "bg-black/50 border-white/10 text-white placeholder-slate-500 focus:border-blue-400"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer font-sans bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  {sentSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Message Dispatched to Vian!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
