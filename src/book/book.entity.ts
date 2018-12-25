import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity('book')
export class BookEntity {
   @PrimaryGeneratedColumn('uuid')  
   id:string;

   @CreateDateColumn() 
   created: Date; 

   @UpdateDateColumn()
   updated: Date;   

   @Column('text') 
   book: string

   @Column('text')
   description: string;
 
}


