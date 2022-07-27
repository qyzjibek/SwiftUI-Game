import { useState, useEffect } from "react";

export function useProgress(){
    const savedProgress = localStorage.getItem('progress'); 
    const [progress, setProgress] = useState(savedProgress ? JSON.parse(savedProgress) : []);
    const [showProgress, setShowprogress] = useState(localStorage.getItem("showProgress") || false);
    const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  
    useEffect(() => {
      localStorage.setItem("progress", JSON.stringify(progress));
    }, [progress]);
  
    const saveProgress = () => {
      localStorage.setItem('level', level);
      setShowprogress(true);
      alert("Your progress was saved successfully");
    }
  
    useEffect( () => {
      localStorage.setItem("showProgress", showProgress);
    }, [showProgress])
  
    return {progress, showProgress, setProgress, setShowprogress, saveProgress, level, setLevel};
}