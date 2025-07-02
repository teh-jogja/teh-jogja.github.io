"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import GlassCard from "@/components/ui/GlassCard"

const logos = [
  {
    id: 1,
    name: "UPT & MKU",
    image: "/tehJogjaBahan/tehJogjaBahan/logo/logoUptMkuCircle.png",
    description: "Unit Pelaksana Teknis & Mata Kuliah Umum",
  },
  {
    id: 2,
    name: "Teh Jogja",
    image: "/tehJogjaBahan/tehJogjaBahan/logo/logoTehJogjaCircle.png",
    description: "Brand Teh Jogja Official",
  },
  {
    id: 3,
    name: "UMK",
    image: "/tehJogjaBahan/tehJogjaBahan/logo/umkLogo.png",
    description: "Universitas Muria Kudus",
  },
]

export default function LogoSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Partner & Sponsor</h2>
          <p className="text-lg text-gray-300">Didukung oleh institusi terpercaya</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="relative"
            >
              <GlassCard className="p-8 text-center h-full group">
                {/* Logo Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl bg-white/5 p-6 group-hover:bg-white/10 transition-all duration-300">
                  <Image
                    src={logo.image || "/placeholder.svg"}
                    alt={logo.name}
                    width={200}
                    height={120}
                    className="w-full h-24 object-contain  opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:to-amber-500/10 rounded-xl transition-all duration-300" />
                </div>

                {/* Logo Info */}
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {logo.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {logo.description}
                  </p>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-yellow-400/20 transition-all duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
