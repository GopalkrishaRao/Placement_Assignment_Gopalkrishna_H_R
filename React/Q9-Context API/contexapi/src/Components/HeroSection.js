import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];
  
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "1rem",
        height:"100vh",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme Toggler</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, modi porro in cum aliquid suscipit eius enim! Laboriosam, nam. Labore esse atque excepturi molestias vel? Blanditiis corrupti nemo quae iure repellat veniam modi consequatur ipsam minima expedita dignissimos deserunt voluptatem, placeat, omnis magnam cupiditate! Perferendis libero fuga aliquid quibusdam ratione.</p>
      <button
        style={{
          backgroundColor: "#808080",
          padding: "10px 15px",
          fontSize: "20px",
          color: `${currectTheme.textColor}`,
          border: `${currectTheme.border}`,
          cursor:"pointer",
          fontWeight:'bolder'
        }}
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}>
        Switch the Theme
      </button>
    </div>
  );
};

export default HeroSection;