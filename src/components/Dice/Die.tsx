import { useState, useEffect } from "react";
import type { FC, RefObject, Dispatch } from "react";

type DieProps = {
  number: number;
  chosenNumber: RefObject<number>;
  amountDiceClicked: number;
  setAmountDiceClicked: Dispatch<React.SetStateAction<number>>;
  hasResetGame: boolean;
  setHasResetGame: Dispatch<React.SetStateAction<boolean>>;
};

const Die: FC<DieProps> = ({
  number,
  chosenNumber,
  amountDiceClicked,
  setAmountDiceClicked,
  hasResetGame,
  setHasResetGame,
}) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    console.log("Do we enter has reset game useEffect hook");
    if (hasResetGame) {
        setHasBeenClicked(false);
        setHasResetGame(false);
    }
  }, [hasResetGame]);

  useEffect(() => {
    // If the amount of die clicked = 10 then we should play celebration animation
    console.log("Amount of Die Clicked: ", amountDiceClicked);
  }, [amountDiceClicked]);

  const handleClick = () => {
    if (chosenNumber.current === 0) { // user has never clicked a die so set the chosenNumber
      setHasBeenClicked(true);
      chosenNumber.current = number;
      setAmountDiceClicked((prevAmountDiceClicked) => prevAmountDiceClicked + 1);
    } else if (chosenNumber.current === number) { // able to be clicked
      setHasBeenClicked(true);
      setAmountDiceClicked((prevAmountDiceClicked) => prevAmountDiceClicked + 1);
    }
  };

  return (
    // Only allow click if chosenNumber has been set
    <div
      onClick={hasBeenClicked ? () => {} : handleClick}
      className={`${
        hasBeenClicked ? "bg-[#59E391]" : "bg-[#FFFFFF] cursor-pointer"
      } px-4 py-2 rounded shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)]`}
    >
      {hasBeenClicked ? chosenNumber.current : number}
    </div>
  );
};

export default Die;
