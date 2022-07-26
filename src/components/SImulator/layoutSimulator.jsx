import { useContext } from 'react';
import { EditorContext, StyleContext } from '../../Context';
import { useEffect,useState } from 'react';
import './index.css'
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg'
import { useParser } from '../../utils/useParser';
import { addCustomStyle } from '../../utils/addCustomStyle';

export const LayoutSimulator = ({level}) => {
    const { editorContent, mode } = useContext(EditorContext);
    const { customStyle, setCustomStyle } = useContext(StyleContext);
    const {addStyle, declareFunction} = useParser();
    const [divSTyle, setDivStyle] = useState({});

    useEffect(() => {
        if (editorContent == "") setCustomStyle( addCustomStyle(level));
         else setDivStyle(addStyle(level));
    }, [editorContent]);

    useEffect(() => {
        console.log("adding custom style");
        setCustomStyle(addCustomStyle(level));
    }, []);

    return (
        <div className="game-simulator">
            <div id='stack' style={customStyle}>
                {mode === 1 && <>{declareFunction()}</>}
                <div className='text' style={divSTyle}>first</div>
                {mode === 2 && <>{declareFunction()}</>}
                <div className='text'>second</div>
                {mode === 3 && <>{declareFunction()}</>}
            </div>
            <CanvasSVG id='simulator-svg'/>
        </div>
    );
};