import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/index'
import { ToDoList, ToDoListStore } from './components/ToDoList';
console.log(store)
const App = () => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
