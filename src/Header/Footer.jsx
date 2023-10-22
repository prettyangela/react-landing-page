function Footer() {
    return(
        <>
        <footer id="contact">
            <div className="footer-section">
                <div className="logo">
                    <a href="#">
                        <span className="we">We</span><span className="health">Health</span>
                    </a>
                </div>	
            </div>
                
            <div className="footer-section">
                <h3>Lebih Dekat</h3>
                <a href="#"><p>Tentang WeHealth</p></a>
                <a href="#"><p>Kebijakan Privasi</p></a>
                <a href="#"><p>Syarat dan Ketentuan</p></a>
                <a href="#"><p>FAQ</p></a>
                <a href="#"><p>Karir</p></a>
            </div>
            <div className="footer-section">
                <h3>Social</h3>
                <a href="#">
                    <p><b>Youtube:</b> WeHealth Official</p>
                </a>
                <a href="#">
                    <p><b>Instagram:</b> WeHealth Official</p>
                </a>
                <a href="#">
                    <p><b>Facebook:</b> WeHealth Official</p>
                </a>
            </div>
        </footer>
        </>
    )
}

export default Footer