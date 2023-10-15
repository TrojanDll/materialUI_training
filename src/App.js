import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminNews from "./pages/AdminNews";
import { useState } from "react";

function App() {
  const [news, setNewsApp] = useState([]);

  function getNewsApp(news) {
    setNewsApp(news);
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home newsItems={news} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/admin/news"
          element={<AdminNews getNewsApp={getNewsApp} />}
        />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
