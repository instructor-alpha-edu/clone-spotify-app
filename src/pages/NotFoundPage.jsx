import { Link } from "react-router";
import { TOP_ALBUMS_PAGE_ROUTE } from "../utils/consts";

export default function NotFoundPage() {
  return (
    <div className="wrapper">
      <div className="nf-container">
        <h2 className="nf-title">
          Страница не найдена. Перейдите на{" "}
          <Link to={TOP_ALBUMS_PAGE_ROUTE}>главную страницу.</Link>
        </h2>
      </div>
    </div>
  );
}
