import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import BlogDetails from './pages/BlogDetails.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogData/:id" element={<BlogDetails />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
