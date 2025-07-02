"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
}

export default function AnimatedButton({ children, onClick, type = "button", className }: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(
        "relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500",
        "text-black font-bold rounded-lg overflow-hidden",
        "hover:from-yellow-300 hover:to-amber-400 transition-all duration-300",
        "shadow-lg hover:shadow-xl hover:shadow-yellow-400/25",
        className,
      )}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
