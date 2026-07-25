export const Card = ({ title, body, image }) => <div className="card">{image && <img src={image} alt="" />}<h3>{title}</h3><p>{body}</p></div>;
