import Header from "../components/header"
import Footer from "../components/footer";
import FormPendaki from "../components/review/formReview";
import AdminProcces from "../components/review/AdminProcces";
import { Helmet } from "react-helmet-async";

export default function ReviewAdmin () {
    return (
        <>
            <Helmet>
                <title>Admin Check</title>
                <meta
                    name="Admin Check"
                    content="Get information from gunung prau"
                /> 
            </Helmet>
            <Header name="Skuy Prau"/>
            <div className="content-form container" id="article">
                <FormPendaki/>
            </div>
            <div className="list-form container">
                <AdminProcces/>
            </div>
            <Footer/>
        </>
    )
}