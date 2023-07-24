import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button style={{ width: '3rem', height: '3rem', position: 'relative' }} variant="outline-primary" className="rounded-circle">
                    {/* svg from github: https://github.com/feathericons/feather/issues/1020 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m 11,10 0.497683,2 h 6 L 18,10 H 11 M 1,1 h 4 l 2.68,13.39 a 2,2 0 0 0 2,1.61 h 9.72 a 2,2 0 0 0 2,-1.61 L 23,6 H 6 m 15,15 a 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z m -11,0 a 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z" />
                    </svg>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 25%)' }}>
                        3
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    );
}
