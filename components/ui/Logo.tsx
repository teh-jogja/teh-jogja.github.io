"use client"

import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import Image from "next/image"
export default function Logo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className="flex items-center space-x-3 group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Logo Icon */}
      <motion.div className="relative" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
        {/* <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300"> */}
        <Image src={"/tehJogjaBahan/tehJogjaBahan/logo/logoTehJogjaCircle.png"} alt="Teh Jogja Logo" width={64} height={64} className="w-10 h-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          {/* <Coffee className="w-7 h-7 text-black" /> */}
        {/* </div> */}

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
      </motion.div>

      {/* Logo Text */}
      <div className="hidden sm:block">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          TEH JOGJA
        </motion.h1>
        <p className="text-xs text-gray-400 -mt-1">Authentic Taste</p>
      </div>
    </motion.button>
  )
}
