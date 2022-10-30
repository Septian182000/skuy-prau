import { useEffect } from "react";
import AdminCheck from "./AdminCheck";
import { useSelector, useDispatch } from "react-redux";
import { fetchPendaki } from "../../store/features/pendakiSlice";

export default function AdminProcces(){
    const dispatch = useDispatch()
    const listOfPendaki = useSelector((state) => state.pendaki.data)
    const componentStatus  = useSelector((state) => state.pendaki.componentStatus)

    useEffect(() => {
        dispatch(fetchPendaki());
    },[componentStatus, dispatch])

    return(
        <>
            <div>
                <ul>
                    {listOfPendaki.map((pendaki) => (
                        <AdminCheck key={pendaki.id} pendaki={pendaki}/>
                    ))}
                </ul>
            </div>
        </>
    )
}