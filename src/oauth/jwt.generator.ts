import { Strategy } from 'passport-local';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtGenerator extends PassportStrategy(Strategy) {}