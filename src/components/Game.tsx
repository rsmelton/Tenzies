// What does the game need to track?
// 1. An array of 10 random numbers to populate the die
// 2. The total number of die that has been clicked
//      - Once we reach 10, we need to cause a re-render to display
//        the button that displays "Play again"
// 3. The number the user chooses when clicking their first die

// What does each die need to track?
// 1. Whether the die has been clicked
// 2. 

import DiceContainer from "./Dice/DiceContainer";

const Game = () => {
  return (
    <div className="rounded-lg bg-[#F5F5F5] mx-4 my-8 px-4 py-8">
      <h1 className="text-[1.6rem] text-[#2B283A] text-center">Tenzies</h1>
      <p className="text-[#4A4E74] text-center text-balance mb-8">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <DiceContainer />
    </div>
  );
};

export default Game;
