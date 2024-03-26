import { useState } from "react";
import "../../styles/registerPageStyles.css";
import Header from "../../components/Header/Header";

const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleNomeChange = (event: any) => {
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event: any) => {
    setTelefone(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const cadastrar = async () => {
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/andrehilario/google_sheets/bjwfBlnVJgTAYLOp?tabId=DB`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[nome, telefone, email]]),
        }
      );
      await response.json();
      if (response.status === 200) {
        console.log(
          "Dados enviados com sucesso para a planilha do Google Sheets."
        );
      } else {
        console.error(
          "Erro ao enviar os dados para a planilha:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erro ao enviar os dados para a planilha:", error);
    }
  };

  return (
    <>
      <div className="body">
        <Header />

        <div className="container">
          <div className="card">
            <h1> Cadastrar</h1>

            <div className="label-float">
              <input
                type="text"
                id="nome"
                placeholder=" "
                value={nome}
                onChange={handleNomeChange}
                required
              />
              <label htmlFor="nome">Nome</label>
            </div>

            <div className="label-float">
              <input
                type="tel"
                id="telefone"
                placeholder=" "
                value={telefone}
                onChange={handleTelefoneChange}
                required
              />
              <label htmlFor="telefone">Telefone</label>
            </div>

            <div className="label-float">
              <input
                type="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <label htmlFor="patrimonioSelect">
                Selecione a faixa de patrimônio:
              </label>
              <select
                id="patrimonioSelect"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Selecione...</option>
                <option value="faixa1">Até R$ 100.000</option>
                <option value="faixa2">R$ 100.001 - R$ 500.000</option>
                <option value="faixa3">R$ 500.001 - R$ 1.000.000</option>
                <option value="faixa4">Acima de R$ 1.000.000</option>
              </select>
              {selectedOption && (
                <p>Você selecionou a faixa de patrimônio: {selectedOption}</p>
              )}
            </div>
            <div className="justif-center">
              <button onClick={cadastrar}>Confirmar</button>
            </div>

            <div className="justif-center">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioCadastro;
