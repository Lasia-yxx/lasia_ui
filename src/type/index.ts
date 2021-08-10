export interface AuthorInfo {
  name: string;
  avatar: string;
  [key: string]: any;
}

export interface Article {
  title: string;
  describe: string;
  createTime: string;
}
