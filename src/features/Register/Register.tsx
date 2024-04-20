import { useRef, useState } from "react";
import "../../styles/registerPageStyles.css";
import {
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import InputMask from "react-input-mask";
import emailjs from "@emailjs/browser";
import ReactPixel from 'react-facebook-pixel';

const sendEmail = async (email: string, nome: string, content: string | ArrayBuffer | Blob) => {
  const templateParams = {
    to_name: nome,
    email: email,
    content: content, // Certifique-se de que content é passado corretamente
  };

  await emailjs
    .send(
      "service_y1x4pmh",
      "template_n2g6v9j",
      templateParams,
      "J2FL_h3wphLl7ke8l"
    )
    .then(() => console.log("Sucesso"))
    .catch(() => console.error("Erro"));
};


const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  ReactPixel.pageView();

  const handleSelectChange = (event: any) => {
    ReactPixel.track(event.target.value, event);
    setSelectedOption(event.target.value);
  };

  const handleNomeChange = (event: any) => {
    ReactPixel.track(event.target.value, event);
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event: any) => {
    ReactPixel.track(event.target.value, event);
    setTelefone(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    ReactPixel.track(event.target.value, event);
    setEmail(event.target.value);
  };

  const cadastrar = async () => {
    const pdfPath = "../../assets/TABELA DE PRÉ-LANÇAMENTO 24MESES 02-01-2024 - TAÍBA.pdf";
    const pdfContent = await fetch(pdfPath).then((response) => response.blob());
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://v1.nocodeapi.com/andrehilario/google_sheets/bjwfBlnVJgTAYLOp?tabId=DB`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[nome, telefone, email, selectedOption]]),
        }
      );
      await response.json();
      if (response.status === 200) {
        console.log(
          "Dados enviados com sucesso para a planilha do Google Sheets."
        );
      } else {
        setIsLoading(false);
        console.error(
          "Erro ao enviar os dados para a planilha:",
          response.statusText
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Erro ao enviar os dados para a planilha:", error);
      toast.error("Erro ao enviar os dados.");
    } finally {
      setIsLoading(false);
      toast.success(
        "Dados enviados com sucesso! Aguarde a confirmação no seu email!"
      );
      await sendEmail(email, nome, pdfContent);
    }
  };

  return (
    <>
      <Box>
        <ToastContainer />
      </Box>
      <div className="body">
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
              <InputMask
                mask="(99) 99999-9999"
                maskChar="_"
                type="tel"
                id="telefone"
                placeholder=" "
                value={telefone}
                onChange={handleTelefoneChange}
                inputRef={inputRef}
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
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="patrimonioLabel">
                <b>Patrimônio</b>
              </InputLabel>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                labelId="patrimonioLabel"
                label="Patrimônio"
              >
                <MenuItem value="">
                  <em>Limpar</em>
                </MenuItem>
                <MenuItem value="0-50.000">Abaixo de R$ 50 mil</MenuItem>
                <MenuItem value="50.00-150.000">
                  Entre R$ 50 mil e R$ 150 mil
                </MenuItem>
                <MenuItem value="150.001-300.000">
                  Entre R$ 150 mil e R$ 300 mil
                </MenuItem>
                <MenuItem value="300.001-500.000">
                  Entre R$ 300 mil e R$ 500 mil
                </MenuItem>
                <MenuItem value="500.001-1.000.000">
                  Entre R$ 500 mil e R$ 1 milhão
                </MenuItem>
                <MenuItem value="1.000.001-5.000.000">
                  Entre R$ 1 milhão e R$ 5 milhões
                </MenuItem>
                <MenuItem value="5.000.000+">Mais de R$ 5 milhões</MenuItem>
              </Select>
            </FormControl>

            {selectedOption && nome && email && telefone && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <b>Agora é só confirmar!</b>
              </div>
            )}

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                disabled={
                  !nome || !telefone || !email || !selectedOption || isLoading
                }
                onClick={cadastrar}
              >
                <b>{isLoading ? "Carregando..." : "Confirmar"}</b>
              </Button>
            </div>

            <div style={{ marginTop: "20px" }}>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioCadastro;
