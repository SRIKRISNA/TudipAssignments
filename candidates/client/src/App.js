import logo from './logo.svg';
import './App.css';
import './components/user.css';
import Form from './components/UserForm';
import ViewUser from './components/ViewUser';

function App() {

  return (
    <div className="App">
      <div className='mainContainer'>
        <div className='formOnly'><Form /></div>
        <div className='usersOnly'><ViewUser /></div>
      </div>
    </div>
  );
}

export default App;
