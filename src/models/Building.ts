import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm';
  
  import Category from './Category';
  
  @Entity('buildings')
  class Building {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  
  @Column()
    name: string;
  
  @Column()
    latitude: string;
  
  @Column()
    longitude: string;

  @Column()
    descricao: string;
  
    @ManyToOne(() => Category, category => category.building, { eager: true })
    @JoinColumn({name: 'category_id'})
   category: Category;
  
  @Column()
    category_id: string;
  
  @CreateDateColumn()
    created_at: Date;
  
  @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Building;
  