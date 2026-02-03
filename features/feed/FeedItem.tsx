// features/feed/FeedItem.tsx
import { FeedPost } from "./types";
import TextPost from "./components/TextPost";
// import ImagePost from "./posts/ImagePost";
// import LivePost from "./posts/LivePost";
// import ProductPost from "./posts/ProductPost";
import AudioPost from "./components/AudioPost";
// import SuggestedFriends from "./posts/SuggestedFriends";

export default function FeedItem({ post }: { post: FeedPost }) {
  switch (post.type) {
    case "text":
      return <TextPost post={post} />;

    // case "image":
    // case "gallery":
    //   return <ImagePost post={post} />;

    // case "live":
    //   return <LivePost post={post} />;

    // case "product":
    //   return <ProductPost post={post} />;

    case "audio":
      return <AudioPost post={post} />;

    // case "suggested_friends":
    //   return <SuggestedFriends />;

    default:
      return null;
  }
}
