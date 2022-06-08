export class Message {
    public readonly code: number;
    
    public message: string;

    constructor(code: number, message: string) {
        this.code = code;
        this.message = message;    
    }
}