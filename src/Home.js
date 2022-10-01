import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header/>
            <h1>Home</h1>
            <Link to={'/RateSmell'} className="btn btn--green btn--radius">今のにおいを確認</Link>
            <Footer/>
        </>
    );
};

export default Home;