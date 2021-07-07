const request = require("supertest");
const app = require("../app");

describe("POST /nuevo-carro", () => {
  it("rsend json The Element add", (done) => {
    const data = {
      modelo: "2020",
      marca: "chevrolet",
      placa: "tye456",
    };
    request(app)
      .post("/api/v1/nuevo-carro")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(
        {
          code: 200,
          message: "Guadado correctamente",
        },
        done()
      );
  });


});
