type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  tag: string[];
  reference: {
    exposed: string;
    url: string;
  }[];
};

export default PostType;
