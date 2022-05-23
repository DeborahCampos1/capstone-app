import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header"
import Cryptocurrency from "./Components/Cryptocurrency";
import Profiles from "./Components/UserProfile/Profiles";
import Profile from "./Components/UserProfile/Profile";
import ProfileCreate from "./Components/UserProfile/ProfileCreate";
import ProfileEdit from "./Components/UserProfile/ProfileEdit";
import Education from "./Components/Education";
import PageNotFound from "./Components/PageNotFound";
import News from "./Components/News";
// import Popchat from "./Components/ChatBot/Popchat";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import NewsPage from "./Components/NewsPage"
import Videos from "./Components/Videos"
// import Bot from "./Components/ChatBot/Bot";
import Video from "./Components/Video";
import ProfileLogin from "./Components/UserProfile/ProfileLogin";
import ProfileDetails from "./Components/UserProfile/ProfileDetails";
// import MuiSandbox from "./Components/MuiSandbox";
// import AlanBot from "./Components/ChatBot/AlanBot"


function App() {
  return (
    <Router>
      <Header />
      <NavBar/>
      <Routes>
        {/* <Route path="/sandbox" element={<MuiSandbox />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="videos" element={<Videos />} />
        <Route path="/videos/:id" element={<Video />} /> */}
        <Route path="/users" element={<Profiles />} />
        <Route path="/users/:id" element={<Profile />} />
        {/* <Route path="/login-profile" element={<ProfileLogin />} /> */}
        {/* <Route path="/users/new" element={<ProfileCreate />} /> */}
        <Route path="/users/:id/edit" element={<ProfileDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      {/* <AlanBot /> */}
      {/* <Popchat /> */}
    </Router>
  );
}

export default App;
