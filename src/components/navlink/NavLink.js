import React from 'react'
import * as Scroll from 'react-scroll';
import { ListItem } from './styles'

const NavLink = ({ section, onClick }) => {
    return (
        <ListItem>
            <Scroll.Link
                onClick={onClick}
                to={`${section.toLowerCase()}-section`}
                smooth
                duration={1100}>
                {section}
            </Scroll.Link>
        </ListItem>
    )
}

export default NavLink
