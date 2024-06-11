import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

export interface ITask {
  id: string;
  title: string;
  description: string | null;
  is_completed: boolean;
  inserted_at: Date;
  updated_at: Date;
}

@Entity()
export class Task extends BaseEntity implements ITask {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false, default: false })
  is_completed: boolean;

  @CreateDateColumn({ nullable: false })
  inserted_at: Date;

  @UpdateDateColumn({ nullable: false })
  updated_at: Date;
}
