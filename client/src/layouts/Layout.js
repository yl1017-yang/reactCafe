import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function Layout(){
    return( 
    <main>
      <Header/>

      <Container fluid="xxl" >
        <Outlet/>
      </Container>

      <Footer/>
    </main>
    )
}

export default Layout;