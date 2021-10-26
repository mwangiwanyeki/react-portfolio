import "./intro.css";
import man from '../../img/team-one.png'
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jeremy Bezy</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Computer Technician</div>
                            <div className="i-title-item">Mathematician</div>
                            <div className="i-title-item">Youtuber</div>
                        </div>
                    </div>
                    <i className="desc">
                        <p> I design and develop services for customers of lall sizes, specillizing in creating stylish, modern websites, web services, computer maintenance, and Applied Mathematics workout.</p>
                    </i>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={man} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
