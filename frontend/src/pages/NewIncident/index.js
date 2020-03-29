import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Profile() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const ongCredential = localStorage.getItem("ongCredential");
  const ongId = localStorage.getItem("ongId");

  async function handleIncidentNew(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      const response = await api.post("/incidents", data, {
        headers: {
          authorization: ongCredential,
          id: ongId
        }
      });
      console.log(response);
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero" />
            <h1>Cadastrar Novo Caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um heroi para
              resolver isso.
            </p>

            <Link to="/" className="back-link">
              <FiArrowLeft size={16} color="#e02041" />
              Não tenho cadastro
            </Link>
          </section>
          <form onSubmit={handleIncidentNew}>
            <input
              type="text"
              placeholder="Título do caso"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Valor em Reais"
              value={value}
              onChange={e => setValue(e.target.value)}
            />

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
