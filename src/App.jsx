import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
const App = () => {
  let pageSize = 10;
  let apikey = import.meta.env.VITE_API_KEY;
  const [isDark, setisDark] = useState(false);
  const toggleTheme = () => {
    setisDark(!isDark);
  };
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000000" : "#ffffff";
  }, [isDark]);
  return (
    <div className={isDark ? "dark bg-black text-white pt-16 " : "pt-16"}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              isDark={isDark}
              pageSize={pageSize}
              apikey={apikey}
              category="general"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              isDark={isDark}
              key={"entertainment"}
              pageSize={pageSize}
              apikey={apikey}
              category="entertainment"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              isDark={isDark}
              key={"business"}
              pageSize={pageSize}
              apikey={apikey}
              category="business"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              isDark={isDark}
              key={"health"}
              pageSize={pageSize}
              apikey={apikey}
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              isDark={isDark}
              key={"science"}
              pageSize={pageSize}
              apikey={apikey}
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              isDark={isDark}
              key={"sports"}
              pageSize={pageSize}
              apikey={apikey}
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              isDark={isDark}
              key={"technology"}
              pageSize={pageSize}
              apikey={apikey}
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
