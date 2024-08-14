import React, { useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return [darkMode, setDarkMode];
};
