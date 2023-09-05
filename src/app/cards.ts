export interface Cards {
  title: string;
  date: string;
  photoCover: string;
  id: string;
}

export interface BigCards extends Cards {
  description: string;
}
