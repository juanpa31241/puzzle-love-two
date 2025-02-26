import { appConfig } from "../config";

const theme = appConfig.theme as "tulips" | "sunflowers" | "roses";
const name = appConfig.name;
const flowerEmoji =
  {
    tulips: "🌷",
    sunflowers: "🌻",
    roses: "🌹",
    lilies: "",
  }[theme] || "🌸";

// Mensajes constantes en español
const MESSAGE_COMPLETED_ES = `🎉💖 ¡Felicidades mi ${name} hermosa! Has completado todos los puzzles. ¡Eres asombrosa! 😍🧩`;
const MESSAGE_START_ES = `📸💖 ¡Elige una imagen para comenzar mi amorcito! 🧩✨`;
const MESSAGE_PROGRESS_ES = (remaining: number) =>
  `¡Vamos, mi amorcito ${name}! Solo te quedan ${remaining} puzzle${
    remaining > 1 ? "s" : ""
  } por terminar. 🧩💕`;

// Mensajes constantes en inglés
const MESSAGE_COMPLETED_EN = `🎉💖 Congratulations, my beautiful ${name}! You have completed all the puzzles. You are amazing! 😍🧩`;
const MESSAGE_START_EN = `📸💖 Choose an image to start, my love! 🧩✨`;
const MESSAGE_PROGRESS_EN = (remaining: number) =>
  `Come on, my love ${name}! You only have ${remaining} puzzle${
    remaining > 1 ? "s" : ""
  } left to complete. 🧩💕`;

// Mensajes aleatorios en español
const RANDOM_MESSAGES_ES = [
  `¡Cada paso que das, ${name}, me hace amarte más! 💖`,
  `¡Lo lograste, mi amor! Siempre estaré aquí para celebrarlo contigo, ${name}. 🎉❤️`,
  `¡Eres increíble, ${name}, como un sueño del que nunca quiero despertar! 😍✨`,
  "¡Sigue brillando, mi corazón late más fuerte por cada logro tuyo! 💓🌟",
  `¡Tu esfuerzo me inspira, ${name}! Sigamos construyendo nuestro futuro juntos. 🏡💑`,
  `¡Eres imparable, ${name}, y yo soy tu fan número uno! 🏆🥰`,
  "¡Cada meta que alcanzas hace que nuestro amor brille aún más! 💕🌟",
  `¡Tú y tus logros son mi mayor orgullo, ${name}! 💖👏`,
  "¡Cada victoria tuya es un beso en mi corazón! 😘💞",
  "¡Nada me hace más feliz que verte triunfar, mi amor! 🎊💘",
  `¡Tú conquistas todo, ${name}, incluido mi corazón! 💘🏆`,
  "¡Sigue adelante, amor mío! Juntos llegaremos lejos. 🚀❤️",
  `¡Tu determinación me enamora cada día más, ${name}! 💪💖`,
  "¡Eres la razón por la que creo en los finales felices! 💖🌹",
  `¡${name}, tu sonrisa ilumina hasta mis días más oscuros! 😊💛`,
  "¡Verte luchar por tus sueños me llena de orgullo y amor! 💕✨",
  `¡Nadie brilla como tú, ${name}! Eres mi estrella favorita. 🌟❤️`,
  "¡Todo es más bonito cuando estoy a tu lado! 💑💖",
  `¡${name}, cada logro tuyo hace que mi corazón te ame aún más! 💘🥰`,
  "¡Sé que puedes lograrlo todo, amor mío! Estoy contigo en cada paso. ❤️💪",
];

