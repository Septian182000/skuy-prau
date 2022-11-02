import Header from "../components/header";

import html from "../assets/about-img/html.png"
import css from "../assets/about-img/css.png"
import js from "../assets/about-img/js.png"
import react from "../assets/about-img/react.png"

import { Sop, Rules, Warning} from "../assets/dummy/sop"

export default function About() {

    return (
        <>
            <Header name="Skuy Prau" />
            <div className="Main container">
                <div className="three-things shadow-lg p-3 mb-5 bg-body rounded mt-4" data-aos="slide-down" id="article">
                    <div className="title-things">
                        <h1 className="text-center">3 hal terpenting</h1>
                    </div>
                    <div className="content-things">
                        {Sop.map((dataSop) => (
                            <div>
                                <img src={dataSop.img} alt="profile" className="photo-content"/>
                                <p className="title-content text-center">{dataSop.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="list-rules">
                    <div className="rules shadow-lg mb-5 bg-body rounded" data-aos="slide-right">
                        <h1 className="mb-4">Peraturan</h1>
                        {Rules.map((dataRules) => (
                            <p className="title-rules"><i class="fa-solid fa-circle-exclamation icon-rules"></i>{dataRules.title}</p>
                        ))}
                    </div>
                    <div className="rules shadow-lg mb-5 bg-body rounded" data-aos="slide-left">
                        <h1 className="mb-4">Larangan yang harus dipatuhi</h1>
                        {Warning.map((dataWarning) => (
                            <p className="title-rules"><i class="fa-solid fa-triangle-exclamation icon-warning"></i>{dataWarning.title}</p>
                        ))}
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