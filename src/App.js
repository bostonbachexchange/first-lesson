import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Importing Routes instead of Switch
import BooksToBring from './components/BooksToBring';
import MaterialsToBring from './components/MaterialsToBring';
import PracticeAmount from './components/PracticeAmount';
import MusicComparisonBlog from './components/MusicComparisonBlog';
import Resources from './components/Resources';
import LessonIntro from './components/LessonIntro';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <nav >
          <ul className='nav-bar'>
        <div className='logo'><div className='text-center'><b>Jacob Clapper </b></div><div className='text-center'><em>Piano Studio</em></div></div>
            <li>
              <Link className='nav-customlink' to="/first-lesson">Lesson</Link>
            </li>
            <li>
              <Link className='nav-customlink' to="/books">Books</Link>
            </li>
            <li>
              <Link className='nav-customlink' to="/materials">Materials</Link>
            </li>
            <li>
              <Link className='nav-customlink' to="/practice">Practice</Link>
            </li>
            <li>
              <Link className='nav-customlink' to="/resources">Resources</Link>
            </li>
            {/* <li>
              <Link className='nav-customlink' to="/comparison">Digital or Paper?</Link>
            </li> */}
          </ul>
        </nav>

        <Routes> 
          <Route path="/books" element={<BooksToBring />} /> 
          <Route path="/materials" element={<MaterialsToBring />} />
          <Route path="/practice" element={<PracticeAmount />} />
          <Route path="/comparison" element={<MusicComparisonBlog />} />
          <Route path="/first-lesson" element={<LessonIntro />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
