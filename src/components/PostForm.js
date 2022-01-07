import React, { useContext, useState } from 'react';
import { PostContext, ShowFormContext } from '../contexts/GlobalContext';
import postApi from '../api/postApi';

const PostForm = ({ id, content }) => {
  const [value, setValue] = useState("");
  const [listPost, setListPost] = useContext(PostContext);
  const [showForm, setShowForm] = useContext(ShowFormContext);

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const onClose = () => {
    setShowForm(false)
  }

  const addPost = async () => {
    setListPost(prePosts => [...prePosts, { content: value }]);
    onClose();
    await postApi.create({ content: value })
  }

  return (
    <div className={`modal-overlay ${!showForm && "hidden"}`}>
      <div className={`modal-wrapper ${!showForm && "hidden"}`}>
        <h4>{!id ? "Chỉnh sửa bài viết" : "Tạo bài viết"}</h4>
        <div className='close-button' onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <input type="text" onChange={handleChange} placeholder='Bạn đang nghĩ gì thế?' />
        <div className='post-button'>
          <button onClick={addPost}>{!id ? "Chỉnh sửa" : "Đăng"}</button>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
