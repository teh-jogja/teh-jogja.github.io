"use client"

import { motion } from "framer-motion"
import { User, Coffee, MessageSquare, Sparkles, Phone } from "lucide-react"

const menuItems = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    href: "#hero",
  },
  {
    id: "varian-rasa",
    label: "Varian Rasa",
    icon: Coffee,
    href: "#products",
  },
  {
    id: "testimoni",
    label: "Testimoni",
    icon: MessageSquare,
    href: "#testimonials",
  },
  {
    id: "informasi",
    label: "Informasi Menarik",
    icon: Sparkles,
    href: "#information",
  },
  {
    id: "hubungi-kami",
    label: "Hubungi Kami",
    icon: Phone,
    href: "#contact",
  },
]

export default function NavigationMenu() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="flex items-center space-x-1">
      {menuItems.map((item, index) => {
        const IconComponent = item.icon

        return (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.href)}
            className="relative group px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative flex items-center space-x-2">
              <motion.div
                className="p-1.5 rounded-lg bg-gradient-to-br from-yellow-400/20 to-amber-500/20 group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <IconComponent className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
              </motion.div>

              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
            </div>

            {/* Hover indicator */}
            <motion.div
              className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
              initial={false}
            />
          </motion.button>
        )
      })}
    </nav>
  )
}
