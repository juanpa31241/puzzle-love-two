import React from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PuzzleQuestion } from "../types";
import { useStateContext } from "../context/StateContext";
import { themeConfig } from "../data";
import { appConfig } from "../config";
import { locales } from "../config/locales";

interface Props {
    activeQuestion: PuzzleQuestion | null;
    setAnswer: React.Dispatch<React.SetStateAction<string>>;
    answer: string;
    onSubmit: (answer: string) => void;
    onClose: () => void;
}

const PuzzleQuestionForm: React.FC<Props> = ({ onClose, activeQuestion, setAnswer, answer, onSubmit }) => {
    const { theme } = useStateContext();

    if (!activeQuestion) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(answer);
        setAnswer("");
    };

    const handleDateChange = (date: Date) => {
        const correctedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000); // Corregir el desfase de la zona horaria
        const formattedDate = `${correctedDate.getDate().toString().padStart(2, "0")}-${(correctedDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`;
        setAnswer(formattedDate);
    };

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="overlay-sub"
            style={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                padding: "5px",
                maxWidth: "500px",
                margin: "0 auto",
            }}
        >
            <p style={{ fontSize: "18px", fontWeight: "600", textAlign: "center", marginBottom: "16px", maxWidth: "100%" }}>
                {activeQuestion.question}
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                {activeQuestion.type === "text" && (
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Escribe tu respuesta"
                        style={{
                            width: "100%",
                            padding: "12px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            fontSize: "16px",
                            outline: "none",
                        }}
                    />
                )}

                {activeQuestion.type === "date" && (
                    <Calendar
                        onChange={(date) => handleDateChange(date as Date)}
                        value={answer ? new Date(2000, parseInt(answer.split("-")[1]) - 1, parseInt(answer.split("-")[0])) : null}
                        maxDetail="month"
                        minDetail="month"
                        locale="es-ES"
                        tileClassName={({ date }) => {
                            const selectedDate = answer
                                ? new Date(2000, parseInt(answer.split("-")[1]) - 1, parseInt(answer.split("-")[0]))
                                : null;
                            return selectedDate && date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth()
                                ? "react-calendar__tile--active"
                                : "";
                        }}
                    />

                )}

                <motion.button
                    whileTap={{
                        scale: 0.9, transition: { duration: 0 },
                        boxShadow: `0px 2px 6px ${themeConfig[appConfig.theme].boxShadow}`
                    }}
                    style={{
                        background: themeConfig[theme].gradient,
                    }}
                    whileHover={{
                        scale: 1.12,
                        boxShadow: `0px 6px 15px ${themeConfig[appConfig.theme].boxShadow}`
                    }}
                    className="back-button"
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 120,
                    }}
                >
                    {locales[appConfig.language].send_button}

                </motion.button>
                <motion.button
                    onClick={onClose}
                    className="back-button"
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 120,
                    }}
                    whileHover={{
                        scale: 1.12,
                        boxShadow: "0px 6px 15px rgba(255, 152, 0, 0.4)",
                    }}
                    whileTap={{
                        scale: 0.95,
                        boxShadow: "0px 2px 6px rgba(255, 152, 0, 0.3)",
                    }}
                >
                    {locales[appConfig.language].close_button}
                </motion.button>
            </form>
        </motion.div>
    );
};

export default PuzzleQuestionForm;
