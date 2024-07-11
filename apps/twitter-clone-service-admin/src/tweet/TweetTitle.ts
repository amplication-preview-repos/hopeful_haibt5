import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "content";

export const TweetTitle = (record: TTweet): string => {
  return record.content?.toString() || String(record.id);
};
