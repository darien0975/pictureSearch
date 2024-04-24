import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "9RLMYFGKrKJR70NlundeSLSUh3y7fygQycywGSAMZiedaIwrXGEa7zka";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  const search = async () => {
    let url;
    if (input === "") {
      url = initialURL;
    } else {
      url = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
    }

    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });

    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let url;
    if (currentSearch === "") {
      url = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      url = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    setPage(page + 1);

    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });

    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} setInput={setInput} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} key={d.id} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