// Mensajes aleatorios en inglés
const RANDOM_MESSAGES_EN = [
  `Every step you take, ${name}, makes me love you more! 💖`,
  `You did it, my love! I'll always be here to celebrate with you, ${name}. 🎉❤️`,
  `You are amazing, ${name}, like a dream I never want to wake up from! 😍✨`,
  "Keep shining, my heart beats stronger with each of your achievements! 💓🌟",
  `Your effort inspires me, ${name}! Let’s keep building our future together. 🏡💑`,
  `You are unstoppable, ${name}, and I am your number one fan! 🏆🥰`,
  "Every goal you achieve makes our love shine even more! 💕🌟",
  `You and your achievements are my greatest pride, ${name}! 💖👏`,
  "Every victory of yours is a kiss in my heart! 😘💞",
  "Nothing makes me happier than seeing you succeed, my love! 🎊💘",
  `You conquer everything, ${name}, including my heart! 💘🏆`,
  "Keep going, my love! Together we will go far. 🚀❤️",
  `Your determination makes me fall in love with you every day, ${name}! 💪💖`,
  "You are the reason I believe in happy endings! 💖🌹",
  `Your smile, ${name}, brightens even my darkest days! 😊💛`,
  "Seeing you fight for your dreams fills me with pride and love! 💕✨",
  `No one shines like you, ${name}! You are my favorite star. 🌟❤️`,
  "Everything is more beautiful when I’m by your side! 💑💖",
  `Every achievement of yours, ${name}, makes my heart love you even more! 💘🥰`,
  "I know you can achieve anything, my love! I'm with you every step of the way. ❤️💪",
];
const SAD_MESSAGES_ES = [
  "💔 Eso dolió... 💧",
  "😢 Me rompiste el corazón... 💔",
  "🥺 ¿Cómo no lo sabes? 💙",
  "💧 Ay... eso duele... 💔",
  "😞 Esperaba que lo supieras... 💧",
  "💙 Me entristece que no aciertes... 💔",
  "😭 Un pedacito de mi corazón se rompió... 💧",
  "💙 Eso me hizo llorar... 🥺",
  "💔 Mi corazón está triste... 💙",
  "💧 Intentemos de nuevo... aunque duele... 😭",
  "😔 Esa respuesta me hizo suspirar... 💔",
  "💔 Sentí un pinchazo en el corazón... 💧",
  "🥹 ¿Será que no lo recuerdas? 💙",
  "💧 Se me escapó una lágrima... 😞",
  "💙 Mi corazón se encogió un poquito... 💔",
  "😭 No era eso... pero no te rindas... 💧",
  "💔 Cada error deja una marquita... 🥺",
  "💧 Pensé que lo sabrías... 💙",
  "🥺 Duele más de lo que imaginaba... 💔",
  "💙 Aunque me duela, sigo esperando... 😢",
  "💧 Esa respuesta no era... pero aún confío... 💔",
];

