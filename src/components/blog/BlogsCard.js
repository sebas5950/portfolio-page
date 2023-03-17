import "./blog.css";
import med from "../../assets/Medium_70.png"
const BlogsCard = ({ blogData }) => {
  let { title, author, link, thumbnail } = blogData;
  console.table(blogData);
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <img src={med}/>
        <a href={link} target="blank"><button>Read More</button></a>
      </div>
    </section>
  );
};

export default BlogsCard;
