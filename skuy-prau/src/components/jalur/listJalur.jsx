import { useDispatch } from "react-redux"
import { updateJalurById } from "../../store/features/jalurSlice"

export default function ListJalur({jalur}){
    const dispatch = useDispatch()
    return (
        <>
            <div className="list-jalur">
                <div className="card-jalur">   
                        <div className="pendaki">
                            <img src={jalur.image} className="poto-jalur" alt=""/>
                        </div>
                        <div className="content-desc">
                            <div className="content">
                                <div className="pendaki">
                                    <p className="nama-jalur-page">{jalur.nama}</p>
                                </div>
                                <div className="pendaki">
                                    <p className="harga-jalur-page">Harga tiket masuk : Rp.{jalur.harga}</p>
                                </div>  
                            </div>
                            <div 
                                className="status" 
                                onClick={() => {
							        dispatch(updateJalurById({ ...jalur, status: !jalur.status }));
						        }}>
                                <p className={jalur.status ? 'buka' : 'tutup'}></p>
                            </div>
                        </div>
                </div>
            </div>   
        </>
    )
}