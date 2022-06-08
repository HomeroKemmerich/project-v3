import { Router } from "express";
import { helloWorldController } from "./useCases/HelloWorld";

const router = Router();

router.post("/", (req, res) => {
    return helloWorldController.handle(req, res);
})

export { router }