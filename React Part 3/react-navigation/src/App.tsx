import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";

function Home() {
  return <h2>Halaman Utama</h2>;
}

function About() {
  return <h2>Tentang Kami</h2>;
}

function Contact() {
  return <h2>Kontak Kami</h2>;
}

function NoMatch() {
  return <h2>Halaman tidak ditemukan</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
