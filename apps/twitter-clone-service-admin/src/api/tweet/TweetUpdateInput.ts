import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
