import "./app.scss";

// const handleBibleWord = () => {
//   fetch(
//     "https://api.biblia.com/v1/bible/search/ASV.js?query=let-there&mode=verse&start=0&limit=20&key=8a4cac274818e930031b0375fae61f42"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
import FrontPage from "./pages/frontpage/FrontPage";

function App() {
  return (
    <div className="App">
      <FrontPage />
    </div>
  );
}

export default App;
