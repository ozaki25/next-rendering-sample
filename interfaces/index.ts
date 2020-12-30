export type User = {
  id: string;
  name: string;
  profile_image_url: string;
  items_count: number;
};

export type Item = {
  id: string;
  title: string;
  body: string;
  rendered_body: string;
  url: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
  userref: User;
};
