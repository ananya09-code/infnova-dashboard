import logo from "../assets/logo.png";

interface LogoProps {
    style?: string;
}

function Logo({ style }: LogoProps) {
    return (
        <span>
            <img 
                src={logo} 
                alt="Logo" 
                className={style} 
            />
        </span>
    );
}

export default Logo;