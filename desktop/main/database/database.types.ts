export interface IDocument {
  _id: string;
  _rev?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClient extends IDocument {
  type: 'client';
  rnc: string;
  name: string;
  comercialName?: string;
  activity?: string;
  status?: string;
  regime?: string;
}
