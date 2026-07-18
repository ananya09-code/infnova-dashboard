import logo from "../assets/logo.png";
import icon from "../assets/icon.png";

interface LogoProps {
    style?: string;
    type?: 1 | 2;
}

const images = {
    1: logo,
    2: icon,
};

function Logo({ style, type = 1 }: LogoProps) {
    return (
        <span>
            <img
                src={images[type]}
                alt="Logo"
                className={style}
            />
        </span>
    );
}

export default Logo;