export interface BlogType {
  title: string;
  author: string;
  content: string;
  tags: [{name:string,id:string}];
  publishedDate: Date;
  featuredImage: string;
}
