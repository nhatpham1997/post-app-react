import "./App.css";
import PostForm from "./components/PostForm";
import { GlobalProvider } from "./contexts/GlobalContext";
import PostList from "./components/PostList";
import AddPostButton from "./components/AddPostButton";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <AddPostButton />
        <PostForm />
        <PostList />
      </div>
    </GlobalProvider>
  );
}

export default App;
