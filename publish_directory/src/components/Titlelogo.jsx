import { useState, useEffect } from "react";

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
    <div className="flex flex-nowrap justify-start max-h-12 gap-3">
      <h1 className="text-4xl pt-1 font-semibold">GitHub Profile Analyzer</h1>
      <img src={isDark ? "/assets/github-mark.png" : "/assets/github-mark-white.png"} alt="GitHub Logo" className="w-11 h-11 cursor-pointer mt-0.5 hover:-translate-y-0.5 transition-transform" onClick={toggleTheme}/>
    </div>
  );
}

export default Title;