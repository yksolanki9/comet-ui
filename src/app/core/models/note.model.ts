export interface Note {
  _id: string;
  createdAt: string;
  updatedAt: string;
  dateOfEntry: string;
  title: string;
  content: string;
  images: Image[];
  userId: string;
}

interface Image {
  fileId: string;
  name: string;
  size: number;
  versionInfo: {
    id: string;
    name: string;
  };
  filePath: string;
  url: string;
  fileType: string;
  height: number;
  width: number;
  thumbnailUrl: string;
}
