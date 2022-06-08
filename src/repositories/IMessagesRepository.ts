import { Message } from '../entities/Message';

export interface IMessagesRepository {
    getMessage(code: number): Promise<Message>;
}