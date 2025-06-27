export default function ArtistItem({ name, imageUrl }) {
  return (
    <div className="artist-item">
      <img src={imageUrl} alt={name} className="artist-poster" />
      <h4 className="artist-name">{name}</h4>
      <p className="artist-type">Исполнитель</p>
    </div>
  );
}
