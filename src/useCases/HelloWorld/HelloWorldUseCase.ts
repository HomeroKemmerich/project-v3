import { IMessagesRepository } from "../../repositories/IMessagesRepository";
import { Message } from "../../entities/Message";

export class HelloWorldUseCase {
    constructor(
        private messageRepository: IMessagesRepository
    ) {}
    execute() {
        return this.messageRepository.getMessage(1);
    }
}

