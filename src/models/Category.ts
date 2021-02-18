import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm';

  import Building from './Building';
  
  @Entity('categories')
  class Category {
  
  @PrimaryGeneratedColumn('uuid')
    id: string;
  
  @Column()
    title: string;

  @OneToMany(() => Building, building => building.category)
  building: Building;
  
  @CreateDateColumn()
    created_at: Date;
  
  @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Category;
  