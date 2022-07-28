import "./index.css";
import {Link} from "react-router-dom";
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg';
import ModifiersExampleIcon from '../../assets/modifier-example-icon.png';
import StacksExampleIcon from '../../assets/stack-example-icon.png';
import DescriptionInstruction from '../../assets/description-ins.png';
import EditorInstruction from '../../assets/editor-ins.png';
import InstructionsVideo from '../../assets/instructions.mp4';
import { useContext, useEffect } from "react";
import { StyleContext } from "../../Context";
import { useEditorContent } from "../../hooks/useEditorContent";
import { useParser } from "../../utils/useParser";

export const LandingPage = () => {
  const {editorContent, handleContentChange} = useEditorContent();
  const {addStyleToText} = useParser();
  const {customStyle, setCustomStyle} = useContext(StyleContext);

  useEffect(() => {
    if (editorContent == "") setCustomStyle({}); else addStyleToText(editorContent);
  }, [editorContent]);

  const onStartHandler = () => {
    localStorage.setItem('level', 1);
  }

return (
    <>
    <div className="header-section flex-column">
        <h1 className="header-text">Learn Code By Practicing <span className="pink-gradient">SwiftUI</span></h1>
        <h2 className="subhead-text" style={{width: "50%"}}>Learn to write apps by applying your knowledge.</h2>
        <Link to='/play' onClick={onStartHandler}>
            <button className="play-btn">Get started</button>
        </Link>
        <div className="example flex-example">
            <div className="landing-editor">
            <pre >
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            Text("Enjoy your journey")
`}
            </pre>
            <textarea 
            value={editorContent}
            onChange={e => handleContentChange(e.target.value)} 
            autocapitalize="none" 
            spellcheck="false" 
            placeholder=".background(.yellow)" 
            className="textarea-example">
            </textarea>
            <pre>
{`
        }
    }
}
`}
            </pre>
        </div>
        <div style={{position: "relative", display: "flex"}}>
            <CanvasSVG className='landing-simulator-svg'/>
            <div id='text' className='text custom-text' style={customStyle}>Enjoy your journey</div>
        </div>
        </div>
    </div>
        <div className="landing-instructions flex-column">
            <h1 className="header-text pink-gradient" style={{marginTop: "100px"}}>SwiftUI Adventure</h1>
            <div className="flex-start-block margin-right">
                <div className="grey-block"></div>
                <h2 className="desc-text">Read description</h2>
                <img src={DescriptionInstruction} alt={"instruction that displays instructions"} className="width-half"/>
            </div>
            <div className="flex-start-block margin-left">
                <div className="grey-block"></div>
                <h2 className="desc-text">Code in editor to complete task</h2>
                <img src={EditorInstruction} alt={"instruction that displays instructions"} className="width-half"/>
            </div>
            <div className="flex-start-block margin-right">
                <div className="grey-block"></div>
                <h2 className="desc-text">Read description</h2>
                <video className="width-half" controls={false} autoPlay muted >
                    <source src={InstructionsVideo} type="video/mp4"/>
                </video>                
            </div>
        </div>      
    <div className="learning-block flex-column">
        <h1 className="header-text">Our coding  <span className="pink-gradient ">Blocks</span></h1>
        <h2 className="subhead-text">We cover applying Text Modifiers, arranging views in Stack, and several types of Views</h2>
        <div className="learning-blocks flex-example example-wrapper">
            <div className="flex-column" style={{flex: "50%"}}>                
                <img className='landing-simulator-svg' src={ModifiersExampleIcon} alt="modifier similator example"/>
                <p style={{fontSize: "1.75rem", fontWeight: "600", marginTop: "32px"}}>Modifier Block</p>
                <h2 className="subhead-text block-description"><span style={{color: "rgb(0, 113, 227)", fontWeight: "600"}}>9 Levels </span>on Text Modifiers.
                    <p>Explore the ways of changing views based on the example of Text View and engage in learning SwiftUI with the basics.</p>
                </h2>
            </div>
            <div className="flex-column" style={{flex: "50%"}}>                
                <img className='landing-simulator-svg' src={StacksExampleIcon} alt="stack similator example"/>
                <p style={{fontSize: "1.75rem", fontWeight: "600", marginTop: "32px"}}>Stack Block</p>
                <h2 className="subhead-text block-description"><span style={{color: "rgb(0, 113, 227)", fontWeight: "600"}}>3 Levels </span>on Stacks and Custom Views.
                    <p>Learn to combine several views: arrage them in 3 types of stack and add Spacer & Divider to to draw custom view</p>
                </h2>
            </div>
        </div>
    </div>
    {/* <div className="advantage-wrapper flex-column">
        <div style={{width: "70%"}}>
            <h1 className="header-text" style={{color: "rgb(255, 37, 110)"}}>We 😍</h1>
            <h1 className="header-text" style={{color: "white"}}>VS</h1> 
            <h1 className="header-text" style={{color: "rgb(244, 156, 11)"}}>Articles, videos and courses</h1> 
            <h2 className="subhead-text" style={{color: "white", padding: "20px"}}></h2>
        </div>
    </div> */}
    <footer className="flex-column pad-2">
        <div className="footer-text">
            <p style={{color: "rgb(156,163,175)", marginBottom: "0"}}>Found a bug or want to say hi?</p>
            <a href="mailto:zhibekrahym05@gmail.com" style={{color: "rgb(156, 163, 175)"}}>Email me </a>
        </div>
        <div className="flex-row" style={{fontSize: "15px"}}>
            <p className="text-gray-600">
                <a href="https://github.com/qyzjibek/SwiftUI-Game">Github</a>
            </p>
            <p className="text-gray-600">
                <a href="https://www.linkedin.com/in/qyzjibek/">LinkedIn</a>
            </p>
            <p className="text-gray-600">
                <a href="https://www.instagram.com/nfactorial.school/">n! Incubator</a>
            </p>
        </div>
    </footer>
    </>
);
};