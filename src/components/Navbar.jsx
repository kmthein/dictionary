import React, { useContext } from "react";
import { GiBookCover } from "react-icons/gi";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import { UiContext } from "../contexts/UiContext";
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { FiSun, FiMoon  } from "react-icons/fi";

const Navbar = () => {
    const {setDarkMode, darkMode} = useContext(UiContext);

    const toggleDarkMode = () => {
        if(darkMode) {
            setDarkMode(false);
            localStorage.removeItem("theme");
        } else {
            setDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    }

  return (
    <div className="py-8">
      <div className="flex items-center justify-between">
        <GiBookCover className="text-3xl" />
        <div className="flex gap-2 items-center">
        <Switch
        className="bg-[#c0c0c0]"
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={darkMode}
          onClick={toggleDarkMode}
        />
        {
            darkMode ?
            <FiMoon  className="text-xl text-[#cac24f]" /> :
            <FiSun className="text-xl text-[#ffad42]" /> 
        }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
