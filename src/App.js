import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './App.css';
import DeleteStudent from './components/deleteStudent';
import UpdateStudent from './components/updateStudent';
import Students from './components/students';
import AddNewStudents from './components/addNewStudents';
function App () {
  let {id} = useParams();
  return (
    <BrowserRouter>
    <div className="my-5 bg-light">
      <nav className="navbar navbar-expand-lg navbar-white bg-dark">
        <div className="container-md justify-content-center fs-1">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"  to="/">Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-students">New Students</Link>
        </li>
        </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Students />} />
        <Route  path="/new-students" element={<AddNewStudents />} />
        <Route  path="/delete/:id"  element={<DeleteStudent />} />
        <Route  path="/update/:id"  element={<UpdateStudent />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
