import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { useTheme } from "../providers/ThemeProvider";
import { SEARCH_PAGE_ROUTE, TOP_ALBUMS_PAGE_ROUTE } from "../utils/consts";
import lightLogo from "../assets/img/logo.svg";
import darkLogo from "../assets/img/dark-logo.svg";

export default function Header() {
  const { isLightTheme } = useTheme();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (searchInput) {
      navigate(`${SEARCH_PAGE_ROUTE}?query=${searchInput}`);
      setSearchInput("");
    }
  }

  return (
    <div className="header">
      <div className="header-part">
        <img
          src={isLightTheme ? darkLogo : lightLogo}
          alt="Logo"
          width={32}
          height={32}
          className="header-img"
        />
      </div>
      <div className="header-part">
        <Link to={TOP_ALBUMS_PAGE_ROUTE} className="home-btn">
          <GrHomeRounded />
        </Link>
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Что хочешь включить?"
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)}
          />
          <FiSearch className="search-icon" />
        </form>
      </div>
      <div className="header-part"></div>
    </div>
  );
}
