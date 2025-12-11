import { useState, useEffect } from "react";
import lightLogo from "../assets/github-mark.png";
import darkLogo from "../assets/github-mark-white.png";

function Title() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  return (
    <div className="flex flex-row flex-nowrap justify-start max-h-12 gap-3">
      <h1 className="text-4xl pt-1">GitHub Profile Analyzer</h1>
      <img src={isDark ? darkLogo : lightLogo} alt="GitHub Logo" className="w-11 h-11 cursor-pointer mt-0.5 hover:-translate-y-0.5 transition-transform" onClick={toggleTheme}/>
    </div>
  );
}

export default Title;