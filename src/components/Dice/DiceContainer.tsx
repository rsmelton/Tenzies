import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

const DiceContainer = () => {
  // This is called Lazy state initialization and only calls 
  // generateAllNewDice once for the initial state
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef<HTMLButtonElement>(null);

  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

    useEffect(() => {
        if (gameWon) {
            buttonRef.current?.focus();
        }
    }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function resetGame() {
    setDice(generateAllNewDice);
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  function hold(id: string) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      id={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
    />
  ));

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-5 gap-x-4 gap-y-4">{diceElements}</div>
      <button
        ref={buttonRef}
        className="text-white bg-[#5035FF] px-8 py-2 rounded cursor-pointer hover:bg-[#5035DD]"
        onClick={gameWon ? resetGame : rollDice}
      >
        {gameWon ? "Play again" : "Roll"}
      </button>
    </div>
  );
};

export default DiceContainer;
