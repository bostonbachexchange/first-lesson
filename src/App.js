import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Importing Routes instead of Switch
import BooksToBring from './components/BooksToBring';
import MaterialsToBring from './components/MaterialsToBring';
import PracticeAmount from './components/PracticeAmount';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/books">Books to Bring</Link>
            </li>
            <li>
              <Link to="/materials">Materials to Bring</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/books" element={<BooksToBring />} /> {/* Use "element" prop */}
          <Route path="/materials" element={<MaterialsToBring />} />
          <Route path="/practice" element={<PracticeAmount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
