import "./index.css"
import { useContext } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";

export const Editor = ({text, label, isValidAnswer, level}) => {
    const {handleContentChange} = useContext(EditorContext);

    const textModifier = () => {
        switch (level) {
            case 4: return ".background(.red)";
            case 5: return ".background(.green)"; 
            case 6: return ".background(.yellow)";
            default: return "";
        }
    }
    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            ${label}
            ${textModifier()}
`}
                </pre>
                <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={handleContentChange} style={{height: `${level < 3 ? "24px" : "48px"}`}}></textarea>
                <pre>
{`
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
