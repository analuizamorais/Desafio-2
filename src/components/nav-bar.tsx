import { Nav } from './style';

const NavBar: React.FC = () => {
    return (
        <header role="banner">
                <Nav role="navigation" >
                    <h1>ALICE IN COFFEELAND</h1>
                        <img src="https://www.clipartkey.com/mpngs/m/28-289263_transparent-alice-in-wonderland-clipart-we-re-all.png" alt="iphone" width="10%" height="auto"/>
                </Nav>
        </header>
    );
}

export default NavBar;