import { useContext } from 'react';
import { EditorContext } from '../../Context';
import { useEffect } from 'react';
import './index.css'
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg'
import { useParser } from '../../utils/useParser';


export const GameSimulator = ({label, level}) => {
    const {editorContent, customStyle} = useContext(EditorContext);
    const {addStyle, addCustomStyle} = useParser();
    
    useEffect(() => {
        addStyle();
    }, [editorContent]);

    useEffect(() => {
        addCustomStyle(4);
    }, []);

    return (
        <div className="game-simulator">
            <div id='text' className='text' style={customStyle}>{label}</div>
            <CanvasSVG id='simulator-svg'/>
        </div>
    );
};