import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Task {
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
