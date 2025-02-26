import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { themeConfig } from '../data';

interface AlertProps {
    message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
    const [visible, setVisible] = useState(false);
    const { theme } = useStateContext();

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key={message}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}
                    className="alert"
                    style={{
                        background: themeConfig[theme].gradient,
                        borderRadius: '1rem',
                        padding: '1rem',
                        color: '#fff',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    <span>{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Alert;
