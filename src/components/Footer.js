const Footer = () => {

    const LogoInfoSocial = () => {
        return(
            <div className="flex flex-col ">
                {/* Logo */}
                <div className="bg-white max-w-80 h-32">
                    <p className="text-center">Logo</p>
                </div>
                {/* Info */}
                <div className="max-w-80 max-h-32 pt-2 pl-1">
                    <p style={{fontSize: "14px"}} className="text-white tracking-wider">infotext infotext infotextinfotext infotextinfotext infotext infotext infotext infotext infotext infotext infotext infotext infotextinfotextinfotext infotext</p>
                </div>
                {/* Social */}
                <div className="flex flex-row gap-2 pt-2">
                    <a href="#" className="bg-white rounded-full h-7 w-7"></a>
                    <a href="#" className="bg-white rounded-full h-7 w-7"></a>
                    <a href="#" className="bg-white rounded-full h-7 w-7"></a>
                </div>
            </div>
        )
    }

    const QuickMenu = () => {
        return(
            <div className=" flex flex-col gap-2 w-42">
                <p className="text-white text-lg mb-3">HIZLI MENÜ</p>
                <a href="#" className="text-white text-md hover:text-gray-400">KURUMSAL</a>
                <a href="#" className="text-white text-md hover:text-gray-400">PROJELERİMİZ</a>
                <a href="#" className="text-white text-md hover:text-gray-400">GALERİ</a>
                <a href="#" className="text-white text-md hover:text-gray-400">BLOG</a>
                <a href="#" className="text-white text-md hover:text-gray-400">S.S.S</a>
                <a href="#" className="text-white text-md hover:text-gray-400">İLETİŞİM</a>
            </div>
        )
    }

    const OurProjects = () => {
        return(
            <div className="flex flex-col gap-2 w-42">
                <p className="text-white text-lg mb-3">PROJELERİMİZ</p>
                <a href="#" className="text-white text-md hover:text-gray-400">DEVAM EDEN PROJELER</a>
                <a href="#" className="text-white text-md hover:text-gray-400">GELECEK PROJELER</a>
                <a href="#" className="text-white text-md hover:text-gray-400">TAMAMLANAN PROJELER</a>
            </div>
        )
    }

    const Contacts = () => {
        return(
            <div className="flex flex-col gap-2 w-42">
                <p className="text-white text-lg mb-3">İLETİŞİM</p>
                <p className="text-white text-md mb-3">TELEFON: 0555 555 5555</p>
                <p className="text-white text-md mb-3">MAİL: site@mail.com</p>
                <p className="text-white text-md mb-3">FAKS: site.faksadresi</p>
                
            </div>
        )
    }

    return(
        <div className="bg-gray-900 flex w-full">
            <div className="lg:container lg:mx-auto lg:px-56 lg:py-20 px-5 py-8 flex flex-col lg:flex-row w-full">
                {/* <div className="flex lg:flex-row flex-col ml-5 gap-10 w-full">
                    <div>
                        <LogoInfoSocial />
                    </div>
                    <div className="lg:ml-16">
                        <QuickMenu />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col-reverse h-full w-full gap-10 mr-5">
                    <div className="lg:ml-24 h-full">
                        <OurProjects />
                    </div>
                    <div className="lg:ml-24  h-full">
                        <Contacts />
                    </div>
                </div> */}


                <div className="w-full">
                    <LogoInfoSocial />
                </div>

                <div className="flex flex-row mt-10 lg:mt-0 lg:ml-16">
                    <div className="w-1/2">
                        <QuickMenu />
                    </div>
                    <div className="w-1/2 lg:ml-24">
                        <OurProjects />
                    </div>
                </div>

                <div className="w-full mt-10 lg:mt-0 lg:ml-24">
                    <Contacts />
                </div>
            </div>
        </div>
    )
}
export default Footer;