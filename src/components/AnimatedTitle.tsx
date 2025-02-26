import { motion } from "framer-motion";
import { locales } from "../config/locales";
import { appConfig } from "../config";

const title = locales[appConfig.language].puzzle_title
const AnimatedTitle = () => {
    return (
        <div className="main-title-puzzle">
            <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5, // Duración fija de 1 segundo
                    ease: "easeOut"
                }}
                style={{ display: "inline-block" }}
            >
                {title}
            </motion.span>
        </div>
    );
};

export default AnimatedTitle;
