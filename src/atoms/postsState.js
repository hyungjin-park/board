import { atom } from "recoil";
import { localStorageEffect } from "../utilities/localStorage";

export const postsState = atom({
  key: "postsState",
  default: [],
  effects: [localStorageEffect("postsState")],
});

export const inputState = atom({
  key: "inputState",
  default: {
    title: "",
    content: "",
  },
  // effects: [localStorageEffect("inputState")],
});
