import { useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import PostForm from "./components/PostForm/PostForm";
import MyModal from "./components/UI/MyModal/MyModal";
import PostsFilter from "./components/PostsFilter/PostsFilter";
import MyButton from "./components/UI/MyButton/MyButton";
import { usePosts } from "./hooks/usePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "React", body: "Description" },
    { id: 3, title: "CSS", body: "Description" },
    { id: 4, title: "Node.js", body: "Description" },
    { id: 5, title: "HTML", body: "Description" },
  ]);

  // CREATE, DELETE Posts
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // SORTED and SEARCH
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostsFilter filter={filter} setFilter={setFilter} />

      <PostsList
        posts={sortedAndSearchPosts}
        title={"Posts List"}
        remove={removePost}
      />
    </div>
  );
}

export default App;
