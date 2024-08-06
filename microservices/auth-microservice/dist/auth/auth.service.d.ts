import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'nestjs-prisma';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(data: CreateAuthDto): Promise<string>;
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
