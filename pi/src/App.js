import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Movies from "./screens/movies/Movies";
import Series from "./screens/series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;