import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  tweets?: Array<Tweet>;
  comments?: Array<Comment>;
  likes?: Array<Like>;
};
