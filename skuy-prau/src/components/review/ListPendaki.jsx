export default function ListPendaki(pendaki){
    return (
        <>
            <div className="list-pendaki" data-aos="flip-left">
                <div className="pendaki">
                    <p className="nama-pendaki">{pendaki.pendaki.nama}</p>
                </div>
                <div className="pendaki">
                    <p className="jalur-pendaki">Melewati jalur {pendaki.pendaki.jalur}</p>
                </div>
                <div className="pendaki">
                    <p className="review-pendaki">{pendaki.pendaki.review}</p>
                </div>
            </div>
        </>
    )
}