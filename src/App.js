import "./app.css";

// const handleBibleWord = () => {
//   fetch(
//     "https://api.biblia.com/v1/bible/search/ASV.js?query=let-there&mode=verse&start=0&limit=20&key=ad71372585262d43eebf20e7393e6757"
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
