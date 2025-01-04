export interface Promotion {
  id?: number;
  nameRu: string;
  nameRo: string;
  descriptionRu: string;
  descriptionRo: string;
  image?: any;
  discount: number;
  start_date: Date | string | null;
  end_date: Date | string | null;
}
