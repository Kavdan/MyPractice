import { createSlice, current, nanoid } from "@reduxjs/toolkit";
import { Card } from "../../components/Card";

const initialState = [
  {
    id: nanoid(),
    name: "do homework",
    tasks: {
        do: [
            {id: nanoid(), name: "task1", tags: ["workout", "bodybuilding"]},
            {id: nanoid(), name: "task2", tags: ["cooking", "recepies"]},
            {id: nanoid(), name: "task3", tags: ["homework"]}
          ],
        doing: [],
        done: []
    },
    active: true,
    icon: ""
  },

  {
    id: nanoid(),
    name: "do exercises",
    tasks: {
        do: [
            {id: nanoid(), name: "squats", tags: ["legs", "back"]},
            {id: nanoid(), name: "pull-ups", tags: ["back", "shoulders"]},
            {id: nanoid(), name: "run", tags: ["enjoying"]}
          ],
        doing: [],
        done: []
    },
    active: false,
    icon: ""
  },
];

const tasksSlice = createSlice({
    name: "@@tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
          const taskId = action.payload.id;
          const newTask = action.payload.newTask;
          return state.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                tasks: {
                  ...task.tasks,
                  do: [
                    ...task.tasks.do,
                    newTask
                  ]
                }
              };
            } else {
              return task;
            }
          });
        },
        changeActiveTask: (state , action) => {
            const prevState = current(state);
            return prevState.map(task => {
               
                if (task.id === action.payload){
                    return {...task, active: true}
                }else {
                    return {...task, active: false}
                }
            })
        },
        dragCard: (state, action) => {
          const from = action.payload.from,
                to = action.payload.to,
                id = action.payload.id;

          return current(state).map(task => {
            if (task.id === action.payload.tasksId){
              return {
                ...task,
                tasks: {
                  ...task.tasks,
                  [from]: [...[...task.tasks[from]].filter(task => task.id !== id)],
                  [to]: [...task.tasks[to].filter(task => task.id !== id), ...[...task.tasks[from]].filter(task => task.id === id)]
                }
              }
            }else {
              return task;
            }
          })
        },
        addTopTask: (state, action) => {
          if (!action.payload.length) {
            alert("заполните поле");
            return state;
          }
          return [{
            id: nanoid(),
            name: action.payload,
            tasks: {
                do: [],
                doing: [],
                done: []
            },
            active: false,
            icon: ""
          }, ...state]
        },
        delTopTask: (state, action) => {
          console.log(current(state));
          return [...state].filter(task => task.id !== action.payload)
          console.log(current(state), action.payload)
        }, 
        delCard: (state, action) => {
          const newState = current(state);

          return newState.map(task => {
            if (task.id === action.payload.taskId) {
              return {
                ...task,
                tasks: {
                  ...task.tasks,
                  [action.payload.type]: [...task.tasks[action.payload.type]].filter(subTask => subTask.id !== action.payload.cardId)
                }
              }
            }else {
              return task;
            }
          })
        }
    }
})
export const tasksReducer = tasksSlice.reducer;
export const {addTask, changeActiveTask, dragCard, addTopTask, delTopTask, delCard} = tasksSlice.actions;
export const getAllTasks = state => state.tasks
export const getActiveTask = state => [...state.tasks].filter(task => task.active)[0];
