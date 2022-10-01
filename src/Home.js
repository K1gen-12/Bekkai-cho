import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header/>
            <h1>Home</h1>
            <div className="centering-btn">
                <Link to={'/RateSmell'} className="btn btn--green btn--radius">今のにおいを確認</Link>
            </div>
            <Footer/>
        </>
    );
};

export default Home;