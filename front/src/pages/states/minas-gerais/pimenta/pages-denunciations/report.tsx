import React from "react";

import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Form } from "@unform/web";

import Textarea from "../../../../../components/Form/textarea";

import "../../../../../styles/pages/pages-denunciations/report.css";

import icon from "../../../../../images/icon.svg"

import MultipleFileInput from "../../../../../components/Form/multipleFileInput";

const report: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <div id="page-report">
      <header className="page-header">
          <img src={icon} alt="icon" />
            <h2>Voz do povo</h2>
      </header>
      <main>
        <Form id="formReport" onSubmit={handleSubmit}>
          <h1>Descreva aqui</h1>
          <Link to="/mg/pimenta/denunciations">
              <FiArrowLeft size={15} /> clique para voltar
            </Link>
          <p>
            Descreva abaixo o conteúdo de sua manifestação. Seja claro e
            objetivo. Informações pessoais, inclusive identificação, não devem
            ser inseridas a não ser que sejam essenciais para a caracterização
            da manifestação.
          </p>
          <Textarea name="description" />
          <MultipleFileInput id="Files" name="images" />
          <button id="buttonReport" type="submit">Enviar</button>
        </Form>
      </main>
    </div>
  );
};

export default report;
