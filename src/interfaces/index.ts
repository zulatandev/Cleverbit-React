export interface IComment {
  comment : string;
  date: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  comments: IComment[];
  like: number;
}
