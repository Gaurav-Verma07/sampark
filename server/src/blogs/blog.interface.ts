export interface BlogType {
  name: string;
  slug: string;
  image: string;
  title: string;
  author: string;
  content: string;
  tags: [{ name: string; id: string }];
  publishedDate: Date;
  featuredImage: string;
}
