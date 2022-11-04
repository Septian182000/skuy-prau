import { useDispatch } from "react-redux"
import { deletePendaki } from "../../store/features/pendakiSlice"
import { generateDiceBearAvataaars } from "../../utils/randomImage"

export default function AdminCheck(pendaki){
    const dispatch = useDispatch();
    return (
        <>
            <div className="list-admin" data-aos="flip-left">
                <div>
                    <div className="random">
                    <img
                        className="rounded-circle img-random"
                        src={generateDiceBearAvataaars(Math.random())}
                        style={{ width: "80px", height: "80px", margin: "10px", padding: "10px"}}
                        alt="images"
                    ></img>
                    </div>
                    <div className="pendaki">
                        <p className="nama-pendaki">{pendaki.pendaki.nama}</p>
                    </div>
                    <div className="pendaki">
                        <p className="jalur-pendaki">Melewati jalur {pendaki.pendaki.jalur}</p>
                    </div>
                    <div className="pendaki text-center">
                        <p className="review-pendaki">{pendaki.pendaki.review}</p>
                    </div>
                </div>
                <div className="action">
                    <i className="fa-solid fa-trash" onClick={() => dispatch(deletePendaki(pendaki.pendaki.id))}></i>
                </div>
            </div>
        </>
    )
}