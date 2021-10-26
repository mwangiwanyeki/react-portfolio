import "./about.css";
import me from "../../img/technology.jpg";
import testing from "../../img/repair.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={me} className="a-img" alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    All software of any kind, desktop or online based
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur delectus, nihil quae aspernatur quos ea harum architecto
                    incidunt esse voluptatem aliquid obcaecati numquam ullam
                    maiores ratione aperiam magni odio nemo? Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Vero dolor sapiente magni
                    rerum non similique quos libero provident odit, quasi quae animi
                    nam, maxime beatae et omnis sit maiores! Molestias?
                </p>
                <div className="a-ward">
                    <img src={testing} alt="" className="a-ward-img" />
                    <div className="a-ward-texts">
                        <h4 className="a-ward-title">Computer Technician</h4>
                        <p className="a-ward-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
