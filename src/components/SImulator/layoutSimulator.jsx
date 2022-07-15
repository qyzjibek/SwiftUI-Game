import { useContext } from 'react';
import { EditorContext, StyleContext } from '../../Context';
import { useEffect,useState } from 'react';
import './index.css'
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg'
import { useParser } from '../../utils/useParser';
import { addCustomStyle } from '../../utils/addCustomStyle';

export const LayoutSimulator = ({level}) => {
    const { editorContent } = useContext(EditorContext);
    const { customStyle, setCustomStyle } = useContext(StyleContext);
    const {addStyle} = useParser();
    const [divSTyle, setDivStyle] = useState({});

    useEffect(() => {
        if (editorContent == "") setCustomStyle( addCustomStyle(level));
         else setDivStyle(addStyle(level));
    }, [editorContent]);

    useEffect(() => {
        setCustomStyle(addCustomStyle(level));
    }, []);

    return (
        <div className="game-simulator">
            <div id='stack' style={customStyle}>
                <div style={{width: "100%"}}></div>
                <div className='text' style={divSTyle}>first</div>
                <div style={{width: "100%"}}></div>
                <div className='text'>second</div>
                <div style={{width: "100%"}}></div>
            </div>
            <CanvasSVG id='simulator-svg'/>
        </div>
    );
};