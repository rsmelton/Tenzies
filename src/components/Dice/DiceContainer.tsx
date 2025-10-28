import { useState, useRef, useEffect } from "react";
import Die from "./Die";

const DiceContainer = () => {
  const [diceNumbers, setDiceNumbers] = useState<number[]>([]);
  const [amountDiceClicked, setAmountDiceClicked] = useState<number>(0);
  const [hasResetGame, setHasResetGame] = useState<boolean>(false);

  const chosenNumber = useRef<number>(0);

  const rollDice = () => {
    const arr: number[] = Array.from({ length: 10 }, () => {
      return Math.floor(Math.random() * 6) + 1;
    });
    setDiceNumbers(arr);
  };

  const resetGame = () => {
    // When this method runs, we want to do a few things:
    // 1. Unlock all the die (The die themselves take care of this once hasResetGame is true)
    setHasResetGame(true);
    // 2. Call method to get ten random numbers for the new die
    rollDice();
    // 3. Set amountDiceClicked back to 0
    setAmountDiceClicked(0);
    // 4. Reset the chosenNumber
    chosenNumber.current = 0;
  };

  // re-render so we can set the new rolled numbers
  useEffect(() => {
    rollDice();
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-5 gap-x-4 gap-y-4">
        {diceNumbers &&
          diceNumbers.map((number, index) => (
            <Die
              key={index}
              number={number}
              chosenNumber={chosenNumber}
              amountDiceClicked={amountDiceClicked}
              setAmountDiceClicked={setAmountDiceClicked}
              hasResetGame={hasResetGame}
              setHasResetGame={setHasResetGame}
            />
          ))}
      </div>

      <button
        onClick={amountDiceClicked !== 10 ? rollDice : resetGame}
        className="text-white bg-[#5035FF] px-8 py-2 rounded cursor-pointer hover:bg-[#5035DD]"
      >
        {amountDiceClicked !== 10 ? "Roll" : "Play again"}
      </button>
    </div>
  );
};

export default DiceContainer;
