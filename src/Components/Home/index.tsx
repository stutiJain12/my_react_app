import "../../App.css";
import Header from "./Header";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
     
    <div className="homeheader mb-5">
      <Header />
    </div>
    <Welcome />

</div>
  );
};

export default Home;