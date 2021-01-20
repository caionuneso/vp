import React from "react";

import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Form } from "@unform/web";

import Textarea from "../../components/Form/textarea";

import "../../styles/pages/pages-denunciations/report.css";

import Input from '../../components/Form/input'

const report: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <div id="page-report">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/denunciations">
            <FiArrowLeft size={35} />
          </Link>
          <img src="/static/media/icon.5d399b31.svg" alt="icon" />
        </div>

        <div className="header-content">
          <strong>
            Com a sua contribuição conseguimos transformar nossa cidade em um
            lugar melhor
          </strong>
        </div>
      </header>

      <Form onSubmit={handleSubmit}>
        <Textarea name="description"  />
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
};

export default report;
