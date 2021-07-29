import { v4 as uuid } from 'uuid';

class Finance {
  id: string;

  type: string;

  description: string;

  value: string;

  date: Date;

  constructor({ type, description, value, date }: Omit<Finance, 'id'>) {
    this.id = uuid();
    this.type = type;
    this.description = description;
    this.date = date;
    this.value = value;
  }
}

export default Finance;
