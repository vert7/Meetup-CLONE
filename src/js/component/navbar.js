import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

const Example = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">
					<img className="img-meet" src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg" />
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink id="new-group" href="/components/">
								Start a new group
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="log-in" href="https://github.com/reactstrap/reactstrap">
								Log in
							</NavLink>
						</NavItem>
						<NavLink className="sign-up" href="/components/">
							Sign up
						</NavLink>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Example;
