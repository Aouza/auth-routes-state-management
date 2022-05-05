import { useState } from "react";
import { Button, Input } from "../../components";
import { reqresApi } from "../../services/rest";
import { Container, LoginCard } from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await reqresApi.post("login", {
      email,
      password,
    });

    console.log(response.data.token);
  };
  return (
    <Container>
      <LoginCard>
        <h1>Login</h1>
        <p>Realize o login para consumir nosso melhor conteúdo</p>
        <Input
          type="email"
          label="E-mail"
          id="email"
          title="Digite seu e-mail"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          title="Digite seu password"
          placeholder="Password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </LoginCard>
    </Container>
  );
};
