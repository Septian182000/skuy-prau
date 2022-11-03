export default function Footer(){
    return(
        <>
        <footer>
            <div className="footer-content">
                <h3>Skuy Prau</h3>
                <p>Kamu mendaki gunung dengan tekad bukan karena nekat.</p>
                <ul className="socials">
                    <li><a href="https://www.instagram.com/prau_mountain/" target="_blank" without rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/groups/2588964871122800" target="_blank" without rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/prau_mountain"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fa fa-youtube"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2022 Key. designed by <span>human</span></p>
            </div>
        </footer>
        </>
    )
}