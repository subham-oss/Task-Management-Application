import { useTheme } from "./context/ThemeContext";
import AppRouter from "./router/AppRouter";


export default function App() {
  const {
    dark,
  } = useTheme();

  return (
    <div
      className={
        dark  
          ? "gradient-bg text-white"
          : "light-gradient text-black"
      }
    >

      <div className="orb bg-blue-500 w-72 h-72 top-0 left-0" />
      <div className="orb bg-purple-500 w-72 h-72 bottom-0 right-0" />

      <AppRouter />
    </div>
  );
}