import React, { ReactNode } from 'react';

import { createContext, useState } from 'react';

export interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: false,
  toggleDarkMode: () => {}
});

 function DarkModeContextPage ( { children }: { children: ReactNode  }) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}


export default DarkModeContextPage