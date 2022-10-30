import { Link } from "react-router-dom"
import photo from "../assets/img/logo.png"

export default function Header(title) {
    return(
        <>
        <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-light navBar">
        <a href="#article" class="skip-link">Menuju ke konten</a>
            <div className="container">
                <a className="navbar-brand title" href="/">
                    <img src={photo} alt="logo" className="me-2 logo"/>
                    {title.name}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto link">
                        <li className="nav-item me-4">
                            <Link className="nav-link active text-light" to="/review-pendaki">Review</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
        </>
    )
}