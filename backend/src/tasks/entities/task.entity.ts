import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  tarefa: string;
}
