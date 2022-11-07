import Header from "../components/header"
import Footer from "../components/footer";
import AdminProcces from "../components/review/AdminProcces";
import { Helmet } from "react-helmet-async";
import AutoTop from "../utils/AutoTop";

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
            <AutoTop/>
            <Header name="Skuy Prau"/>
            <div className="list-form container">
                <AdminProcces/>
            </div>
            <Footer/>
        </>
    )
}