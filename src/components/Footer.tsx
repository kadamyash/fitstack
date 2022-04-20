import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faHistory, faHome, faNewspaper, faUser} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const [path, setPath] = useState('/');
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <div className='Footer'>
        <div className="navlinks">
            <Link to={'/'} className={path==='/'?'link active':'link'}><FontAwesomeIcon className='icon' size="2x" icon={faHome}/></Link>
            <Link to={'/history'} className={path==='/history'?'link active':'link'}><FontAwesomeIcon className='icon' size="2x" icon={faHistory}/></Link>
            <Link to={'/personal-trainer'} className={path==='/personal-trainer'?'link active':'link'}><FontAwesomeIcon className='icon' size="2x" icon={faDumbbell}/></Link>
            <Link to={'/fitness-articles'} className={path==='/fitness-articles'?'link active':'link'}><FontAwesomeIcon className='icon' size="2x" icon={faNewspaper}/></Link>
            <Link to={'account'} className={path==='/account'?'link active':'link'}><FontAwesomeIcon className='icon' size="2x" icon={faUser}/></Link>
        </div>
    </div>
  )
}
