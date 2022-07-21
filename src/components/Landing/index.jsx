import "./index.css";
import {Link} from "react-router-dom";
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg';
import ModifiersExampleIcon from '../../assets/modifier-example-icon.png';
import StacksExampleIcon from '../../assets/stack-example-icon.png';
import { GameSimulator } from "../SImulator";
import { Editor } from "../Editor/editor";

export const LandingPage = ({setlevel}) => {
    const onStartHandler = () => {
        localStorage.setItem('level', 1);
    }

    return (
        <>
        <div className="header-section flex-column">
            <h1 className="header-text">Learn Code By Practicing <span className="blue-gradient">SwiftUI</span></h1>
            <h2 className="subhead-text">No more boring courses, videos and articles.
    Learn to code in a revolutionary new, fun, and effective way.</h2>
            <Link to='/play' onClick={onStartHandler}>
                <button className="play-btn">Get started</button>
            </Link>
            <div className="example flex-row">
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
                autocapitalize="none" 
                spellcheck="false" 
                placeholder=".background(.yellow)" 
                style={{height: "24px", width: "70%", marginLeft: "120px"}} >
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
                <div id='text' className='text custom-text'>Enjoy your journey</div>
            </div>
            </div>
        </div>
        <div className="advantage-wrapper flex-column">
            <div style={{width: "70%"}}>
                <h1 className="header-text" style={{color: "rgb(84, 196, 188)"}}>We 😍</h1>
                <h1 className="header-text" style={{color: "white"}}>VS</h1> 
                <h1 className="header-text" style={{color: "rgb(0, 113, 227)"}}>Articles, videos and courses</h1> 
                <h2 className="subhead-text" style={{color: "white", padding: "20px"}}>We are the next-generation platform for learning code by playing games that combines the missing parts of traditional learning: a tremendous amount of practice and an engaging learning environment.</h2>
            </div>
        </div>
        <div className="learning-block flex-column">
            <h1 className="header-text">Our coding  <span style={{color: "#b0b", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"}}>Blocks</span></h1>
            <h2 className="subhead-text">We cover applying Text Modifiers, arranging views in Stack, and several types of Views</h2>
            <div className="learning-blocks flex-row example-wrapper">
                <div className="flex-column">                
                    <img className='landing-simulator-svg' src={ModifiersExampleIcon} alt="modifier similator example"/>
                    <p style={{fontSize: "1.5rem", fontWeight: "600", marginTop: "32px"}}>Modifier Block</p>
                    <h2 className="subhead-text block-description">We are the next-generation platform for learning code by playing games that combines the missing parts of traditional learning: a tremendous amount of practice and an engaging learning environment.</h2>
                </div>
                <div className="flex-column">                
                    <img className='landing-simulator-svg' src={StacksExampleIcon} alt="stack similator example"/>
                    <p style={{fontSize: "1.5rem", fontWeight: "600", marginTop: "32px"}}>Stack Block</p>
                    <h2 className="subhead-text block-description">We are the next-generation platform for learning code by playing games that combines the missing parts of traditional learning: a tremendous amount of practice and an engaging learning environment.</h2>
                </div>
            </div>
        </div>
        <footer>
            <div className="mb-4">
                <p style={{color: "rgb(156,163,175)"}}>Found a bug or want to say hi?</p>
                <a href="mailto:zhibekrahym05@gmail.com" style={{color: "rgb(156, 163, 175)"}}>Email me </a>
            </div>
        </footer>
        </>
    );
};