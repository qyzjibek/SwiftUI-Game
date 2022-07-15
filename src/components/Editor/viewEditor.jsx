import "./index.css"
import { useContext } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";
import {ReactComponent as ArrowRightSVG} from  '../../assets/arrow-right.svg'
import {ReactComponent as ArrowLeftSVG} from '../../assets/arrow-left.svg' 

export const ViewEditor = ({text, isValidAnswer, level}) => {
    const {handleContentChange, mode, setMode} = useContext(EditorContext);
    console.log(mode);

    const onIncrHandler = () => {
        console.log(mode);
        setMode((prev) => (prev < 3 ? prev + 1 : prev))
    }

    const onDecrHandler = () => {
        setMode((prev) => (prev > 1 ? prev - 1 : prev))
    }

    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <div className="btn-group">
                    <button className='control-btn' style={{width: "10px", margin: "10px", marginBottom:"0"}} onClick={onDecrHandler}><ArrowLeftSVG className='control-btn-image'/></button>
                    <button className='control-btn' style={{ margin: "10px", marginBottom:"0"}} onClick={onIncrHandler}><ArrowRightSVG className='control-btn-image'/></button>
                </div>
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            HStack {
`}
                </pre>
                {mode === 1 && <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: "24px", marginLeft: "125px", width: "70%"}}></textarea>}
                <pre>
{`
                Text("first")
`}
                </pre>
                {mode === 2 && <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: "24px", marginLeft: "125px", width: "70%"}}></textarea>}
                <pre>
{`
                Text("second")
`}
                </pre>
                {mode === 3 && <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: "24px", marginLeft: "125px", width: "70%"}}></textarea>}
                <pre>
{`
            }
        }
    }
`}
                </pre>
                <div>
                <CustomizedDialogs isValidAnswer={isValidAnswer} level={level}/>
                </div>
            </div>
        </div>
    );
};
