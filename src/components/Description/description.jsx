import './index.css'
import { levelsData } from '../../model/levelsData';

export const GameDescription = ({level}) => {
    
    return (
        <div className='description'>
           {levelsData[level-1].description}
        </div>
    );
};