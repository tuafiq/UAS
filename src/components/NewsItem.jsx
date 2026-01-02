import image from "../assets/News.jpg";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 h-100 flex-column"
      style={{ maxWidth: "345px" }}
    >
      <img
  src={src ? src : image}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = image;
  }}
  style={{ height: "200px", width: "325px", objectFit: "cover" }}
  className="card-img-top"
  alt="news"
/>

      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text text-secondary">
          {description ? description.slice(0, 110) : ""}
        </p>
        <a
  href={url}
  target="_blank"
  rel="noreferrer"
  className="btn btn-outline-primary btn-sm mt-auto"
>
  Baca Selengkapnya
</a>

      </div>
    </div>
  );
};

export default NewsItem;
