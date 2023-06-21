import { Nav } from "react-bootstrap";
import "./NavBarS.scss";

export const NavBar = () => {
    return (
        <div className="NavBar">
            <Nav variant="underline" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0">tracks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">assets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">layers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">alerts</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};
