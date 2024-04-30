import {Router} from "express";
import {UserController} from "../controller/user.controller";

export class UserRouter {

    public router: Router = Router();
    userController: UserController = new UserController();

    public constructor() {
        this.routes();

    }

    public routes() {

        // GET request for all users
        this.router.get("/users", this.userController.getUsers);

        // GET request for a single user by id
        this.router.get("/user/:id", (_req, res) => {
            res.send(`GET request to the homepage with id: ${_req.params.id}`);
        });

        // POST request to create a new user
        this.router.post("/add", (_req, res) => {
            res.send("POST request to the homepage");
        });

        // PUT request to update a user by id
        this.router.put("/update/:id", (_req, res) => {
            res.send("PUT request to the homepage");
        });

        // DELETE request to delete a user by id
        this.router.delete("/delete/:id", (_req, res) => {
            res.send("DELETE request to the homepage");
        });
    }
}