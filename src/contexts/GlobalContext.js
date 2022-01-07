import React, { createContext, useState, useEffect } from "react";
import postApi from "../api/postApi";

export const PostContext = createContext();
export const ShowFormContext = createContext();

export function GlobalProvider({ children }) {
  const [listPost, setListPost] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await postApi.getAll();
        setListPost(response);
      } catch (error) {
        console.log("Failed to fetch post list: ", error);
      }
    };
    fetchPostList();
  }, []);
  return (
    <PostContext.Provider value={[listPost, setListPost]}>
      <ShowFormContext.Provider value={[showForm, setShowForm]}>
        {children}
      </ShowFormContext.Provider>
    </PostContext.Provider>
  );
}
