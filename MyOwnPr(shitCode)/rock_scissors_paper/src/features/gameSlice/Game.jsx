import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChoicesBlock from "../../ChoicesBlock";
import { checkGame } from "./gameSlice";
import { arrAI, arrUser } from "../../utils/choices";
import UserAIBlocks from "../../UserAIBlocks";
import { createStateByChoice } from "../../utils/choices";

export const Game = () => {
  const scores = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const [curImg, setCurImg] = useState({
    userImg: "",
    AiImg: "",
  });

  const game = (choice) => {
    const newState = createStateByChoice(choice);

    dispatch(
      checkGame({ userImg: newState.userImg.type, AiImg: newState.AiImg.type })
    );

    setCurImg(newState);
  };

  return (
    <>
      <UserAIBlocks scores={scores} curImg={curImg} />
      <ChoicesBlock arrUser={arrUser} gameListener={game} />
    </>
  );
};
