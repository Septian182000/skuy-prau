import Header from "../components/header"
import FormPendaki from "../components/review/formReview";
import PendakiProcces from "../components/review/PendakiProcces";

// import bground from "../assets/artis-img/bg2.mp4"

export default function ReviewPendaki () {
    return (
        <>
            <div>
                {/* <video className="bg-review" autoPlay loop muted>
                    <source src={bground} type="video/mp4"/>
                </video> */}
                <Header name="Skuy Prau"/>
                <div className="content-form container" id="article">
                    <FormPendaki/>
                </div>
                <div className="list-form container">
                    <PendakiProcces/>
                </div>
            </div>
        </>
    )
}