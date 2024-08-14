import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark Mode", false);
  return [darkMode, setDarkMode];
};
