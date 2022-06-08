import { ListMessagesRepository } from "../../repositories/implementations/ListMessagesRepository";
import { HelloWorldController } from "./HelloWorldController";
import { HelloWorldUseCase } from "./HelloWorldUseCase";

const listMessagesRepository = new ListMessagesRepository();

const helloWorldUseCase = new HelloWorldUseCase(
    listMessagesRepository
);

const helloWorldController = new HelloWorldController(helloWorldUseCase);

export { helloWorldController, helloWorldUseCase };