import './index.css'
import { levelsData } from '../../model/levelsData';
import {ReactComponent as ArrowRightSVG} from '../../assets/arrow-right.svg' 
import {ReactComponent as ArrowLeftSVG} from '../../assets/arrow-left.svg' 
import { useContext } from 'react';
import { EditorContext } from '../../Context';

export const GameDescription = ({level}) => {
    const {handleLevelIncr, handleLevelDecr } = useContext(EditorContext);

    return (
        <div className='description'>
            <div className='heading'>
                        <p className='level'>Level {level}</p>
                        <div>
                            <button className='control-btn' onClick={handleLevelDecr}><ArrowLeftSVG className='control-btn-image'/></button>
                            <button className='control-btn' onClick={handleLevelIncr}><ArrowRightSVG className='control-btn-image'/></button>
                        </div>
             </div>
           {levelsData[level-1].description}
        </div>
    );
};