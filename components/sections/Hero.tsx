"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const PHONE_NUMBER = "(801) 395-2822";
const PHONE_HREF = "tel:+18013952822";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 2;
    }
  }, []);

  return (
    <section className="relative bg-navy-900 overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-navy-900/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-500 text-sm font-medium rounded-full mb-6 backdrop-blur-sm">
              Trusted since 1993
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
          >
            Cleaner ducts.
            <br />
            <span className="text-yellow-500">Cleaner air.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-8 max-w-lg mx-auto"
          >
            Professional duct cleaning for Utah homes and businesses. We show
            you what&apos;s inside your ducts before you decide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 justify-center"
          >
            <Button href="/contact-us" className="px-6 py-3">
              Get free inspection
            </Button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Call {PHONE_NUMBER}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-yellow-500 text-lg">★</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">4.9 Rating</p>
                <p className="text-white/60 text-sm">309 Google reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-yellow-500 text-lg">✓</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">BBB Accredited</p>
                <p className="text-white/60 text-sm">A+ Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
