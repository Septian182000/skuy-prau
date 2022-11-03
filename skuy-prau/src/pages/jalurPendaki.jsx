import Header from "../components/header";
import Footer from "../components/footer";
import JalurProcces from "../components/jalur/JalurProcces";

export default function JalurPendaki () {
    return (
        <>
            <Header name="Skuy Prau"/>
            <div className="list-form container">
                <JalurProcces/>
            </div>
            <Footer/>
        </>
    )
}