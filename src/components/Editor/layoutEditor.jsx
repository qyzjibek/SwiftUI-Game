import "./index.css"
import { useContext } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";

export const LayoutEditor = ({text, isValidAnswer, level}) => {
    const {handleContentChange} = useContext(EditorContext);

    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
`}
                </pre>
                <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: "24px"}}></textarea>
                <pre>
{`
            {
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
