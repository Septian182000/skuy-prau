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
                    <i className="fa-solid fa-trash"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                </div>
            </div>
            {/* show modal */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-danger fw-bold" id="staticBackdropLabel">Warning</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4>This review will be delete permanently !!</h4>
                </div>
                <div class="modal-footer">
                    <div className="action-modal">
                        <i class="fa-regular fa-circle-xmark close-modal" 
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"></i>
                        <i class="fa-regular fa-circle-check delete-modal" 
                        onClick={() => dispatch(deletePendaki(pendaki.pendaki.id))} 
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"></i>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}