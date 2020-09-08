import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)//React hook
    
    const MaskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const MenuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translatex(-100%)' },
    })



    return(
        <nav>
            <span className='text-xl'>
             <FontAwesomeIcon 
                icon={faBars}
                color='blue'
                onClick={() => setShowMenu(!showMenu)}
                 
                />
            </span>

            {
                MaskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div
                        className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
                         onClick={() => setShowMenu(false)}
                        key={key} 
                        style={props}>
                    </animated.div>
            )
            }

            {
                MenuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div
                        className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3' 
                        key={key} 
                        style={props}>
                        <span className='font-bold'>
                        This is the menu
                        </span>
                        <ul>
                            <li>Home</li>
                        </ul>
                    </animated.div>
            )
            }
        </nav>
    )
}

export default Navigation;