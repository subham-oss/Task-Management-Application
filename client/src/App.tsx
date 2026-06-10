import { useTheme } from "./hooks/useTheme";

import AppRouter from "./router/AppRouter";

import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const {
    dark,
    toggleTheme,
  } = useTheme();

  return (
    <div
      className={
        dark
          ? "gradient-bg text-white"
          : "light-gradient text-black"
      }
    >
        
      <div className="fixed top-5 right-5 z-50">
        { <ThemeToggle
          dark={dark}
          toggle={toggleTheme}
        /> }
      </div> 

      <div className="orb bg-blue-500 w-72 h-72 top-0 left-0" />
      <div className="orb bg-purple-500 w-72 h-72 bottom-0 right-0" />

      <AppRouter />
    </div>
  );
}