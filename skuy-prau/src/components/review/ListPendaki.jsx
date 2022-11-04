import { generateDiceBearAvataaars } from "../../utils/randomImage"

export default function ListPendaki({ pendaki }){
    return (
        <>
            <div className="list-pendaki" data-aos="flip-left">
                <div className="random">
                <img
                    className="rounded-circle img-random"
                    src={generateDiceBearAvataaars(Math.random())}
                    style={{ width: "80px", height: "80px", margin: "10px", padding: "10px"}}
                    alt="images"
                ></img>
                </div>
                <div className="pendaki">
                    <p className="nama-pendaki">{pendaki.nama}</p>
                </div>
                <div className="pendaki">
                    <p className="jalur-pendaki">Melewati jalur {pendaki.jalur}</p>
                </div>
                <div className="pendaki">
                    <p className="review-pendaki">{pendaki.review}</p>
                </div>
            </div>
        </>
    )
}