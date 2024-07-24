
export class CreateUserDto {
  // @IsString()
  // @IsNotEmpty()
  email: string;
  
  password: string;
  
  name: string;
}
