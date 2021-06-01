import { Response, createServer } from "miragejs"// Create a new server instance - Intercepts the requests

if (process.env.NODE_ENV === "development") {

  const server = createServer({
    urlPrefix: "http://localhost:8080/",
    namespace: "",
    routes() {
      this.get("/checkToken", (schema, request) => {
        const token = request.requestHeaders.authorization;
        if (token.startsWith('Bearer')) {
          return new Response(200,
            { "Content-Type": "application/json" },
            { data: "true" }
          );
        }
        return new Response(401,
          { "Content-Type": "application/json" },
          {
            "status": 401,
            "error": "Unauthorized",
            "message": "",
            "path": "/authenticate"
          });

      });

      this.post("/register", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        schema.db.users.insert(attrs);
        return new Response(200,
          { "Content-Type": "application/json" },
          attrs
        );
      });

      this.post("/authenticate", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)

        let user = schema.db.users.findBy({ email: attrs.email });

        if (user.password === attrs.password) {
          return new Response(200,
            { "Content-Type": "application/json" },
            {
              "jwtToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dXNoYXJAZ21haWwuY29tIiwiZXhwIjoxNjE4MDM3MDE4LCJpYXQiOjE2MTc2MDUwMTh9.xDD9tm-SQEafpQAM4wRz8Or4UyITq9oX6a54LmrOWa5DCLxnwvd-s6lbXvKg8wgDotWe1mMrg9FGwe5H57P98Q"
            }
          );
        }

        return new Response(401,
          { "Content-Type": "application/json" },
          {
            "status": 401,
            "error": "Unauthorized",
            "message": "",
            "path": "/authenticate"
          });
      });
    },
  });

  server.db.loadData({
    users: []
  })
}