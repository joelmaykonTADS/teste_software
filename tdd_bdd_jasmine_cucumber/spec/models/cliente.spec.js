describe("Clientes", () => {
  /**
   * @description é executado antes de todos os it's( )
   */
  beforeEach(async () => {});

  it("Retornar todos", async () => {
    let clientes = Cliente.todos();
    expect(clientes.length).toEqual(10);
  });

  it("Retornar todos", async () => {
    let clientes = Cliente.primeiro();
    expect(clientes.id).not.toBeDefined();
    expect(clientes.nome).not.toBeDefined();
    expect(clientes.telefone).not.toBeDefined();
  });
});
