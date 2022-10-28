import slider1 from "../assets/img/slider1.jpg"
import slider2 from "../assets/img/slider2.jpg"
import slider3 from "../assets/img/slider3.jpg"

export default function Slider() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-light slide slider" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                <img src={slider1}className="d-block w-100" alt="slide1"/>
                <div className="carousel-caption d-none d-md-block text-light">
                    <h1>GUNUNG PRAU</h1>
                    <h4>Jika anda pemula maka Gunung Prau cocok untuk anda. Karena Jalur yang santai begitu juga Pemandangan yang aduhai. Ayo mulai pendakian anda di Gunung Prau 2.590 Mdpl.</h4>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                <img src={slider2} className="d-block w-100" alt="slide2"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>JALUR YANG SANTAI</h1>
                    <h4>Banyak pemandangan di berbagai jalur dan juga ada kendaraan roda dua yang bisa mengantar anda. Dan banyak juga tempat makan untuk anda ketika beristirahat.</h4>
                </div>
                </div>
                <div className="carousel-item">
                <img src={slider3} className="d-block w-100" alt="slide3"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>SUNRISE DAN SUNSET TERINDAH</h1>
                    <h4>Ajak temanmu atau keluargamu untuk melihat pemandangan diatas Gunung Prau. Anda juga bisa Bertatapan Langsung Dengan Logo yang ada di Aqua yaitu Gunung Sindoro dan Sumbing</h4>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}