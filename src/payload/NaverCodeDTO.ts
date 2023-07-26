import { IsEmail, IsString, Length, ValidateIf } from "class-validator";

export class NaverCodeDTO {
    @Length(0,300)
    @IsString()
    @ValidateIf((object, value) => value !== null)
    code: string;
}

