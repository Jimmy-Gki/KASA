import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import img from "../../components/Images/home-banner.jpg";

export default function Home() {
    return (
        <div>
            <Banner src={img} title={"Chez vous, partout et ailleurs"} alt="Photo d'une côte" />
            <Card />
        </div>
    )
};