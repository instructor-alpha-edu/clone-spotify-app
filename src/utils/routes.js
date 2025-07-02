import NotFoundPage from "../pages/NotFoundPage";
import SettingsPage from "../pages/SettingsPage";
import TopAlbumsPage from "../pages/TopAlbumsPage";
import TopArtistsPage from "../pages/TopArtistsPage";
import SingleAlbumPage from "../pages/SingleAlbumPage";
import {
  SETTINGS_PAGE_ROUTE,
  TOP_ALBUMS_PAGE_ROUTE,
  TOP_ARTISTS_PAGE_ROUTE,
  SINGLE_ALBUM_PAGE_ROUTE,
  SINGLE_ARTIST_PAGE_ROUTE,
} from "./consts";
import SingleArtistPage from "../pages/SingleArtistPage";

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
    path: SINGLE_ALBUM_PAGE_ROUTE,
    element: SingleAlbumPage,
  },
  {
    path: SINGLE_ARTIST_PAGE_ROUTE,
    element: SingleArtistPage,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
