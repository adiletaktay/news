import { Outlet, Link } from "react-router-dom"

import logoSvg from './assets/newslogo.svg'

const MainLayout = () => {
    return (
        <div className="header">
            <div className='container'>
                <Link to="/" className="header__logo">
                    <img width="100" src={logoSvg} alt="News logo" />
                    <div className="header-title">
                        <h1>NEWS</h1>
                        <p>The best news journal in the world</p>
                    </div>
                </Link>
                <div className='content'>
                    <Outlet />
                </div> 
            </div>
        </div>
    )
}

export default MainLayout;