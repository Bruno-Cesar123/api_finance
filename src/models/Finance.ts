import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('finances')
class Finance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0.0 })
  value: number;

  @Column('timestamp with time zone')
  date: Date;
}

export default Finance;
