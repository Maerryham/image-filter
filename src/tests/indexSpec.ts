import supertest from "supertest";
import routes from "../routes/index";


const request = supertest(routes);

describe("Test endpoint with responses", () => {
    it("It should get the api endpoint", async (
    ) => {
        request
           .get("/api/images/?filename=garden&height=500&width=500")
           .then(response => {
            expect(response.status).toBe(200);
            })
            .catch(error => {
                console.log(error);
            });
    });
})