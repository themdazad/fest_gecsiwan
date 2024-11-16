import { Switch } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark")

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
    <Switch
      defaultSelected={theme === "dark"}
      size="lg"
      color="default"
      startContent={<MdDarkMode />}
      endContent={<MdOutlineWbSunny />}

      onChange={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
    >
    </Switch>
    </>
  )
};

export default ThemeSwitch