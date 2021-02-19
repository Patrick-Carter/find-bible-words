import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

import "./frontpage.scss";

let displaySearch;
let displayFrom;
let displayTo;

const FrontPage = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1000, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1600, itemsToShow: 4, itemsToScroll: 4 },
  ];

  const [search, setSearch] = useState("");

  const [selector, setSelectors] = useState({
    language: "english",
    translation: "ASV",
  });

  const [fromTo, setFromTo] = useState({
    from: "Genesis",
    to: "Revelation",
  });

  const [loading, setloading] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [verses, setVerses] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleTranslation = (e) => {
    setSelectors({ ...selector, translation: e.target.value });
  };

  const handleFrom = (e) => {
    setFromTo({ ...fromTo, from: e.target.value });
  };

  const handleTo = (e) => {
    setFromTo({ ...fromTo, to: e.target.value });
  };

  const handleSearch = () => {
    const query = search.trim().replace(" ", "-");
    setFullscreen(true);
    setloading(true);

    fetch(
      `https://api.biblia.com/v1/bible/search/${selector.translation}.js?query=${query}&mode=verse&passages=${fromTo.from}-${fromTo.to}&start=0&limit=100000&preview=text&sort=passage&key=ad71372585262d43eebf20e7393e6757`
    )
      .then((response) => response.json())
      .then((data) => {
        displaySearch = search.trim();
        displayFrom = fromTo.from;
        displayTo = fromTo.to;
        //time for animation
        setTimeout(() => {
          setVerses(data);
          setloading(false);
        }, 500);
      })
      .catch(() => {
        setloading(false);
      });
  };

  return (
    <div className="frontContainer">
      <div className={fullscreen ? "frontTop fullscreen" : "frontTop"}>
        {(verses && fullscreen && (
          <Carousel
            pagination={false}
            className="carousel"
            breakPoints={breakpoints}
          >
            {verses.results.map((verse, index) => {
              return (
                <div key={`verse${index}`} className="verseContainer">
                  <h2 className="passage">{verse.title}</h2>
                  <p className="verse">{verse.preview}</p>
                </div>
              );
            })}
          </Carousel>
        )) ||
          (fullscreen && <h2 className="loading">LOADING</h2>)}

        {!verses || !fullscreen ? (
          <h1 className="frontTitle">Find Bible Words</h1>
        ) : (
          <div className="center">
            <p className="details">{`${displaySearch || search} shows up ${
              verses.results.length
            } times between ${displayFrom || fromTo.from} and ${
              displayTo || fromTo.to
            }`}</p>
            <button
              style={{
                width: "35%",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "1rem",
              }}
              className="searchButton"
              onClick={() => {
                setFullscreen(false);
                setVerses(false);
              }}
            >
              New Search
            </button>
          </div>
        )}
      </div>
      <div className="frontBottom">
        <div className="frontBorder">
          <p className="frontSubtitle">in one place</p>
        </div>
        <div className="searchField">
          <label htmlFor="search">Search</label>
          <input
            name="search"
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="searchField">
          <div className="searchLane">
            <div className="selectField">
              <label>Language</label>
              <select value="english">
                <option value="english">English</option>
              </select>
            </div>
            <div className="selectField">
              <label>Translation</label>
              <select onChange={handleTranslation} value={selector.translation}>
                <option value="ASV">ASV</option>
                <option value="KJV">KJV</option>
                <option value="LEB">LEB</option>
              </select>
            </div>
          </div>
        </div>
        <div className="searchField">
          <div className="searchLane">
            <div className="selectField">
              <label>From</label>
              <input value={fromTo.from} onChange={handleFrom} />
            </div>
            <div className="selectField">
              <label>To</label>
              <input value={fromTo.to} onChange={handleTo} />
            </div>
          </div>
        </div>
        <button
          disabled={loading}
          className="searchButton"
          onClick={handleSearch}
        >
          Go!
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
