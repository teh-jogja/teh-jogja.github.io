"use client"

import { motion } from "framer-motion"
import { Instagram, Music, ShoppingBag, Phone, Mail } from "lucide-react"
import GlassCard from "@/components/ui/GlassCard"
import AnimatedButton from "@/components/ui/AnimatedButton"

export default function Information() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-amber-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Informasi Kontak</h2>
          <p className="text-xl text-gray-300">Hubungi kami dan temukan di berbagai platform</p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlassCard className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Fais Arma Tricaraka</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+62 823-2945-1964</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Armacaraka@gmail.com</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <GlassCard className="p-8 text-center h-full">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Hubungi kami langsung melalui WhatsApp untuk pemesanan dan informasi!
              </p>
              <AnimatedButton 
                onClick={() => window.open('https://wa.me/6282329451964', '_blank')}
              >
                Chat Sekarang
              </AnimatedButton>
            </GlassCard>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <GlassCard className="p-8 text-center h-full">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Instagram</h3>
              <p className="text-gray-300 mb-6">
                Follow @teh_jogja93 untuk update terbaru, promo menarik, dan konten seru!
              </p>
              <AnimatedButton 
                onClick={() => window.open('https://instagram.com/teh_jogja93', '_blank')}
              >
                Follow @teh_jogja93
              </AnimatedButton>
            </GlassCard>
          </motion.div>

          {/* TikTok */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <GlassCard className="p-8 text-center h-full">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">TikTok</h3>
              <p className="text-gray-300 mb-6">
                Follow @teh_jogja01 untuk video menarik tentang proses pembuatan dan review Teh Jogja!
              </p>
              <AnimatedButton 
                onClick={() => window.open('https://tiktok.com/@teh_jogja01', '_blank')}
              >
                Follow @teh_jogja01
              </AnimatedButton>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
