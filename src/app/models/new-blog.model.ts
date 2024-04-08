export interface NewBlog { // Interface for new blog data
  title: string;
  content: string;
  creator_id: number;
  upvotes: number;
  tagname: string;
}