import defaultImage from "../../assets/default.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : defaultImage}
        style={{ height: "300px", width: "326px", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 25)}...</h5>
        <p className="card-text">
          {" "}
          {description
            ? description.slice(0, 60)
            : "Apologies, it seems we're experiencing technical difficulties in fetching data from the news website at the moment. Please bear with us as we work to resolve this issue. Thank you for your patience."}
          ...
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
