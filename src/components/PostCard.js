import React, { useContext, useState } from "react";
import { ShowFormContext } from "../contexts/GlobalContext";
import PostForm from "./PostForm";

function PostCard({ id, content }) {
  const [idPost, setIdPost] = useState()
  const [showForm, setShowForm] = useContext(ShowFormContext);

  const onEdit = (id) => {
    setShowForm(true);

  };

  return (
    <div className="post-card-wrapper">
      <div className="post-card">
        <div className="content-card">
          <h4>{content}</h4>
        </div>
        <div className="button-card">
          <button onClick={() => onEdit}>Chỉnh sửa</button>
          <button>Bình luận</button>
          <button>Xóa</button>
        </div>
        <PostForm id={setIdPost} content={content} />
      </div>
    </div>
  );
}

export default PostCard;
