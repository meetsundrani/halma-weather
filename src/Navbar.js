import logo from './logo.svg';

const Navbar = () => {
return (
    <nav className="navbar navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="./">
                <img src={logo} alt="App logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Weather App
            </a>
        </div>
    </nav>
);
}

export default Navbar;
