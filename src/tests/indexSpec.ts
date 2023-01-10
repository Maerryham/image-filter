import supertest from "supertest";
import routes from "../routes/index";


const request = supertest(routes);

describe("Test endpoint with responses", () => {
    it("It should get the api endpoint", async (
        done
    ) => {
        const response = await request
           .get("/images");
        expect(response.status).toBe(200);
        done();
    });
})