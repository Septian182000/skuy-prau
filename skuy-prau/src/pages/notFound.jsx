import Header from "../components/header"
import NotFoundImg from "../assets/notfound.jpg"
import { Helmet } from "react-helmet-async";

export default function NotFound(){
    return (
    <>
        <Helmet>
                <title>Halaman Tidak Ditemukan</title>
                <meta
                    name="404"
                    content="error"
                />    
            </Helmet>
        <Header name="Skuy Prau"/>
        <div className="container">
            <div className="Main">
                <img className="container-sm notFound" src={NotFoundImg} alt="404"/>
            </div>
        </div>
    </>
    )
}