// Mensajes de tristeza en inglés
const SAD_MESSAGES_EN = [
  "💔 That hurt... 💧",
  "😢 You broke my heart... 💔",
  "🥺 How could you not know? 💙",
  "💧 Ouch... that hurts... 💔",
  "😞 I was hoping you’d know... 💧",
  "💙 It makes me sad that you got it wrong... 💔",
  "😭 A little piece of my heart just broke... 💧",
  "💙 That made me cry... 🥺",
  "💔 My heart feels sad... 💙",
  "💧 Let’s try again... even though it hurts... 😭",
  "😔 That answer made me sigh... 💔",
  "💔 I felt a pinch in my heart... 💧",
  "🥹 Could it be that you don't remember? 💙",
  "💧 A tear slipped away... 😞",
  "💙 My heart shrank a little... 💔",
  "😭 That wasn't it... but don't give up... 💧",
  "💔 Every mistake leaves a little mark... 🥺",
  "💧 I thought you'd know... 💙",
  "🥺 It hurts more than I imagined... 💔",
  "💙 Even though it hurts, I'm still waiting... 😢",
  "💧 That answer wasn't right... but I still believe... 💔",
];
export const locales = {
  es: {
    success_clue: `¡Bien hecho, ${name}! 🎉 Acertaste la respuesta y ganaste una pista extra. ¡Sigue así, mi amor! ❤️${flowerEmoji}`,
    title: `❤️${flowerEmoji} Mi ${name}, cada puzzle es un pedacito de nuestra historia ❤️${flowerEmoji}`,
    message_completed: MESSAGE_COMPLETED_ES,
    message_start: MESSAGE_START_ES,
    message_progress: MESSAGE_PROGRESS_ES,
    random_messages: RANDOM_MESSAGES_ES,
    sad_messages: SAD_MESSAGES_ES,
    puzzle_title: `❤️${flowerEmoji}Arma el rompecabezas, mi amor❤️${flowerEmoji}`,

    finish_puzzle: "¡Amor, lo armaste!",
    back_button: "Volver",
    clue_button: "Pista",
    pieces: "Piezas",
    remaining: "restantes",
    clue_question: "¿Deseas una pista más, mi amor?",
    reset_modal_title: "¿Deseas reiniciar todos los puzzles?",
    reset_modal_text:
      "Esta acción eliminará tu progreso actual y no se puede deshacer.",
    reset_confirm: "Sí, reiniciar",
    reset_cancel: "No, continuar",
    close_button: "Cerrar",
    send_button: "Enviar",

    // Preguntas del juego en español
    questions: {
      anniversary: "¿Cuándo es nuestro aniversario?",
      birthday: "¿Cuándo es mi cumpleaños?",
      favorite_food: "¿Cuál es mi plato favorito?",
      favorite_color: "¿Cuál es mi color favorito?",
      pet_name: "¿Cómo se llama mi mascota?",
      travel_dream: "¿A qué país quiero viajar?",
      coffee_or_tea: "¿Prefiero café o té?",
      favorite_movie: "¿Cuál es mi película favorita?",
      nickname: "¿Cómo me llamas de cariño?",
      favorite_song: "¿Cuál es nuestra canción?",
      first_meeting: "¿Dónde nos conocimos?",
      favorite_hobby: "¿Cuál es mi pasatiempo favorito?",
      morning_or_night: "¿Soy más de mañana o de noche?",
      favorite_season: "¿Cuál es mi estación favorita?",
      favorite_sport: "¿Cuál es mi deporte favorito?",
      chocolate_or_vanilla: "¿Prefiero chocolate o vainilla?",
      beach_or_mountains: "¿Prefiero la playa o la montaña?",
      first_gift: "¿Cuál fue el primer regalo que me diste?",
      dream_job: "¿Cuál es mi trabajo soñado?",
      favorite_animal: "¿Cuál es mi animal favorito?",
    },
  },
  en: {
    success_clue: `Well done, ${name}! 🎉 You got the right answer and earned an extra clue. Keep going, my love! ❤️${flowerEmoji}`,
    title: `❤️${flowerEmoji} My ${name}, each puzzle is a little piece of our story ❤️${flowerEmoji}`,
    message_completed: MESSAGE_COMPLETED_EN,
    message_start: MESSAGE_START_EN,
    message_progress: MESSAGE_PROGRESS_EN,
    random_messages: RANDOM_MESSAGES_EN,
    sad_messages: SAD_MESSAGES_EN,
    puzzle_title: `❤️ Assemble the puzzle, my love ❤️`,

    finish_puzzle: "Love, you did it!",
    back_button: "Back",
    clue_button: "Clue",
    pieces: "Pieces",
    remaining: "remaining",
    clue_question: "Do you want an extra clue, my love?",
    reset_modal_title: "Do you want to reset all puzzles?",
    reset_modal_text:
      "This action will erase your current progress and cannot be undone.",
    reset_confirm: "Yes, reset",
    reset_cancel: "No, continue",
    close_button: "Close",
    send_button: "Send",

    // Preguntas del juego en inglés
    questions: {
      anniversary: "When is our anniversary?",
      birthday: "When is my birthday?",
      favorite_food: "What is my favorite dish?",
      favorite_color: "What is my favorite color?",
      pet_name: "What is my pet's name?",
      travel_dream: "Which country do I want to visit?",
      coffee_or_tea: "Do I prefer coffee or tea?",
      favorite_movie: "What is my favorite movie?",
      nickname: "What do you call me with love?",
      favorite_song: "What is our song?",
      first_meeting: "Where did we meet?",
      favorite_hobby: "What is my favorite hobby?",
      morning_or_night: "Am I a morning or night person?",
      favorite_season: "What is my favorite season?",
      favorite_sport: "What is my favorite sport?",
      chocolate_or_vanilla: "Do I prefer chocolate or vanilla?",
      beach_or_mountains: "Do I prefer the beach or the mountains?",
      first_gift: "What was the first gift you gave me?",
      dream_job: "What is my dream job?",
      favorite_animal: "What is my favorite animal?",
    },
  },
} as const;
