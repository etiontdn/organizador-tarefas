import { IsString, MaxLength, IsNotEmpty } from 'class-validator';
export class CreateTaskDto {
  @IsString({ message: 'A tarefa deve ser uma string' })
  @MaxLength(255, { message: 'A tarefa não pode ter mais de 255 caracteres' })
  @IsNotEmpty({ message: 'A tarefa não pode estar vazia' })
  tarefa: string;
}
