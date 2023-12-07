import './App.css';
import AddPostForm from './features/post/AddPostForm';
import PostList from './features/post/PostList';
// import Counters from './features/counter/Counters';


function App() {
  return (
    <main className="App">
      <PostList/>
      <AddPostForm/>
    </main>
  );
}

export default App;