import React, {useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Passwordeye = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleIconClick = () => {
        setShowPassword((prevState) => {
            props.handleClick(!prevState);
            return !prevState;
        })
    }
    return (
        <div className="absolute top-3.5 right-3 cursor-pointer">
            {showPassword ? (<VisibilityOffIcon onClick={handleIconClick}/>) : (<VisibilityIcon onClick={handleIconClick}/>)}
        </div>
    );
};

export default Passwordeye;
