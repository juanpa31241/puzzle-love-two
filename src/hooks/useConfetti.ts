// useConfetti.ts
import { useRef } from "react";
import { themeConfig } from "../data";
import { useStateContext } from "../context/StateContext";
import { confetti } from "@tsparticles/confetti";
export const useConfetti = () => {
  const confettiFrameRef = useRef<number | null>(null);
  const { theme } = useStateContext();
  const launchConfetti = (launch: boolean) => {
    const colors = ["#FF69B4", "#FFC0CB", "#FF1493", "#ffffff"];

    if (launch) {
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });
        confettiFrameRef.current = requestAnimationFrame(frame);
      })();
    } else {
      if (confettiFrameRef.current !== null) {
        cancelAnimationFrame(confettiFrameRef.current);
      }
      confettiFrameRef.current = null;
    }
  };
  const shoot = (x: number, y: number) => {
    const origin = { x: x / window.innerWidth, y: y / window.innerHeight };

    [
      { particleCount: 40, scalar: 2 },
      { particleCount: 20, scalar: 3 },
      { particleCount: 10, scalar: 4 },
    ].forEach(({ particleCount, scalar }) => {
      confetti({
        colors: themeConfig[theme].fireworks.slice(),
        spread: 45,
        ticks: 11,
        gravity: 0.5,
        decay: 0.94,
        startVelocity: 8,
        shapes: ["heart"],
        particleCount: particleCount,
        scalar: scalar,
        origin,
      });
    });
  };

  return { launchConfetti, shoot };
};
