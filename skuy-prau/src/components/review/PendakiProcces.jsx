/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { generateDiceBearAvataaars } from "../../utils/randomImage"
import { useSelector, useDispatch } from "react-redux";
import { fetchPendaki } from "../../store/features/pendakiSlice";

export default function PendakiProcces(){
    const dispatch = useDispatch()

    const [search, setSearch] = useState("");

    const listOfPendaki = useSelector((state) => state.pendaki.data)
    const componentStatus  = useSelector((state) => state.pendaki.componentStatus)

    useEffect(() => {
        dispatch(fetchPendaki());
    },[componentStatus, dispatch])

    return(
        <>  
            <div className="d-flex">
            <p className="fs-3 me-2 name-filter"><i className="fa-solid fa-sort me-2"></i>Filter</p>
            <select 
                className="border border-dark mb-4 w-25 form-select nama-jalur filter-option" 
                aria-label="Default select example"
                name="jalur"
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
                required>
                <option value="Patak Banteng">Patak Banteng</option>
                <option value="Dwarawati">Dwarawati</option>
                <option value="Kalilembu">Kalilembu</option>
                <option value="Wates">Wates</option>
                <option value="Dieng">Dieng</option>
            </select>
            </div>
            <div>
                {listOfPendaki.filter((val) => {
                    if (search === "") {
                        return val;
                    } else if (
                        val.jalur.toLowerCase().includes(search.toLowerCase())
                    ){
                        return val;
                    }
                }).map((val, key) => (
                    <div className="list-pendaki" data-aos="flip-left" key={key}>
                        <div className="random">
                            <img
                                className="rounded-circle img-random"
                                src={generateDiceBearAvataaars(Math.random())}
                                style={{ width: "80px", height: "80px", margin: "10px", padding: "10px"}}
                                alt="images"
                            ></img>
                        </div>
                        <div className="pendaki">
                            <p className="nama-pendaki">{val.nama}</p>
                        </div>
                        <div className="pendaki">
                            <p className="jalur-pendaki">Melewati jalur {val.jalur}</p>
                        </div>
                        <div className="pendaki">
                            <p className="review-pendaki">{val.review}</p>
                        </div>
                    </div> 
                ))}
            </div>
        </>
    )
}