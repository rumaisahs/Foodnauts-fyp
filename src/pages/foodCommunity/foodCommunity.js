import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BloggerIcon from "../../components/bloggerIcon/bloggerIcon";

const FoodCommunity = () => {
  return (
    <>
      <Navbar />
      <div className="container pb-5">
        <h2 className="text-center py-5"> Welcome to Our Food Community!</h2>
        <h3>Famous Food Bloggers</h3>
        <div className="d-flex flex-row flex-nowrap gap-4 overflow-x-auto pe-4 py-5 hidden-scrollbar">
          <BloggerIcon />
          <BloggerIcon />
          <BloggerIcon />
          <BloggerIcon />
          <BloggerIcon />
          <BloggerIcon />
          <BloggerIcon />
        </div>

      </div>
      <Footer />
    </>
  );
};

export default FoodCommunity;
