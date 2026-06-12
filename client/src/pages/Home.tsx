import ThemeToggle from "../components/ThemeToggle";

import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const {
    dark,
    toggleTheme,
  } = useTheme();

  return (
    <div>
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle
          dark={dark}
          toggle={toggleTheme}
        />
      </div>

      <div className="p-10">
        <h1 className="text-4xl font-bold">
          Welcome Home
        </h1>
      </div>
    </div>
  );
};

export default Home;