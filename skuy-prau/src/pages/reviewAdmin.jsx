import Header from "../components/header"
import FormPendaki from "../components/review/formReview";
import AdminProcces from "../components/review/AdminProcces";

export default function ReviewAdmin () {
    return (
        <>
            <Header name="Skuy Prau"/>
            <div className="content-form container" id="article">
                <FormPendaki/>
            </div>
            <div className="list-form container">
                <AdminProcces/>
            </div>
        </>
    )
}