/// <reference types= "cypress" />

import url from "../../fixtures/url.json";
import Navegar from "../../pages/navegar/Navegar";
import CadastroNatura from "../../pages/cadastro/Cadastro";
import mapeamento from "../../fixtures/mapeamentoformBodyShop.json";
const { userData } = require("../../support/userDados");
const user = userData();


const nav =new Navegar();
const natura = new CadastroNatura();

describe("Cadastrar Usuário - The Body Shop®", () => {
  beforeEach(() => {
    nav.visit(url.bodyShop);
  });

  it("Acessando a Home Page - Natura", () => {
    nav.validarTitulo("The Body Shop®");
  });

  it("Realizando o Cadastro - Natura", () => {
    natura.preencherForm(mapeamento,user)
  });
});

