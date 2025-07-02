"use client"

import { motion } from "framer-motion"
import { Instagram, Music, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-amber-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">TEH JOGJA</h3>
            <p className="text-gray-300">
              Authentic taste of Yogyakarta, bringing traditional flavors to modern times.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-yellow-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-yellow-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-yellow-400 mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>+62 823-2945-1964</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>Armacaraka@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© 2025 by Mahasiswa KWU UMK, All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-1">Teh Jogja - Authentic Taste of Yogyakarta</p>
          </div>

          {/* <div className="flex space-x-4">
            <motion.a
              href="https://instagram.com/teh_jogja93"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              <Instagram className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://tiktok.com/@teh_jogja01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="bg-black border-2 border-white p-3 rounded-full hover:shadow-lg hover:shadow-white/25 transition-all"
            >
              <Music className="w-5 h-5 text-white" />
            </motion.a>
          </div> */}
        </motion.div>
      </div>
    </footer>
  )
}
