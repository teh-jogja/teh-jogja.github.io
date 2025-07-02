"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import GlassCard from "@/components/ui/GlassCard"
import AnimatedButton from "@/components/ui/AnimatedButton"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900/20" />

      {/* Parallax Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, #fbbf24 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 z-10">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen pt-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{
              rotateY: 15,
              rotateX: 5,
              scale: 1.05,
            }}
            className="relative"
          >
            <GlassCard className="p-8">
              <Image
                src="/tehJogjaBahan/hero.jpeg"
                alt="Teh Jogja Product"
                width={400}
                height={400}
                className="w-auto h-auto rounded-lg object-fill"
                priority
              />
            </GlassCard>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <GlassCard className="p-8">
              <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">TEH JOGJA</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Premium Tea Experience</h2>
              <p className="text-lg text-gray-300 mb-6">
                Discover the authentic taste of Yogyakarta with our premium tea collection. Made with traditional
                recipes and the finest ingredients.
              </p>
              <AnimatedButton 
                onClick={() => window.open('https://wa.me/6282329451964?text=Halo%20Fais,%20saya%20tertarik%20untuk%20memesan%20Teh%20Jogja.%20Bisa%20bantu%20saya?', '_blank')}
              >
                Order Now
              </AnimatedButton>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
