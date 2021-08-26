import { useState, useMemo } from "react";
import PostsList from "./components/PostsList/PostsList";
import PostForm from "./components/PostItem copy/PostForm";

import PostsFilter from "./components/PostsFilter/PostsFilter";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "React", body: "Description" },
    { id: 3, title: "CSS", body: "Description" },
    { id: 4, title: "Node.js", body: "Description" },
    { id: 5, title: "HTML", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // SORTED and SEARCH
  const [filter, setFilter] = useState({ sort: "", query: "" });
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("getSortedPosts");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearch = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostsFilter filter={filter} setFilter={setFilter} />

      <PostsList
        posts={sortedAndSearch}
        title={"Posts List"}
        remove={removePost}
      />
    </div>
  );
}

export default App;
