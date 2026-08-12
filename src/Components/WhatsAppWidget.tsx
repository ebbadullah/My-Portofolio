"use client";

import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSent, setIsSent] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.message.trim()) return;

        const text = `*New Portfolio Lead — Ebad Ullah*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email || "N/A"}\n💬 *Message:* ${formData.message}`;
        const phoneNumber = "923160298672";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, "_blank");

        setIsSent(true);
        setTimeout(() => {
            setIsSent(false);
            setIsOpen(false);
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <div
            className={`fixed right-4 md:right-6 z-50 transition-all duration-300 ${
                scrollProgress > 20 ? "bottom-20 md:bottom-22" : "bottom-6"
            }`}
        >
            {/* POPUP FORM — matches screenshot design */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[260px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700/60 z-50">

                    {/* BLUE GRADIENT HEADER */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm">Let's Connect on WhatsApp</span>
                            <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-300 animate-pulse flex-shrink-0"></span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/70 hover:text-white transition-colors ml-2 flex-shrink-0"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* DARK BODY */}
                    <div className="bg-[#0d1117] dark:bg-[#0d1117] px-4 py-4">
                        {isSent ? (
                            <div className="py-6 text-center space-y-2">
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 mx-auto flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-sm font-semibold text-white">Opening WhatsApp...</p>
                                <p className="text-xs text-gray-400">Your message is on its way!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-[#161b22] text-white text-xs placeholder-gray-400 px-3 py-2.5 rounded-lg border border-gray-700/50 focus:outline-none focus:border-blue-500 transition-colors"
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full bg-[#161b22] text-white text-xs placeholder-gray-400 px-3 py-2.5 rounded-lg border border-gray-700/50 focus:outline-none focus:border-blue-500 transition-colors"
                                />

                                {/* Message Input */}
                                <textarea
                                    name="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Message"
                                    className="w-full bg-[#161b22] text-white text-xs placeholder-gray-400 px-3 py-2.5 rounded-lg border border-gray-700/50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-2.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-1px] hover:shadow-xl active:scale-95 cursor-pointer"
                                >
                                    <span>Let's Connect</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* FLOATING TOGGLE BUTTON — theme blue, no bounce */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative z-50 ${
                    isOpen
                        ? "bg-[#0d1117] border border-gray-700 hover:bg-red-600 hover:border-red-600"
                        : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30"
                }`}
                aria-label="WhatsApp quick chat"
            >
                <div className="relative w-5 h-5 flex items-center justify-center">
                    {/* WhatsApp Icon */}
                    <svg
                        className={`w-5 h-5 fill-current absolute inset-0 transition-all duration-400 ${
                            isOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
                        }`}
                        viewBox="0 0 24 24"
                    >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>

                    {/* Close X Icon */}
                    <svg
                        className={`w-5 h-5 absolute inset-0 text-white stroke-current transition-all duration-400 ${
                            isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </button>
        </div>
    );
}
