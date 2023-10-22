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
            <Navbar/>
            <Home/>
            <Layanan/>
            <Artikel/>
            <Form/>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Homepages