module.exports = class Cliente {
  constructor(_id = 0, _nome = "", _telefone = "") {
    this.id = _id;
    this.nome = _nome;
    this.telefone = _telefone;
  }

  static primeiro() {
    return new Cliente();
  }

  nomeUpercase = () => {
    return this.nome.toUpperCase();
  };

  static todos() {
    return [
      new Cliente(1, "Joel 1", "123213123"),
      new Cliente(2, "Joel 2", "123213123"),
      new Cliente(3, "Joel 3", "123213123"),
      new Cliente(4, "Joel 4", "123213123"),
      new Cliente(5, "Joel 5", "123213123"),
      new Cliente(6, "Joel 6", "123213123"),
      new Cliente(7, "Joel 7", "123213123"),
      new Cliente(8, "Joel 8", "123213123"),
      new Cliente(9, "Joel 9", "123213123"),
      new Cliente(10, "Joel 10", "123213123"),
    ];
  }
};
