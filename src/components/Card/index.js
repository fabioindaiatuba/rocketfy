import React from "react";

import { Container, Label } from "./styles";

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer migração do servidor</p>
      <img
        src="https://avatars1.githubusercontent.com/u/12553186?s=400&u=bf0c0f8a30c04ce524153f9cb15e0ad2c324cd66&v=4"
        alt=""
      />
    </Container>
  );
}
