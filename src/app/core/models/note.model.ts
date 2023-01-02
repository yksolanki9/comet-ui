export interface Note {
  _id: string;
  createdAt: string;
  updatedAt: string;
  dateOfEntry: string;
  title: string;
  content: string;
  files?: any[];
}
