import Header from "../components/header";

import profile from "../assets/img/user.jpg"
import html from "../assets/about-img/html.png"
import css from "../assets/about-img/css.png"
import js from "../assets/about-img/js.png"
import react from "../assets/about-img/react.png"

export default function About() {
    return (
        <>
            <Header name="Skuy Prau" />
            <div className="Main container">
                <div className="profile shadow-lg p-3 mb-5 bg-body rounded mt-4" data-aos="slide-right">
                    <figure>
                        <img src={profile} alt="profile" className="photo-profile"/>
                        <figcaption className="name-profile">Kennedy Musyaffa Septian</figcaption>
                        <figcaption className="email-profile"><i className="fa-regular fa-envelope sosmed"></i>Musyaffa560@gmail.com</figcaption>
                    </figure>
                    <div className="list-sosmed">
                        <p className="sosmed-profile"><i className="fa-brands fa-github sosmed"></i>Septian182000</p>
                        <p className="sosmed-profile"><i className="fa-brands fa-linkedin sosmed"></i>kennedy musyaffa</p>
                        <p className="sosmed-profile"><i className="fa-brands fa-instagram sosmed"></i>@k_ken09</p>
                    </div>
                </div>
                <div className="madefrom">
                    <div className="title-madefrom" data-aos="fade-top">
                        <h1>made from</h1>
                    </div>
                    <div className="list-made">
                        <div className="card-made" data-aos="flip-up" data-aos-duration="600">
                            <img src={html} alt="html" className="logo-made"/>
                        </div>
                        <div className="card-made" data-aos="flip-up" data-aos-duration="700">
                            <img src={css} alt="css" className="logo-made css"/>
                        </div>
                        <div className="card-made" data-aos="flip-up" data-aos-duration="800">
                            <img src={js} alt="javascrpt" className="logo-made jvsript"/>
                        </div>
                        <div className="card-made" data-aos="flip-up" data-aos-duration="900">
                            <img src={react} alt="react" className="logo-made react"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}