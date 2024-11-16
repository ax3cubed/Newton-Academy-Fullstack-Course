import "./App.css";
import Greeting from "./components/Greeeting";
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
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme]);
  const message: string ="Welcome to your first typescript based react application";
  //  const handleClick = () => alert('button clicked');

  
  return (
    <UserProvider>
    <div className="App">
      <Sidebar />
      <Header title="Newton Academy" />
      <Greeting name="Newton Academy" />
      <Button
        label={`Toggle theme to ${theme === "light" ? "dark" : "light"}`}
        onClick={toggleTheme}
      />
      <Button label={isPlaying ? "Pause" : "Play"} onClick={togglePlayback} />
      <p>{message}</p>
      <EpisodeList />
    </div>
    </UserProvider>
  );
};

export default App;
