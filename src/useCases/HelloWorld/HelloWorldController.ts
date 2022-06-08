import { Request, Response } from "express";
import { HelloWorldUseCase } from "./HelloWorldUseCase";

export class HelloWorldController {
    constructor(
        private helloWorld: HelloWorldUseCase
    ) {}

    async handle(req: Request, res: Response) {
        try{
            const response = await this.helloWorld.execute();
            
            res.status(201).send(response);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}