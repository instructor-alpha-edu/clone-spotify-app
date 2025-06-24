export default function AlbumItem({ title, author, imageUrl }) {
  return (
    <div className="album-item">
      <img src={imageUrl} alt={title} className="album-poster" />
      <h4 className="album-title">{title}</h4>
      <p className="album-artist">{author}</p>
    </div>
  );
}
