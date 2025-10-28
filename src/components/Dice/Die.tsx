import type { FC } from "react";

type DieProps = {
    id: string;
    value: number;
    isHeld: boolean;
    hold: (id: string) => void;
}

const Die: FC<DieProps> = ({ id, value, isHeld, hold }) => {
  return (
    <button
      className={`${
        isHeld ? "bg-[#59E391]" : "bg-white"
      } px-4 py-2 rounded cursor-pointer shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)]`}
      onClick={() => hold(id)}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
};

export default Die;
