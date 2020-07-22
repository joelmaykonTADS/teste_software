const Cliente = require('../../../tdd_bdd_jasmine_cucumber/models/cliente')



describe("Clientes", () => {
  /**
   * @description é executado antes de todos os it's( )
   */
  beforeEach(async () => {});
  
  it("Valida propriedade de um cliente ", async () => {
    let cliente = Cliente.primeiro();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();
  });

  it("Retornar todos", async () => {
    let clientes = Cliente.todos();
    expect(clientes.length).toEqual(10);
  });

   it("Verificar nome maiusculo", async () => {
     let cliente = Cliente.primeiro();
     cliente.nome = "danilo";
     expect(cliente.nomeUpercase()).toEqual("DANILO");
   });
});
