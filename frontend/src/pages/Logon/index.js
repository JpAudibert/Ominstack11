import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [credential, setCredential] = useState("");

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", { credential });

      localStorage.setItem('ongCredential', credential);
      localStorage.setItem('ongName', response.data.ong.name);
      localStorage.setItem('ongId', response.data.ong.id);

      history.push('profile')
    } catch (error) {
      console.log(`Falha no login ${error}`);
    }
  }

  return (
    <>
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} alt="Be The Hero" />

          <form onSubmit={handleLogin}>
            <h1>Faça seu Logon</h1>

            <input
              type="text"
              placeholder="Sua ID"
              value={credential}
              onChange={e => setCredential(e.target.value)}
            />
            <button className="button" type="submit">
              Entrar
            </button>
            <Link to="/register" className="back-link">
              <FiLogIn size={16} color="#e02041" />
              Não tenho cadastro
            </Link>
          </form>
        </section>

        <img src={heroesImg} alt="Heroes" />
      </div>
    </>
  );
}
