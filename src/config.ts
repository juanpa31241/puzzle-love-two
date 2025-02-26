export const appConfig: {
  language: "es" | "en";
  theme: "tulips" | "sunflowers" | "roses" | "lilies";
  name: string;
  answers: {
    anniversary: string;
    birthday: string;
    favoriteFood: string;
    favoriteColor: string;
    petName: string;
    travelDream: string;
    coffeeOrTea: string;
    favoriteMovie: string;
    nickname: string;
    favoriteSong: string;
    firstMeeting: string;
    favoriteHobby: string;
    morningOrNight: string;
    favoriteSeason: string;
    favoriteSport: string;
    chocolateOrVanilla: string;
    beachOrMountains: string;
    firstGift: string;
    dreamJob: string;
    favoriteAnimal: string;
  };
} = {
  language: (import.meta.env.VITE_LANGUAGE as "es" | "en") || "es",
  name: import.meta.env.VITE_NAME ?? "señorita",
  theme:
    (import.meta.env.VITE_THEME as
      | "tulips"
      | "sunflowers"
      | "roses"
      | "lilies") || "roses",
  answers: {
    anniversary: import.meta.env.VITE_ANSWER_ANNIVERSARY ?? "20-02",
    birthday: import.meta.env.VITE_ANSWER_BIRTHDAY ?? "02-09",
    favoriteFood: import.meta.env.VITE_ANSWER_FAVORITE_FOOD ?? "Pizza",
    favoriteColor: import.meta.env.VITE_ANSWER_FAVORITE_COLOR ?? "Azul",
    petName: import.meta.env.VITE_ANSWER_PET_NAME ?? "Luna",
    travelDream: import.meta.env.VITE_ANSWER_TRAVEL_DREAM ?? "Japón",
    coffeeOrTea: import.meta.env.VITE_ANSWER_COFFEE_OR_TEA ?? "Café",
    favoriteMovie:
      import.meta.env.VITE_ANSWER_FAVORITE_MOVIE ?? "El viaje de Chihiro",
    nickname: import.meta.env.VITE_ANSWER_NICKNAME ?? "Mi amor",
    favoriteSong:
      import.meta.env.VITE_ANSWER_FAVORITE_SONG ?? "Perfect - Ed Sheeran",
    firstMeeting: import.meta.env.VITE_ANSWER_FIRST_MEETING ?? "Universidad",
    favoriteHobby: import.meta.env.VITE_ANSWER_FAVORITE_HOBBY ?? "Leer",
    morningOrNight: import.meta.env.VITE_ANSWER_MORNING_OR_NIGHT ?? "Noche",
    favoriteSeason: import.meta.env.VITE_ANSWER_FAVORITE_SEASON ?? "Invierno",
    favoriteSport: import.meta.env.VITE_ANSWER_FAVORITE_SPORT ?? "Fútbol",
    chocolateOrVanilla:
      import.meta.env.VITE_ANSWER_CHOCOLATE_OR_VANILLA ?? "Chocolate",
    beachOrMountains: import.meta.env.VITE_ANSWER_BEACH_OR_MOUNTAINS ?? "Playa",
    firstGift: import.meta.env.VITE_ANSWER_FIRST_GIFT ?? "Un peluche",
    dreamJob:
      import.meta.env.VITE_ANSWER_DREAM_JOB ?? "Desarrollador de videojuegos",
    favoriteAnimal: import.meta.env.VITE_ANSWER_FAVORITE_ANIMAL ?? "Gato",
  },
};
