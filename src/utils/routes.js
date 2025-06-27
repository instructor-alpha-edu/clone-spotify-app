import NotFoundPage from "../pages/NotFoundPage";
import SettingsPage from "../pages/SettingsPage";
import TopAlbumsPage from "../pages/TopAlbumsPage";
import TopArtistsPage from "../pages/TopArtistsPage";
import { SETTINGS_PAGE_ROUTE, TOP_ALBUMS_PAGE_ROUTE, TOP_ARTISTS_PAGE_ROUTE } from "./consts";

export const routes = [
  {
    path: TOP_ALBUMS_PAGE_ROUTE,
    element: TopAlbumsPage,
  },
  {
    path: TOP_ARTISTS_PAGE_ROUTE,
    element: TopArtistsPage,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
