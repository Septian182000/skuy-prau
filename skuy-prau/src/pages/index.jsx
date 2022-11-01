import Header from "../components/header";
import Slider from "../components/carousel";


import artOne from "../assets/artis-img/fiersa.jpg"
import artTwo from "../assets/artis-img/dzawin.jpg"
import artThree from "../assets/artis-img/anji.jpg"
import artFour from "../assets/artis-img/dinda.jpg"
import artFive from "../assets/artis-img/arafah.jpg"
import artSix from "../assets/artis-img/thomas.jpg"
import artSeven from "../assets/artis-img/ricis.jpg"
import artEight from "../assets/artis-img/naomi.jpeg"
import bground from "../assets/artis-img/background.mp4"

import hiking from "../assets/img/hiking.png"

export default function Home() {
    return (
        <>  
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
                <div className="artist">
                    <h1 className="title-artis container-sm" data-aos="fade-right">
                        Artis Yang Sudah Mendaki Gunung Prau
                    </h1>
                    <div className="list-artis" data-aos="fade-up" data-aos-duration="1000">
                        <video className="bg-artis" autoPlay loop muted>
                            <source src={bground} type="video/mp4"/>
                        </video>
                        <figure data-aos="fade-right" data-aos-duration="1600">
                            <img src={artOne} alt="fiersa" className="photo-artis"/>
                            <figcaption className="name-artis">Fiersa Bersari</figcaption>
                        </figure>
                        <figure data-aos="fade-right" data-aos-duration="1300">
                            <img src={artTwo} alt="dzawin" className="photo-artis"/>
                            <figcaption className="name-artis">Dzawin Nur</figcaption>
                        </figure>
                        <figure data-aos="fade-right" data-aos-duration="1000">
                            <img src={artThree} alt="anji" className="photo-artis"/>
                            <figcaption className="name-artis">Anji</figcaption>
                        </figure>
                        <figure data-aos="fade-right" data-aos-duration="700">
                            <img src={artFour} alt="dinda" className="photo-artis"/>
                            <figcaption className="name-artis">Dinda Kirana</figcaption>
                        </figure>
                        <figure data-aos="fade-right" data-aos-duration="400">
                            <img src={artFive} alt="arafah" className="photo-artis"/>
                            <figcaption className="name-artis">Arafah Rianti</figcaption>
                        </figure>
                        <figure data-aos="fade-right" data-aos-duration="1300">
                            <img src={artSix} alt="thomas" className="photo-artis"/>
                            <figcaption className="name-artis">Adinda Thomas</figcaption>
                        </figure>
                        <figure data-aos="fade-right" data-aos-duration="1000">
                            <img src={artSeven} alt="ricis" className="photo-artis"/>
                            <figcaption className="name-artis">Ria Ricis</figcaption>
                        </figure>
                        <figure data-aos="fade-right" data-aos-duration="700">
                            <img src={artEight} alt="naomi" className="photo-artis"/>
                            <figcaption className="name-artis">Naomi Zaskia</figcaption>
                        </figure>
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
                            <li className="container-sm"><i className="fa-solid fa-house-user list-icon"/>
                                Basecamp Buka Setiap Hari Tergantung Keadaan
                            </li>
                            <li className="container-sm"><i className="fa-solid fa-dollar-sign list-icon"></i>
                                Biaya tiket masuk Rp. 15,0000 / Orang
                            </li>
                            <li className="container-sm"><i className="fa-solid fa-dollar-sign list-icon"></i>
                                Biaya parkir motor Rp. 10,0000
                            </li>
                            <li className="container-sm"><i className="fa-solid fa-dollar-sign list-icon"></i>
                                Biaya parkir mobil Rp. 25,0000
                            </li>
                            <li className="container-sm"><i className="fa-solid fa-dollar-sign list-icon"></i>
                                Biaya naik ojek Rp.10,0000
                            </li>
                            <li className="container-sm"><i className="fa-solid fa-person-hiking list-icon"></i>
                                Jalur Patak Banteng jalur terfavorit
                            </li>
                        </ul>
                    </div>
                    <div className="info-jalur" data-aos="fade-down" data-aos-duration="700">
                        <div className="title-jalur">
                            <h1>jalur pendakian</h1>
                        </div>
                        <div className="list-jalur">
                        <figure>
                            <img src={hiking} alt="naomi" className="icon-jalur"/>
                            <figcaption className="name-jalur fs-5">Patak Banteng</figcaption>
                        </figure>
                        <figure>
                            <img src={hiking} alt="naomi" className="icon-jalur"/>
                            <figcaption className="name-jalur fs-5">Dwarawati</figcaption>
                        </figure>
                        <figure>
                            <img src={hiking} alt="naomi" className="icon-jalur"/>
                            <figcaption className="name-jalur fs-5">Dieng Wetan</figcaption>
                        </figure>
                        <figure>
                            <img src={hiking} alt="naomi" className="icon-jalur"/>
                            <figcaption className="name-jalur fs-5">Kalilembu</figcaption>
                        </figure>
                        <figure>
                            <img src={hiking} alt="naomi" className="icon-jalur"/>
                            <figcaption className="name-jalur fs-5">Wates</figcaption>
                        </figure>
                        <figure>
                            <img src={hiking} alt="naomi" className="icon-jalur"/>
                            <figcaption className="name-jalur fs-5">Igirmranak</figcaption>
                        </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}