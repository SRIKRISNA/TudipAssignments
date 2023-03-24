import logo from './logo.svg';
import './App.css';
import './components/user.css';
import Form from './components/UserForm';
import ViewUser from './components/ViewUser';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState();

  // function SearchResult(event) {
  //       event.preventDefault()
  //       setSearch(" ")
  //   }
  return (
    <div className="App">
      <h2>Candidates List</h2>
      <form>
                    <div className="searchBox">
                        {/* onKeyPress={searchMovie} */}
                        <input type="text" placeholder="Search Movie Name" className="searchText" onChange={(e) => { setSearch(e.target.value) }} value={search} ></input>
                        {/* <button className="search-btn" onClick={SearchResult}><i className="fas fa-search"></i></button> */}
                    </div>
                </form>
      <div className='mainContainer'>
        <div className='formOnly'><Form /></div>
        <div className='usersOnly'><ViewUser /></div>
      </div>
    </div>
  );
}

export default App;
