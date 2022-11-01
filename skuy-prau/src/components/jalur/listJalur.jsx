export default function ListJalur(jalur){
    return (
        <>
            <div className="list-jalur">
                <div className="card-jalur">   
                    <div className="pendaki">
                        <img src={jalur.jalur.image} className="poto-jalur" alt=""/>
                    </div>
                    <div className="pendaki">
                        <p className="nama-jalur-page">{jalur.jalur.nama}</p>
                    </div>
                    <div className="pendaki">
                        <p className="harga-jalur-page">Harga tiket masuk : Rp.{jalur.jalur.harga}</p>
                    </div>
                </div>
            </div>
        </>
    )
}