import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import AutoTop from "../components/AutoTop";
import { Sop, Rules, Warning} from "../assets/dummy/sop"

export default function About() {

    return (
        <>
            <Helmet>
                <title>SOP Gunung Prau</title>
                <meta
                    name="SOP"
                    content="Get information from gunung prau"
                />    
            </Helmet>
            <AutoTop/>
            <Header name="Skuy Prau" />
            <div className="Main container">
                <div className="three-things shadow-lg p-3 mb-5 bg-body rounded mt-4" data-aos="slide-down" id="article">
                    <div className="title-things">
                        <h1 className="text-center">3 hal terpenting</h1>
                    </div>
                    <div className="content-things">
                        {Sop.map((dataSop) => (
                            <div key={dataSop.id}>
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
                            <p className="title-rules" key={dataRules.id}><i className="fa-solid fa-circle-exclamation icon-rules"></i>{dataRules.title}</p>
                        ))}
                    </div>
                    <div className="rules shadow-lg mb-5 bg-body rounded" data-aos="slide-left">
                        <h1 className="mb-4">Larangan yang harus dipatuhi</h1>
                        {Warning.map((dataWarning) => (
                            <p className="title-rules" key={dataWarning.id}><i className="fa-solid fa-triangle-exclamation icon-warning"></i>{dataWarning.title}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}