import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.info(`Inserted User with id ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.info(`Updated User with id ${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.info(`Removed User with id ${this.id}`);
  }
}
