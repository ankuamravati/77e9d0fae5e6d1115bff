import React, { useEffect, useState, useCallback } from "react";
import { pollPosts } from "../../services/pollingService";
import PostTable from "../PostTable";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  const fetchPosts = useCallback(
    async (pageNo) => {
      const { data, error } = await pollPosts(pageNo);
      if (error) {
        return;
      }
      setPosts(
        posts.concat(data.hits.map((data) => ({ ...data, id: data.objectID })))
      );
      setPageNo(pageNo + 1);
    },
    [posts]
  );
  useEffect(() => {
    const timer = setInterval(() => {
      fetchPosts(pageNo);
    }, 10000);
    return () => clearInterval(timer);
  }, [fetchPosts, pageNo]);
  return (
    <>
      <PostTable posts={posts} />
    </>
  );
};

export default Posts;
