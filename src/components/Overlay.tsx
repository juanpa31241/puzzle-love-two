import React from "react";
import { motion, AnimatePresence } from "framer-motion";
interface OverlayProps {
    isVisible: boolean;
    children: React.ReactNode;
}
const Overlay = ({ isVisible, children }: OverlayProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div className="overlay-content" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}>
                        {children}
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Overlay;
