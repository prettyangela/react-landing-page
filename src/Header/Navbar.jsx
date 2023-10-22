function Navbar() {
    return(
        <>
        <nav>
            <div className="wrapper">
                <div className="logo"><a href="#"><span className="we">We</span><span className="health">Health</span>
                </a></div>
                <div className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#layanan">Layanan</a></li>
                        <li><a href="#artikel">Baca Artikel</a></li>
                        <li><a href="#contact">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar