import Navbar from './Header/Navbar'
import Home from './Content/Home'
import Layanan from './Content/Layanan'
import Artikel from './Content/Artikel'
import Form from './Content/Form'
import Footer from './Header/Footer'
import Copyright from './Header/Copyright'

function Homepages() {
    return(
        <>
        <section id="navbar">
            <Navbar/>
        </section>
        <section id="home">
            <Home/>
        </section>
        <section id="layanan">
            <Layanan/>
        </section>
        <section id="artikel">
            <Artikel/>
        </section>
        <section id="form">
            <Form/>
        </section>
        <section id="footer">
            <Footer/>
        </section>
        <section id="copyright">
            <Copyright/>
        </section>
        </>
    )
}

export default Homepages