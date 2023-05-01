import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from 'react';
import './navigation.css'
import MenuData from "../data/MenuData";


const Navigation = () => {
    const [showMenu, setShowmenu] = useState(false) //กำหนดค่า state เป็น false

    const toggleMenu = () => setShowmenu(!showMenu) //สร้าง function toggleMenu เมื่อคลิ๊ก icon bar จะสลับสถานะ true,false ถ้าเป็น true class=nav_menu จะมี class=active ขึ้น

    return (
        <aside>
            <div className="navbar">
                <div className="navbar_toggle">
                    <Link to="#" className="menu_bar">
                        <FaBars onClick={toggleMenu} />
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav_menu active" : "nav_menu"}>
                <ul className="nav_menu_item" onClick={toggleMenu}>
                    <li className="navbar_toggle">
                        <Link to="#" className="menu_bar">
                            <FaWindowClose />
                        </Link>
                    </li>

                    {MenuData.map((menu, index) => { //map ข้อมูล จากไฟล์ MenuData.js
                        return (
                            <li className="menu_text" key={index}>
                                <Link to={menu.path}>
                                    {menu.icon}
                                    <span>{menu.title}</span>
                                </Link>
                            </li>
                        )
                    })}


                </ul>
            </nav>
        </aside>
    )
}

export default Navigation