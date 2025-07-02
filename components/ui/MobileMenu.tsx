"use client"

import { motion, AnimatePresence } from "framer-motion"
import { User, Coffee, MessageSquare, Sparkles, Phone, X } from "lucide-react"
import GlassCard from "@/components/ui/GlassCard"

const menuItems = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    href: "#hero",
    description: "Tentang Teh Jogja",
  },
  {
    id: "varian-rasa",
    label: "Varian Rasa",
    icon: Coffee,
    href: "#products",
    description: "Koleksi rasa teh kami",
  },
  {
    id: "testimoni",
    label: "Testimoni",
    icon: MessageSquare,
    href: "#testimonials",
    description: "Kata pelanggan",
  },
  {
    id: "informasi",
    label: "Informasi Menarik",
    icon: Sparkles,
    href: "#information",
    description: "Update & promo",
  },
  {
    id: "hubungi-kami",
    label: "Hubungi Kami",
    icon: Phone,
    href: "#contact",
    description: "Kontak & lokasi",
  },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 z-50"
          >
            <GlassCard className="h-full rounded-none rounded-l-2xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400">Menu</h2>
                  <p className="text-sm text-gray-400">Navigasi cepat</p>
                </div>

                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-gray-400" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <nav className="space-y-3">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full group"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                        {/* Icon */}
                        <motion.div
                          className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20 group-hover:from-yellow-400/30 group-hover:to-amber-500/30 transition-all duration-300"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <IconComponent className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 text-left">
                          <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <motion.div
                          className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>
                  )
                })}

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20">
                    <p className="text-sm text-yellow-400 font-medium">Teh Jogja</p>
                    <p className="text-xs text-gray-400">Authentic Taste of Yogyakarta</p>
                  </div>
                </div>
              </nav>
            </GlassCard>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
