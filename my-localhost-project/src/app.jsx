import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import ContactFormBox from "./components/ContactFormBox";
import Contacto from "./pages/Contacto";
import ShowHideBox from "./components/ShowHideBox";
import DynamicList from "./components/DynamicList";
import LifeCycleDemo from "./components/LifeCycleDemo";
import ValidatedContactForm from "./components/ValidatedContactForm";
import ContactInfo from "./components/ContactInfo";

function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#e0f7fa" }}>
      <Header />
      <ContactFormBox />
      <ContactInfo />
      <ShowHideBox />
      <DynamicList />
      <LifeCycleDemo />
      {/* Puedes usar <ValidatedContactForm /> en vez de tu ContactForm normal si quieres validación */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;