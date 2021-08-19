import { useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import PostForm from "./components/PostItem copy/PostForm";
import MySelect from "./components/UI/select/MySelect";
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
  const [selectedSort, setSelectedSort] = useState("");

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MySelect
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
      <PostsList posts={posts} title={"Список постов"} remove={removePost} />
    </div>
  );
}

export default App;
