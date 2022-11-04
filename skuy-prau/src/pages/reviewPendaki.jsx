import Header from "../components/header"
import Footer from "../components/footer";
import FormPendaki from "../components/review/formReview";
import PendakiProcces from "../components/review/PendakiProcces";
import { Helmet } from "react-helmet-async";
import AutoTop from "../components/AutoTop";

export default function ReviewPendaki () {
    return (
        <>
            <div>
                {/* <video className="bg-review" autoPlay loop muted>
                    <source src={bground} type="video/mp4"/>
                </video> */}
                <Helmet>
                    <title>Review Prau</title>
                    <meta
                        name="Review Gunung Prau"
                        content="Get information from gunung prau"
                    /> 
                </Helmet>
                <AutoTop/>
                <Header name="Skuy Prau"/>
                <div className="content-form container" id="article">
                    <FormPendaki/>
                </div>
                <div className="list-form container">
                    <PendakiProcces/>
                </div>
                <Footer/>
            </div>
        </>
    )
}