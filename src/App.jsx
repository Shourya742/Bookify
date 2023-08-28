import { Routes, Route } from "react-router-dom";

//Components
import MyNavbar from "./components/Navbar";

//pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import BookDetailPage from "./pages/Detail";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookId" element={<BookDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
