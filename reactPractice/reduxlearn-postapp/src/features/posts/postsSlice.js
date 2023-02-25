import { createSlice, nanoid } from "@reduxjs/toolkit";
import { isEqualObj } from "../../utils/isEqualObjects";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "We're learning redux toolkit",
    content: "We're in process ...",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    likes: 0
  },
  {
    id: 2,
    title: "We're happy",
    content: "Cause we're learning redux ...",
    date: sub(new Date(), { minutes: 50 }).toISOString(),
    likes: 0
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAded: {
      reducer: (state, action) => {
        if (isEqualObj(state, action.payload)) {
          alert("!!! There's the same post !!!");
          return;
        }
        state.push(action.payload);
      },
      prepare: (newPost) => {
        return {
          payload: {
            id: nanoid(),
            title: newPost?.title || "uncorrect",
            content: newPost?.content || "uncorrect",
            userId: newPost?.userId || "Unknown Author",
            date: new Date().toISOString(),
            likes: 0
          },
        };
      },
    },
    addLikes: (state, action) => {
      const postId = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.likes++;
      }
    },
    disLikes: (state, action) => {
      const postId = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.likes--;
      }
    },
  },
});

export const selectedAllPosts = (state) => state.posts;
export const { postAded, addLikes, disLikes } = postsSlice.actions;

export default postsSlice.reducer;
