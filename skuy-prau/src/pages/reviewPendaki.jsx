import Header from "../components/header"
import FormPendaki from "../components/review/formReview";
import PendakiProcces from "../components/review/PendakiProcces";

export default function ReviewPendaki () {
    return (
        <>
            <Header name="Skuy Prau"/>
            <div className="content-form container" id="article">
                <FormPendaki/>
            </div>
            <div className="list-form container">
                <PendakiProcces/>
            </div>
        </>
    )
}