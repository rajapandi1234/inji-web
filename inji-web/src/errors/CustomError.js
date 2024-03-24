export class CustomError extends Error {
    constructor(message, details) {
        super(message);
        this.details = details;
    }
}
