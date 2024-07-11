import { User } from "../user/User";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  user?: User | null;
  comments?: Array<Comment>;
  likes?: Array<Like>;
};
