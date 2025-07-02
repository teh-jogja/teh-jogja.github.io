"use client"

import { motion } from "framer-motion"
import GlassCard from "@/components/ui/GlassCard"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    rating: 5,
    comment: "Teh Jogja ini benar-benar autentik! Rasanya mengingatkan saya pada masa kecil di Yogyakarta.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    rating: 5,
    comment: "Kualitas teh yang luar biasa dengan harga yang sangat terjangkau. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Maya Sari",
    rating: 5,
    comment: "Varian rasa yang beragam dan semuanya enak. Favorit saya yang Lychee Tea!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Testimoni Pelanggan</h2>
          <p className="text-xl text-gray-300">Apa kata mereka tentang Teh Jogja</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-yellow-400">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
