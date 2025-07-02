"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import GlassCard from "@/components/ui/GlassCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Original Tea",
    price: "Rp 4.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/originalTea.png",
    description: "Teh klasik dengan cita rasa tradisional",
    isNew: false,
    category: "Best Seller",
  },
  {
    id: 2,
    name: "Lemon Tea",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/whatsappUnknown/lemonTea.jpeg",
    description: "Teh lemon yang segar dan asam manis",
    isNew: true,
    category: "Best Seller",
  },
  {
    id: 3,
    name: "Cappuccino Milk",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/cappucinoMilkTea.png",
    description: "Perpaduan cappuccino dan milk tea",
    isNew: true,
    category: "Best Seller",
  },
  {
    id: 4,
    name: "Chocolate",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/chocolateTea.jpg",
    description: "Teh cokelat yang kaya rasa",
    isNew: false,
    category: "Best Seller",
  },
  {
    id: 5,
    name: "Hot Tea",
    price: "Rp 4.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/hotTea.jpg",
    description: "Teh hangat yang menyegarkan",
    isNew: false,
    category: "Tea",
  },
  {
    id: 6,
    name: "Lychee Tea",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/lycheeTea.jpg",
    description: "Teh leci dengan aroma buah yang harum",
    isNew: false,
    category: "Tea",
  },
  {
    id: 7,
    name: "Lychee Squash",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/lycheeSquashTea.jpg",
    description: "Teh squash leci dengan sensasi bubbly",
    isNew: false,
    category: "Squash",
  },
  {
    id: 8,
    name: "Lemon Squash",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/lemonSquashTea.png",
    description: "Teh squash lemon yang menyegarkan",
    isNew: false,
    category: "Squash",
  },
  {
    id: 9,
    name: "Yakult Squash",
    price: "Rp 10.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/yakultSquashTea.jpg",
    description: "Kombinasi unik yakult dan squash",
    isNew: true,
    category: "Squash",
  },
  {
    id: 10,
    name: "Milk Tea",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/milkTea.jpg",
    description: "Teh susu creamy yang lembut",
    isNew: false,
    category: "Milk",
  },
  {
    id: 11,
    name: "Mango Milk",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/mangoMilkTea.jpg",
    description: "Varian spesial mango milk",
    isNew: true,
    category: "Milk",
  },
  {
    id: 12,
    name: "Taro Milk",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/taroMilkTea.jpg",
    description: "Milk tea taro dengan rasa yang unik",
    isNew: false,
    category: "Milk",
  },
  {
    id: 13,
    name: "Strawberry Milk",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/strawberryMilkTea.png",
    description: "Milk tea dengan rasa strawberry segar",
    isNew: true,
    category: "Milk",
  },
  {
    id: 14,
    name: "Red Velvet Milk",
    price: "Rp 7.000",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/whatsappUnknown/redVelvetTea.jpeg",
    description: "Red velvet dengan rasa yang istimewa",
    isNew: true,
    category: "Milk",
  },
  // {
  //   id: 15,
  //   name: "Mango Milk Tea",
  //   price: "Rp 7.000",
  //   image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/mangoMilkTea.jpg",
  //   description: "Milk tea mangga yang tropical",
  //   isNew: false,
  //   category: "Premium",
  // },
  {
    id: 16,
    name: "Coming Soon",
    price: "Coming Soon",
    image: "/tehJogjaBahan/tehJogjaBahan/varianRasa/varianRasa/whatsappUnknown/comingSoon.jpeg",
    description: "Varian rasa baru segera hadir",
    isNew: true,
    category: "Soon",
  },
]

export default function ProductVariants() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

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
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Varian Rasa</h2>
          <p className="text-xl text-gray-300">Explore our delicious tea variants</p>
        </motion.div>

        {/* Desktop Elegant Grid Layout */}
        <div className="hidden lg:block">
          {/* Featured Products Row - Larger Cards */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -15,
                  rotateY: 8,
                  scale: 1.05,
                }}
                className="relative"
              >
                <GlassCard className="p-8 h-full relative overflow-hidden group">
                  {product.isNew && (
                    <div className="absolute top-6 right-6 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                        {product.price === "Coming Soon" ? "Coming Soon" : "New"}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-black/50 backdrop-blur-sm text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400/30">
                      {product.category}
                    </span>
                  </div>

                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4 text-lg">{product.description}</p>
                  <p className="text-3xl font-bold text-white">{product.price}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Regular Products Grid - 4 columns */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {products.slice(3, 11).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.05 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  scale: 1.03,
                }}
                className="relative"
              >
                <GlassCard className="p-6 h-full relative overflow-hidden group">
                  {product.isNew && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        {product.price === "Coming Soon" ? "Soon" : "New"}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/40 backdrop-blur-sm text-yellow-400 px-2 py-1 rounded-full text-xs font-medium border border-yellow-400/20">
                      {product.category}
                    </span>
                  </div>

                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-yellow-400 mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{product.description}</p>
                  <p className="text-xl font-bold text-white">{product.price}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Premium Products Row - Larger Cards */}
          <div className="grid grid-cols-4 gap-8">
            {products.slice(11, 15).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 11) * 0.1 }}
                whileHover={{
                  y: -12,
                  rotateY: 6,
                  scale: 1.04,
                }}
                className="relative"
              >
                <GlassCard className="p-7 h-full relative overflow-hidden group border-yellow-400/20">
                  {product.isNew && (
                    <div className="absolute top-5 right-5 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                        {product.price === "Coming Soon" ? "Coming Soon" : "New"}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-5 left-5 z-10">
                    <span className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 backdrop-blur-sm text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-400/40">
                      {product.category}
                    </span>
                  </div>

                  <div className="relative mb-5 overflow-hidden rounded-xl">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-yellow-400 mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-white">{product.price}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 9) * 0.05 }}
                whileHover={{
                  y: -8,
                  rotateY: 4,
                  scale: 1.02,
                }}
                className="relative"
              >
                <GlassCard className="p-5 h-full relative overflow-hidden group">
                  {product.isNew && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                        {product.price === "Coming Soon" ? "Soon" : "New"}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-black/40 backdrop-blur-sm text-yellow-400 px-2 py-1 rounded-full text-xs">
                      {product.category}
                    </span>
                  </div>

                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-yellow-400 mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{product.description}</p>
                  <p className="text-lg font-bold text-white">{product.price}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <GlassCard className="p-6 relative">
                    {product.isNew && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                          {product.price === "Coming Soon" ? "Coming Soon" : "New"}
                        </span>
                      </div>
                    )}

                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />

                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-white">{product.price}</p>
                  </GlassCard>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-400/20 backdrop-blur-sm rounded-full p-2 hover:bg-yellow-400/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400/20 backdrop-blur-sm rounded-full p-2 hover:bg-yellow-400/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-yellow-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-yellow-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
