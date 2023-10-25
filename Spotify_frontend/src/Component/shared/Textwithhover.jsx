
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Texthover = ({ displayText,active,targetLink }) => {
    return (
        <Link to={targetLink  } >


        <div className="flex items-center justify-start cursor-pointer"  >
            
            <div  className={`${active ? "text-white" : "text-gray-500"}  text-sm font-semibold hover:text-white`}>{displayText}</div>
        </div>
      </Link>
    )
}

export default Texthover;