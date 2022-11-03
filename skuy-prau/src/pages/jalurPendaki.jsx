import Header from "../components/header";
import Footer from "../components/footer";
import JalurProcces from "../components/jalur/JalurProcces";
import { Helmet } from "react-helmet-async";

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
            <Header name="Skuy Prau"/>
            <div className="list-form container">
                <JalurProcces/>
            </div>
            <Footer/>
        </>
    )
}