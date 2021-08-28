import { useState, useEffect } from "react";
import PostsList from "./components/PostsList/PostsList";
import PostForm from "./components/PostForm/PostForm";
import MyModal from "./components/UI/MyModal/MyModal";
import PostsFilter from "./components/PostsFilter/PostsFilter";
import MyButton from "./components/UI/MyButton/MyButton";
import Loader from "./components/UI/Loader/Loader";
import getAll from "../src/API/PostsApi";
import { usePosts } from "./hooks/usePost";
import { useFeaching } from "./hooks/useFeaching";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  // FETCH Posts
  const [fetchPosts, isPostsLoading, postError] = useFeaching(async () => {
    const posts = await getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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

      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostsList
          posts={sortedAndSearchPosts}
          title={"Posts List"}
          remove={removePost}
        />
      )}

      {postError && <h3 className="error"> Error: {postError}</h3>}
    </div>
  );
}

export default App;
