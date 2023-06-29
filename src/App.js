import logo from './logo.svg';
import './App.scss';
import AddTask from './component/ModalAddTask';
import ListTasks from './component/ListTasks';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';
function App() {
  const [filterStatus, setFilterStatus] = useState(null);
  return (
  <Provider store = {store}>
      <div className="App">
        <div className='container'>
          <AddTask filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
          <ListTasks filterStatus={filterStatus}/>
        </div>
      </div>
  </Provider>
  );
}

export default App;
