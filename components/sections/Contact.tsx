"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Mail, MessageCircle } from "lucide-react"
import GlassCard from "@/components/ui/GlassCard"
import AnimatedButton from "@/components/ui/AnimatedButton"

export default function Contact() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/6282329451964?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      setMessage("") // Clear the message after sending
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-300">Ada pertanyaan? Jangan ragu untuk menghubungi kami</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <GlassCard className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">Telepon</h3>
                  <p className="text-gray-300">+62 823-2945-1964</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">Email</h3>
                  <p className="text-gray-300">tehjogja01@gmail.com</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">WhatsApp</h3>
                  <p className="text-gray-300">+62 823-2945-1964</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Kirim Pesan WhatsApp</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="message" className="block text-yellow-400 font-semibold mb-2">
                    Tulis Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Ketik pesan Anda di sini..."
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none text-white backdrop-blur-sm resize-none"
                    required
                  />
                </div>

                <AnimatedButton type="submit" className="w-full">
                  Kirim ke WhatsApp
                </AnimatedButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
