"use client"

import { motion } from "framer-motion"
import GlassCard from "@/components/ui/GlassCard"

export default function Maps() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-amber-900/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Lokasi Kami</h2>
          <p className="text-xl text-gray-300">Kunjungi toko Teh Jogja di Kudus</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <GlassCard className="p-4 overflow-hidden">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.25631367239!2d110.9080833!3d-6.7385556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDQnMTguOCJTIDExMMKwNTQnMjkuMSJF!5e0!3m2!1sid!2sid!4v1751398445582!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Teh Jogja Store</h3>
              <p className="text-gray-300">7W65+H6G Kandangmas, Kabupaten Kudus, Jawa Tengah</p>
              <p className="text-gray-300">Buka setiap hari: 08:00 - 22:00 WIB</p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
