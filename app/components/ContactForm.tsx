"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-3xl p-6 md:p-10 h-fit"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <h2 className="font-heading text-4xl md:text-5xl text-black ls-title mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black/60 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-14 rounded-full border border-black/10 bg-transparent px-6 text-black placeholder-black/40 outline-none focus:border-[#80461B] transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black/60 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-14 rounded-full border border-black/10 bg-transparent px-6 text-black placeholder-black/40 outline-none focus:border-[#80461B] transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-black/60 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-14 rounded-full border border-black/10 bg-transparent px-6 text-black placeholder-black/40 outline-none focus:border-[#80461B] transition-colors"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black/60 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full rounded-3xl border border-black/10 bg-transparent px-6 py-4 text-black placeholder-black/40 outline-none focus:border-[#80461B] transition-colors resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="w-full h-14 rounded-full bg-[#80461B] text-white text-lg font-medium transition-colors hover:bg-[#492201] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? "Sending..."
            : submitted
            ? "Message Sent!"
            : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}
