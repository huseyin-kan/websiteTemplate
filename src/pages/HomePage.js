import Navbar from "../components/Navbar";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";


const HomePage = () => {
    return(
        <div className="flex flex-col w-full h-full">
            <Navbar />
            <PageContent />
            <Footer />
        </div>
    )
}
export default HomePage;