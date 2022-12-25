export interface Note {
  _id: string;
  createdAt: string;
  updatedAt?: string;
  title: string;
  content: string;
  files?: any[];
}
