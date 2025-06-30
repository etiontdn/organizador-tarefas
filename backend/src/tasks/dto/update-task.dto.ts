import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength, IsNotEmpty } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  tarefa: string;
}
