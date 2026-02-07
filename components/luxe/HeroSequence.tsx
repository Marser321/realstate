'use client';

import { CanvasSequenceAnimator } from './CanvasSequenceAnimator';
import { GoldenDust } from './GoldenDust';
import { motion } from 'framer-motion';

export function HeroSequence() {
    return (
        <div className="relative bg-black text-white">
            <GoldenDust />

            <CanvasSequenceAnimator
                frameCount={100}
                frameUrlPattern="/sequence/frame_{index}.webp"
                captions={[
                    { at: 0.1, text: "Bienvenido a la Excelencia", position: "center" },
                    { at: 0.35, text: "Vistas al Mar", position: "bottom-left" },
                    { at: 0.6, text: "Seguridad 24h", position: "bottom-right" },
                    { at: 0.85, text: "Diseño de Autor", position: "center" }
                ]}
                className="z-10 relative"
            >
                {/* Optional: Add static overlay content here if needed */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="absolute top-10 w-full flex justify-center z-50 pointer-events-none"
                >
                    {/* Navbar or Logo could go here if not already global */}
                </motion.div>
            </CanvasSequenceAnimator>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                {/* Additional persistent UI if needed */}
            </div>
        </div>
    );
}
