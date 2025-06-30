import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength, IsNotEmpty } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString({ message: 'A tarefa deve ser uma string' })
  @MaxLength(255, { message: 'A tarefa não pode ter mais de 255 caracteres' })
  @IsNotEmpty({ message: 'A tarefa não pode estar vazia' })
  tarefa: string;
}
