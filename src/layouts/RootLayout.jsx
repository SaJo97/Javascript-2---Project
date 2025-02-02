import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Providers from "../components/Providers"

const RootLayout = () => {
  return (
    <Providers>
      <div id='root'>
        <Navbar />
        {/* Gör en container för outlet kanske */}
        <main>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </Providers>
  )
}
export default RootLayout