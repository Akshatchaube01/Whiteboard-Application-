import React from 'react';
import reactangleIcon from '../resources/icons/rectangle.svg';
import { toolType } from "../constants/toolType";
import { useDispatch,useSelector } from "react-redux";
import { setToolType } from './whiteboardSlice';
 
const IconButton = ({src,type}) => {
    const dispatch = useDispatch();

    const SelectedToolType = useSelector((state) => state.whiteboard.tool);

    const handleToolChange= () =>{
        dispatch(setToolType(type));
    };

    return <button onClick={handleToolChange}
    className={
        SelectedToolType === type ? 'menu_button_active' : 'menu_button'
    }>
        <img width='80%' height='80%' src={src} />
    </button>
}

const Menu = () =>{
    return (
        <div className='menu_container'>
            <IconButton src={reactangleIcon} type={toolType.RECTANGLE}/>
        </div>
    )
}

export default Menu;