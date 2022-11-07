import Header from "../components/header";
import Footer from "../components/footer";
import JalurProcces from "../components/jalur/JalurProcces";
import { Helmet } from "react-helmet-async";
import AutoTop from "../utils/AutoTop";

export default function JalurPendaki () {
    return (
        <>
            <Helmet>
                <title>Jalur Gunung Prau</title>
                <meta
                    name="Jalur Prau"
                    content="Get information from gunung prau"
                /> 
            </Helmet>
            <AutoTop/>
            <Header name="Skuy Prau"/>
            <div className="list-form container">
                <JalurProcces/>
            </div>
            <Footer/>
        </>
    )
}