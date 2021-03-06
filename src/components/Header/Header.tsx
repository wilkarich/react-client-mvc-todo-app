import React from "react";
import {Link} from "react-router-dom";

import {Space} from "components";
import StorageSelect from "./StorageSelect/StorageSelect";

import './header.scss';

function Header() {
	return (
		<div className="header">
			<div className="container">
                <Space direction="horizontal" style={{alignItems: "center"}}>
                    <h1 className="header__logo">Todo Application</h1>
                    <nav className="nav">
                        <Link to="/tasks" className="nav__link">Tasks</Link>
                        <Link to="/categories" className="nav__link">Categories</Link>
                    </nav>
                    <StorageSelect/>
                </Space>
			</div>
		</div>
	);
}

export default Header;