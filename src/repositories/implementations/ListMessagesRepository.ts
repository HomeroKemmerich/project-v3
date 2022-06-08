import { IMessagesRepository } from "../IMessagesRepository";
import { Message } from "../../entities/Message";

export class ListMessagesRepository implements IMessagesRepository {
    private messages: Message[] = [
        {
            code: 1,
            message: "Hello World",
        },
        {
            code: 2,
            message: "Bem vindo à API Telemetria Stara!",
        }
    ];

    public async getMessage(code: number): Promise<Message> {
        const message = this.messages.find(message => message.code === code);
        
        return message as Message;
    }
}
