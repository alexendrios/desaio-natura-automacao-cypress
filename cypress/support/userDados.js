import faker_br from 'faker-br';

const userData = () => {
    const firstName = faker_br.name.firstName();
    const lastName = faker_br.name.lastName();
    const email = faker_br.internet.email();
    const senha = "@Chiquinho69";
    const cpf = faker_br.br.cpf();
    const telefone = faker_br.phone.phoneNumber();
    const dataNascimento = faker_br.date.between('1950-01-01', '2000-12-31').toLocaleDateString();
    while(telefone.length ==11){
        telefone = faker_br.phone.phoneNumber();
    }

    return {
        "firstName": firstName,
        "lastName": lastName,
        "email" : email,
        "senha": senha,
        "cpf": cpf,
        "telefone": telefone,
        "dataNascimento":dataNascimento
    };
}

module.exports = { userData };