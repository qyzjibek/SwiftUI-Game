import "./index.css"
import { useContext } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";
import {ReactComponent as ArrowRightSVG} from  '../../assets/arrow-right.svg'
import {ReactComponent as ArrowLeftSVG} from '../../assets/arrow-left.svg' 

export const ViewEditor = ({text, isValidAnswer, level}) => {
    const {handleContentChange} = useContext(EditorContext);

    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <div className="btn-group">
                    <button className='control-btn' style={{width: "10px", margin: "10px", marginBottom:"0"}}><ArrowLeftSVG className='control-btn-image'/></button>
                    <button className='control-btn' style={{ margin: "10px", marginBottom:"0"}}><ArrowRightSVG className='control-btn-image'/></button>
                </div>
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            HStack {
`}
                </pre>
                <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: "24px", marginLeft: "125px", width: "70%"}}></textarea>
                <pre>
{`
                Text("first")
                Text("second")
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
