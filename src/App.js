// import List from "./components/List";
// import { Route, Routes } from "react-router-dom";
// import ArticleFull from "./components/ArticleFull";
// import ArticleTeaser from "./components/ArticleTeaser";

// import Photos from "./components/Photos";

// import List from "./List";
// import ArticleTeaser from "./ArticleTeaser";
import { Route, Routes } from "react-router-dom";
// import Articles from "./components/Articles";

// import ArticleFull from "./components/ArticleFull";

// import Albums from "./components/Albums";
// import Album from "./components/Album";
import Photos from "./components/Photos";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleFull />} />

        <Route path="/" element={<Albums />} />
        <Route path="/albums/:id" element={<Album />} /> */}
        
        <Route path="/" element={<Photos />} />
        <Route path="/photos/:id" element={<Photo />} />
      </Routes>
    </div>
  );
}

export default App;
