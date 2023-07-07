import { HttpException, HttpStatus } from "@nestjs/common";

export class UzzimException extends HttpException {
    constructor() {
        super('Uzzim', HttpStatus.BAD_REQUEST);
    }
}