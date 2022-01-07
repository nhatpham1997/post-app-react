import React, { useContext } from "react";
import { PostContext } from "../contexts/GlobalContext";
import PostCard from "./PostCard";

function PostList() {
  const [listPost, setListPost] = useContext(PostContext);


  return (
    <div>
      {listPost.map((item) => (
        <PostCard
          key={item.id}
          id={item.id}
          createAt={item.createAt}
          content={item.content}
          imageUrl={item.imageUrl}
          comment={item.comment}
        />
      ))}
    </div>
  );
}

export default PostList;
