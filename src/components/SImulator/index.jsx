import { useContext } from 'react';
import { EditorContext, StyleContext } from '../../Context';
import { useEffect } from 'react';
import './index.css'
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg'
import { useParser } from '../../utils/useParser';
import { addCustomStyle } from '../../utils/addCustomStyle';

export const GameSimulator = ({label, level}) => {
    const { editorContent } = useContext(EditorContext);
    const { customStyle, setCustomStyle } = useContext(StyleContext);
    const {addStyle} = useParser();
    
    useEffect(() => {
        if (editorContent == "") setCustomStyle( addCustomStyle(level)); else addStyle();
    }, [editorContent]);

    useEffect(() => {
        setCustomStyle(addCustomStyle(level));
    }, []);

    return (
        <div className="game-simulator">
            <div id='text' className='text' style={customStyle}>{label}</div>
            <CanvasSVG id='simulator-svg'/>
        </div>
    );
};