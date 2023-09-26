/// <reference types= "cypress" />

import url from "../../fixtures/url.json";
import Navegar from "../../pages/navegar/Navegar";
import CadastroNatura from "../../pages/cadastro/Cadastro";
import mapeamento from "../../fixtures/mapeamentoformNatura.json";
const { userData } = require("../../support/userDados");
const user = userData();


const nav =new Navegar();
const natura = new CadastroNatura();

describe("Cadastrar Usuário - Natura", () => {
  beforeEach(() => {
    nav.visit(url.natura);
  });

  it("Acessando a Home Page - Natura", () => {
    nav.validarTitulo("Natura");
  });

  it("Realizando o Cadastro - Natura", () => {
    natura.preencherForm(mapeamento,user)
  });
});

