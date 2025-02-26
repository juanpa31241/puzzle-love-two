export interface PuzzlePiece {
  id: number;
  imageData: string;
  correctSlot: boolean;
}

export interface BoardSlots {
  [slotId: string]: PuzzlePiece | undefined;
}

export interface ImageDetail {
  id: string;
  src: string;
  title: string;
  completed: boolean;
  message: string;
}
export interface PuzzleQuestion {
  id: string;
  question: string;
  answer: string;
  type: string; // Podría ser un union type: "text" | "multiple-choice" | "true-false"
  answered: boolean;
  active: boolean;
}

export interface Puzzle {
  completed: boolean;
  pool: Array<PuzzlePiece>;
  boardSlots: Record<string, PuzzlePiece | null>;
  clues: number;
  id: string;
  src: string;
  message: string;
  title: string;
  questions: PuzzleQuestion[]; // Nueva propiedad añadida
}
