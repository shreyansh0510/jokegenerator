import React, { useState } from "react";
import axios from "axios";

const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

function Jokes() {
  const [joke, setJoke] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleGenerate = () => {
    getJoke();
  };

  const getJoke = async () => {
    setLoader(true);
    // ************ Using axios package ************
    try {
      let response = await axios.get(url);
      let data = await response.data;
      setJoke((prevJoke) => {
        return [...prevJoke, data];
      });
    } catch (e) {
      console.log("error", e);
    }
    setLoader(false);
  };

  console.log("jokes>>>>>>>>", joke);

  return (
    <>
      <h3>Generate Jokes in one click</h3>

      <div style={{ margin: 20 }}>
        {loader ? (
          <h3 style={{ color: "limegreen" }}>Loading...</h3>
        ) : (
          <button onClick={handleGenerate}>Generate</button>
        )}
      </div>

      {joke.reverse().map((item) => {
        return (
          <div>
            <h6 style={{ fontWeight: "normal", margin: "10px" }}>
              {item.joke}
            </h6>
          </div>
        );
      })}
    </>
  );
}

export default Jokes;

// ************ using fetch() API ************
// try {
//   await fetch(url)
//     .then((res) => res.json())
//     .then((data) => setJoke(data.joke));
// } catch (error) {
//   console.log("error", error);
// }
