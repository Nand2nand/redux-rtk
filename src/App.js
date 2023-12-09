import './App.css';
import AddPostForm from './features/post/AddPostForm';
import PostList from './features/post/PostList';
// import Counters from './features/counter/Counters';


function App() {
  return (
    <main className="App">
      <AddPostForm/>
      <PostList/>
    </main>
  );
}

export default App;