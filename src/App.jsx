import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SettingsContext from "./context/SettingsContext";
import Settings from "./components/Settings";
import Timer from "./components/Timer";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <>
      <main>
        <SettingsContext.Provider
          value={{
            showSettings: showSettings,
            setShowSettings: setShowSettings,
            workMinutes: workMinutes,
            setWorkMinutes: setWorkMinutes,
            breakMinutes: breakMinutes,
            setBreakMinutes: setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </>
  );
}

export default App;
