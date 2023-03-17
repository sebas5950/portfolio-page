import "./blog.css"
import { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  let url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@AlexS.Guanipatin"
  
  useEffect(() => {
    const fetchBlog = async() => {
      const data = await fetch(url);
      const blogs = await data.json();
      setBlogData(blogs.items)
    }
    fetchBlog()
    .catch(console.error)
  }, [])
  
  const mappedData = blogData.map((blo, index) => {
    return <BlogsCard blogData = {blo} key={index} />
  })

  return (
    <section className="blog section" id="blogs">
      {mappedData}
    </section>
  );
};

export default Blogs;
