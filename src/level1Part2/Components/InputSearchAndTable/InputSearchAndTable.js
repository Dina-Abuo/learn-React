import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function InputSearchAndTable() {
  const [term, setTerm] = useState("react");
  const [debounceSearch, setDebounceSearch] = useState(term);
  const [result, setResult] = useState([]);
  const prevTermState = useRef();
  useEffect(() => {
    prevTermState.current = term;
  });
  const prevTerm = prevTermState.current;

  // fix debounce api issue by multi useEffect
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceSearch(term);
    }, 1200);
    clearTimeout(timeOut);
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceSearch,
        },
      });
      setResult(respond.data.query.search);
    };
    search();
  }, [debounceSearch]);

  // useEffect(() => {
  //   const search = async () => {
  //     const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term,
  //       },
  //     });
  //     setResult(respond.data.query.search);
  //   };

  //   if (!result.length) {
  //     if (term) {
  //       search();
  //     }
  //   } else {
  //     const debounceSearch = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 1500);
  //     clearTimeout(debounceSearch);
  //   }
  // }, [term, result]);

  const fetchResult = result.map((el) => {
    return (
      <tr key={el.pageid}>
        <th scope="row">1</th>
        <td>{el.title}</td>
        <td>
          <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-8 ">
            <input
              className="form-control m-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />

            <p>
              current Term : {term} <br /> prev Term :{prevTerm}
            </p>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">title</th>
                  <th scope="col">snippet</th>
                </tr>
              </thead>
              <tbody>{fetchResult}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
