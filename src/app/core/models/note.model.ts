export interface Note {
  id: number | string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  files: any[];
};
