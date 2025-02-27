import React, { useState } from "react";
import { motion } from "framer-motion";

interface ClueImageProps {
    onLoad: () => void;
}
const ClueImage: React.FC<ClueImageProps> = React.memo(({ onLoad }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            {!loaded && (
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                    }}
                />
            )}

            <motion.img
                src="/clues.png"
                onLoad={() => {
                    setLoaded(true);
                    onLoad();
                }}
                alt="Clue"
                style={{ display: loaded ? "" : "none" }}
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1, rotate: [0, 20, -20, 0] } : {}}
                transition={{ opacity: { duration: 0.3 }, repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
        </div>
    );
});

export default ClueImage;
