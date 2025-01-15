import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo Frases" className="logo" />

      <h1 className="title">Categorias</h1>
      <section className="category-area">
        <button className="category-bottom">Motivações</button>
        <button className="category-bottom">Bom dia</button>
      </section>
      <button className="button-frase">Gerar Frase</button>
      <p className="texto-frase">A frase está aqui</p>
    </div>
  );
}

export default App;
