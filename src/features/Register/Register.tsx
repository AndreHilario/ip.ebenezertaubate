import { useState } from "react";
import "../../styles/registerPageStyles.css";
import Header from "../../components/Header/Header";
import { Select, MenuItem, Button, Box, FormControl, InputLabel } from "@mui/material";

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
      <Box sx={{ marginBottom: "60px" }}>
        <Header />
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
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="patrimonioLabel"><b>Patrimônio</b></InputLabel>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                labelId="patrimonioLabel"
                label="Patrimônio"
              >
                <MenuItem value="">
                  <em>Limpar</em>
                </MenuItem>
                <MenuItem value="100.000">Até R$ 100.000</MenuItem>
                <MenuItem value="100.001 - R$ 500.000">
                  R$ 100.001 - R$ 500.000
                </MenuItem>
                <MenuItem value="500.001 - R$ 1.000.000">
                  R$ 500.001 - R$ 1.000.000
                </MenuItem>
                <MenuItem value="1.000.000+">Acima de R$ 1.000.000</MenuItem>
              </Select>
            </FormControl>


            {selectedOption && nome && email && telefone && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
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
                disabled={!nome || !telefone || !email || !selectedOption}
                onClick={cadastrar}
              >
                <b>Confirmar</b>
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
