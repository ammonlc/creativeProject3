import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Mower from "./pages/Mower";
import Groceries from "./pages/Groceries";
import ComingSoon from "./pages/ComingSoon";
import './App.css';

export default function App() {
  return (
    <BrowserRouter basename="/react/multi/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Mower" element={<Mower />} />
          <Route path="Groceries" element={<Groceries />} />
          <Route path="ComingSoon" element={<ComingSoon />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}