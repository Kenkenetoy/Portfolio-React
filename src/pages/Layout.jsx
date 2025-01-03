import '../App.css';
import logo from '../assets/img/logo.png';
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav style={navStyle}>


                <ul style={listStyle}>
                    <li>
                    <Link to="/" style={linkStyle}>
                            <img src={logo} className="logo" />
                    </Link>
                    </li>

                    {/*<li style={itemStyle}>*/}
                    {/*    <Link to="/" style={linkStyle}>*/}
                    {/*        Home*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li style={itemStyle}>
                        <Link to="/shop" style={linkStyle}>
                            Shop
                        </Link>
                    </li>
                    <li style={itemStyle}>
                        <Link to="/about" style={linkStyle}>
                            About
                        </Link>
                    </li>
                    <li style={itemStyle}>
                        <Link to="/Login" style={linkStyle}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* This Outlet is the place in which react-router
    will render your components that you need with the navbar */}
            <Outlet />
        </>
    );
};


export default Layout;






const navStyle = {
    background: "linear-gradient(180deg,#ffffff 0%, #dbf9ff 100%)", 
    padding: "px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
};


const listStyle = {
    display: "flex",
    justifyContent: "space-evenly", // adjust the value here to adjust the spacing
    listStyle: "none",
    margin: "0",
    padding: "10px",
};
const itemStyle = {
    marginLeft: '10px'

};


const linkStyle = {
    color: "#333",
    textDecoration: "none",
};


const hoverStyle = {
    textDecoration: "underline",
};
