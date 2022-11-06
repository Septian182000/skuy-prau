import Header from "../components/header";
import Slider from "../components/carousel";
import Footer from "../components/footer";
import SwiperImage from "../components/swiper";
import { Helmet } from 'react-helmet-async';
import { Artis, Info, InfoJalur } from "../assets/dummy/home"
import AutoTop from "../components/AutoTop";

export default function Home() {
    return (
        <>  
            <Helmet>
                <title>Skuy Prau</title>
            </Helmet>
            <AutoTop/>
            <Header name="Skuy Prau" />
            <div id="article">
                <Slider/>
            </div>
            <div className="Main container">
                <div className="article">
                    <h1 className="title-article container-sm" data-aos="fade-up">Article Tentang Gunung Prau</h1>
                    <h4 className="desc container-sm" data-aos="fade-right" data-aos-duration="800">Gunung Parahu adalah salah satu gunung di Dataran Tinggi Dieng, Jawa Tengah, Indonesia memiliki ketinggian 2.590 mdpl terletak pada koordinat 7°11′13″S 109°55′22″E yang mana keberadaannya juga merupakan tapal batas antara empat kabupaten yaitu Kabupaten Batang, Kabupaten Kendal, Kabupaten Temanggung dan Kabupaten Wonosobo. Puncak dari gunung Parahu merupakan padang rumput luas yang memanjang dari barat ke timur. Bukit-bukit dan sabana dengan sedikit pepohonan dapat dijumpai pada puncaknya. Gunung ini menjadi salah satu tujuan pendakian utama di Dataran Tinggi Dieng sebagai salah satu spot sunrise favorit bagi wisatawan.
                    </h4>
                </div>
                <div className="control-swiper container">
                    <h1 className="title-swiper container-sm">kata mereka</h1>
                    <SwiperImage/>
                </div>
                <div className="artist">
                    <h1 className="title-artis container-sm" data-aos="fade-right">
                        Artis Yang Sudah Mendaki Gunung Prau
                    </h1>
                    <div className="list-artis" data-aos="fade-up" data-aos-duration="1000">
                        <video className="bg-artis" autoPlay loop muted>
                            <source src="https://firebasestorage.googleapis.com/v0/b/mini-project-366904.appspot.com/o/assets%2Fbackground.mp4?alt=media&token=ac91d304-0387-435f-b29c-00e40534654a" type="video/mp4"/>
                        </video>
                        {Artis.map((dataArtis) => (
                            <figure data-aos="fade-right" data-aos-duration="1000" key={dataArtis.id}>
                                <img src={dataArtis.img} alt={dataArtis.nama} className="photo-artis"/>
                                <figcaption className="name-artis">{dataArtis.nama}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
                <div className="map">
                    <h1 className="title-map container-sm" data-aos="fade-right">gunung prau on map</h1>
                    <iframe title="myFrame" className="gmaps" id="gmap_canvas" data-aos="fade-up" data-aos-duration="700" src="https://maps.google.com/maps?q=gunung%20prau&t=k&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
                <div className="last-info container">
                    <div className="info-prau" data-aos="fade-up" data-aos-duration="700">
                        <h1 className="container-sm">INFO PENDAKIAN</h1>
                        <ul className="list-info">
                            {Info.map((infoPrau) => (
                                <li className="container-sm" key={infoPrau.id}><i className={infoPrau.icon}/>
                                    {infoPrau.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="info-jalur" data-aos="fade-down" data-aos-duration="700">
                        <div className="title-jalur">
                            <h1>jalur pendakian</h1>
                        </div>
                        <div className="list-jalur">
                        {InfoJalur.map((jalur) => (
                            <figure key={jalur.id}>
                                <img src={jalur.img} alt={jalur.nama} className="icon-jalur"/>
                                <figcaption className="name-jalur fs-5">{jalur.nama}</figcaption>
                            </figure>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}