import './index.css'
import { levelsData } from '../../model/levelsData';
import {ReactComponent as ArrowRightSVG} from '../../assets/arrow-right.svg' 
import {ReactComponent as ArrowLeftSVG} from '../../assets/arrow-left.svg' 
import { useContext } from 'react';
import { EditorContext, LevelContext } from '../../Context';

export const GameDescription = ({level}) => {
    const {handleLevelIncr, handleLevelDecr } = useContext(EditorContext);

    const {minLevel, maxLevel} = useContext(LevelContext);

    return (
        <div className='description'>
            <div className='heading'>
                        <p className='level'>Level {level}</p>
                        <div>
                            {level > minLevel && <button className='control-btn' onClick={handleLevelDecr}><ArrowLeftSVG className='control-btn-image'/></button>}
                            {level < maxLevel && <button className='control-btn' onClick={handleLevelIncr}><ArrowRightSVG className='control-btn-image'/></button>}
                        </div>
             </div>
           {levelsData[level-1].description}
        </div>
    );
};