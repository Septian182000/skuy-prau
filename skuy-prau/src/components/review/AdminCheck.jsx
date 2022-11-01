import { useDispatch } from "react-redux"
import { deletePendaki } from "../../store/features/pendakiSlice"

export default function AdminCheck(pendaki){
    const dispatch = useDispatch();
    return (
        <>
            <div className="list-admin" data-aos="flip-left">
                <div>
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
                <div className="action">
                    <i className="fa-solid fa-trash" onClick={() => dispatch(deletePendaki(pendaki.pendaki.id))}></i>
                </div>
            </div>
        </>
    )
}