import "./App.css";
import Button from "./components/Button";
import React, { useEffect, useState } from "react";
import EpisodeList from "./components/EplisodeList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { UserProvider } from "./Contexts/UserContext";

const App: React.FC = () => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const [theme, setTheme] = useState<"light" | "dark">( savedTheme || "light");

  
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayback = () => {
    setIsPlaying((prevState) => !prevState);
  };
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPlaying(false);
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  const message: string ="Welcome to your first typescript based react application";
  //  const handleClick = () => alert('button clicked');

  
  return (
    <UserProvider>
    <div className="dark:bg-[#181818] bg-white">
      <div className="flex justify-center items-center flex-col text-center dark:text-white text-[#181818]">
      <Sidebar />
      <Header title="Newton Academy" />
     
      <Button
        label={`Toggle theme to ${theme === "light" ? "dark" : "light"}`}
        onClick={toggleTheme}
      />
      <Button label={isPlaying ? "Pause" : "Play"} onClick={togglePlayback} />
      <p>{message}</p>
      </div>
      <EpisodeList />
    </div>
    </UserProvider>
  );
};

export default App;
