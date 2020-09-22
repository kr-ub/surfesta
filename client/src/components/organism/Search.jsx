import React, { useRef, useEffect, useCallback, useState } from "react";
import SearchButton from "../atom/main/SearchButton";
import "./Search.scss";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { startSearchEvents } from "../../redux/modules/events";
import { UNSPLASH_API_KEY } from "../../apiKey";
import axios from "axios";

export default function Search({ searchedKeyword }) {
  const dispatch = useDispatch();
  const [imgs, setImgs] = useState([]);
  const [value, setValue] = useState(searchedKeyword);
  const searchBack = useRef();
  const inputRef = useRef();
  const URL = "https://api.unsplash.com";

  const searchEvents = () => {
    const keyword = inputRef.current.value.trim();

    dispatch(startSearchEvents(keyword));
    dispatch(push(`/search/${keyword}`));
  };

  const submit = (e) => {
    e.preventDefault();
    searchEvents();
  };

  useEffect(() => {
    let ignore = false;
    async function getBackground() {
      const response = await axios.get(`${URL}/photos/random`, {
        params: {
          client_id: UNSPLASH_API_KEY,
          collections: "35262406",
          count: 1,
        },
      });
      if (!ignore) setImgs(response.data[0].urls.regular);
    }
    getBackground();
    return () => {
      ignore = true;
    };
  }, [setImgs]);

  return (
    <div
      className="search-back"
      ref={searchBack}
      style={{
        backgroundImage: `url(${imgs})`,
        backgroundPosition: "center",
      }}
    >
      <div className="search-wrap">
        <div className="center">
          <form onSubmit={submit}>
            <input
              placeholder="어떤 이벤트를 찾고 계세요?"
              aria-label="검색"
              ref={inputRef}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value ? value : ""}
              className={value ? "value" : ""}
            />
          </form>
          <div className="search-btn" onClick={searchEvents}>
            <SearchButton />
          </div>
        </div>
      </div>
    </div>
  );
}
