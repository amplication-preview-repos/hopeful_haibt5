import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
