import { IsString, MaxLength, IsNotEmpty } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  tarefa: string;
}
