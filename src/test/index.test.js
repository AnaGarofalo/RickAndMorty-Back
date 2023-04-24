const app = require("../server");
const request = require("supertest");

describe("Test de rutas", () => {
  describe("GET rickandmorty/onsearch/{id}", () => {
    it("responde con status 200", async () => {
      const response = await request(app).get("/rickandmorty/onsearch/1");
      expect(response.statusCode).toEqual(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
      const arrayPropiedades = ["id", "name", "gender", "species", "image"];
      const response = await request(app).get("/rickandmorty/onsearch/1");
      const resultado = response.body;
      expect(Object.keys(resultado)).toContain(
        "id",
        "name",
        "gender",
        "species",
        "image"
      );
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await request(app).get(
        "/rickandmorty/onsearch/idCualquiera"
      );
      expect(response.statusCode).toEqual(500);
    });
  });

  describe("GET rickandmorty/detail/{id}", () => {
    it("responde con status 200", async () => {
      const response = await request(app).get("/rickandmorty/detail/1");
      expect(response.statusCode).toEqual(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "origin" e "image"', async () => {
      const response = await request(app).get("/rickandmorty/detail/1");
      const resultado = response.body;
      expect(Object.keys(resultado)).toContain(
        "id",
        "name",
        "gender",
        "origin",
        "species",
        "image"
      );
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await request(app).get(
        "/rickandmorty/detail/idCualquiera"
      );
      expect(response.statusCode).toEqual(500);
    });
  });

  describe("GET /rickandmorty/fav", () => {
    it("responde con status 200", async () => {
      const response = await request(app).get("/rickandmorty/fav");
      expect(response.statusCode).toEqual(200);
    });

    it("retorna un array", async () => {
      const response = await request(app).get("/rickandmorty/fav");
      expect(Array.isArray(response.body)).toEqual(true);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("responde con status 200", async () => {
      const response = await request(app).post("/rickandmorty/fav");
      expect(response.statusCode).toEqual(200);
    });

    it("retorna un { message: 'Agregado con éxito' }", async () => {
      const response = await request(app).post("/rickandmorty/fav");
      expect(response.body).toEqual({ message: "Agregado con éxito" });
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("responde con un status 200", async () => {
      const response = await request(app).delete("/rickandmorty/fav/1");
      expect(response.statusCode).toEqual(200);
    });

    it("retorna un {message:'Personaje borrado con éxito'}", async () => {
      const response = await request(app).delete("/rickandmorty/fav/1");
      expect(response.body).toEqual({ message: "Personaje borrado con éxito" });
    });
  });
});
