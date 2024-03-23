import { useState } from "react";
import "../../styles/registerPageStyles.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
import Header from "../../components/Header/Header";


const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

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
      const doc = new GoogleSpreadsheet("1LYgVVdh13Pv_30b_cJ_WHD1CLS4hk7I2fj6THPG7ltk", {
        apiKey: "\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD11assbvJsUMo7\nPMlrKKJzVOGMfw0YCsV/8prG7nkzV5lBzVmr0MyIpCOkvFQNLFvso+HHu9cgNbpF\nOCyAdaHwKBaJSZVsCRLPykUMymWFYTxCHrvw2uO3e5OoGJZnsT0ZmP67/65Bx9Uc\nuhlUMw4sfHr7oNQIR8tVfiSdcEogk/vaehVP/sn7tgWGFvytxRZaTcfSrxg8vw10\n4whL3uUS+F992ACrZmafW1s7Qzqom3c6Y7E/UagohC8Sm/iVsP2BfPfbLF1EPRyU\nFapBBY15zkiVd0H3gwV8X876pgKVx4jNLei2e7knlf/w1j/JoQxHHcMDfchpaZbh\n06FQM2+rAgMBAAECggEAIQMTvMsb9tD/4eXkeRAN20WiEYcw2keoBJSEQFk0draO\nuA1mu0c2ECtVNgFW8CXtejZPqCNgsiHvj5gJhylEw8aTsCqXdtiJFCo/YjD+YmOP\nqflil5IX/kMJWGC6NyvP3qjIRwqrUIi7OjkAvxPUFW6Ukpx4R1xiFmryvnRJIAfm\nkwvSGxhFQ8FkmLGYHc09sxgBkIfYZPWa3cgG1FptJmWDTYDRy+4W9MJj3eallUkR\nYtjZCLp/M3p3P9s8KuPTKY3d6VmGCHn00L0LOme5KlCQh+Hn7EhwpYWUBcAMg0y0\n+7AxtACkD8fYPKqUFgQBA64og4RKwOzHnQtRWoKUgQKBgQD/+VFXvmUL9jb4T6wF\nN5FuCPKqiu3iK/iV7yhkxpTvfQc+zueFQlNePe0oS3wXZLaUmq9kmQQubwViuvlP\njbx3nAteUc1FOLxCHoLrtwvd7Hzrz+eq9vzqL4zZg5jfJOM0segGB6DomnBoO4KU\nGrcS4UJaND1IcoCZ7HzCklox4QKBgQD13BYSIc+4b4janXbAyuNUOOkbNYYJiVGh\n374IuAqPdd3rIW3RC5Exmop5cG6WXIrYis/SHvTzbrVPBNDBZ13Iqcgu65Jsoog+\nO5MOOCF92ReRT/PG6lQMChGSLP1JggnEZZbn0Pm5cVJFuLJhh0/aB7Eg0JYDRjgw\n0aZFS0KrCwKBgCMb8kFDtx5d5gpG+0Q36/WYupgTuC8mctE13Wd9KV5z2rONs4m+\noCqz+bxmJh4bTUOyt83ngwBPcACrvphfy3Lob1K/i5UsA/5ZqwFjuPf2gOfjO1Zi\nzCve28XV2/j3WUaYBEgXccWVsUdKqk1gIK4xQWWX9rPiKKt0GWSiqEZhAoGAA7mm\n9/VdMV03RKC4KOmqEh+eoJPqCQD0pLBAL9+iAVR23VYvVMiJFahSys5CTrLuQ6Ou\nzG89pOabhqv7AcMwL5cq+lMFb/HygIbkjoWZNE/yxHfiqLPqPBh29bEK0W9P+JLV\ne4O2FPI7neTThxjGw/Xz4Bxo+Xm55jt2+nvOccsCgYEAxN30XW/C+7pJo1v0+HYW\nHMwVkEnS30UNFL2Hy26EFMfv0I299FlclHCD+m8WwLe44wfp2K6a4cq9DZO6oJ7p\nmyZ+BQ16hFdFYBQpoM/JBvks5ijE3HY5R0eDYb1PH7sUOF+4p4H2/8KxuyxEUzWi\nt25fOXK23qEeXRM7qgHNjPk=\n\n".replace(/\\n/gm, '\n'),
      });
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];

      await sheet.addRow({ Nome: nome, Telefone: telefone, Email: email });

      console.log(
        "Dados enviados com sucesso para a planilha do Google Sheets."
      );
    } catch (error) {
      console.error("Erro ao enviar os dados para a planilha:", error);
    } finally {
    }
  };
  // const enviarEmail = async (email: string) => {
  //   try {
  //     // Configurações do serviço de e-mail SMTP (neste caso, Gmail)
  //     const transporter = nodemailer.createTransport({
  //       service: 'gmail',
  //       auth: {
  //         user: 'seu_email@gmail.com',
  //         pass: 'sua_senha'
  //       }
  //     });

  //     // Opções do e-mail
  //     const mailOptions = {
  //       from: 'seu_email@gmail.com',
  //       to: email,
  //       subject: 'Assunto do e-mail',
  //       text: 'Corpo do e-mail'
  //     };

  //     // Enviar o e-mail
  //     const info = await transporter.sendMail(mailOptions);
  //     console.log("E-mail enviado:", info.response);
  //   } catch (error) {
  //     console.error("Erro ao enviar o e-mail:", error);
  //   }
  // };

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
