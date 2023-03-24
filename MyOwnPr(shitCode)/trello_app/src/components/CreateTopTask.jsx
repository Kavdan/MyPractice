import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "../app.module.scss";
import { addTopTask } from "../features/slices/tasksSlice";

export const CreateTopTask = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const sendTask = () => {
    dispatch(addTopTask(taskName));
  };

  return (
    <div className={classes.createTopTask}>
      <input
        type="text"
        value={taskName}
        onInput={(e) => setTaskName(e.target.value)}
      />
      <button onClick={sendTask}>Create Task</button>
    </div>
  );
};
