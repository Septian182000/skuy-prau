export default function ListJalur({jalur}){
    return (
        <>
            <section className="oldGreen" data-aos="flip-right">
                <div className="container py-4">
                    <article className="postcard oldGreen blue">
                    <img className="postcard__img" src={jalur.image} alt={jalur.nama} />
                    <div className="postcard__text">
                        <h1 className="postcard__title blue">{jalur.nama}</h1>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">{jalur.descripsi}</div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fa-solid fa-person-hiking me-2"></i>{jalur.jarak}</li>
                            <div>
                                <li className={jalur.status ? 'buka' : 'tutup'}></li>
                            </div>
                        </ul>
                    </div>
                    </article>
                </div>
            </section>
        </>
    )
}