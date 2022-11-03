import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJalur } from "../../store/features/jalurSlice";
import ListAdminJalur from "./AdminJalurCheck";

export default function JalurAdminProcces(){
    const dispatch = useDispatch();
    const listOfJalur = useSelector((state) => state.jalur.dataJalur)
    const componentStatus  = useSelector((state) => state.jalur.componentStatus)

    useEffect(() => {
        dispatch(fetchJalur());
    },[componentStatus, dispatch])

    return(
        <>
            <div>
                <ul className="list-jalur-page">
                    {listOfJalur.map((jalur) => (
                        <ListAdminJalur key={jalur.id} jalur={jalur}/>
                    ))}
                </ul>
            </div>
        </>
    )
}