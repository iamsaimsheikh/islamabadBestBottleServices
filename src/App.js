import './App.css';
import Main from './containers/Main';
import {  BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
