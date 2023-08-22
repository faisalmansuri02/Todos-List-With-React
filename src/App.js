import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

import TodoItem from './MyComponents/TodoItem';

function App() {
  let myVariable = 345;
  // new commit
  return (
    <>
    
  <Header title="My Todos List " searchBar={false}/>
  <Todos/>
  <TodoItem/>
  <Footer/>
    </>
  );
}

export default App;
