import "./index.css";
import {Link} from "react-router-dom";
import {ReactComponent as CanvasSVG} from '../../assets/simulator.svg';
import ModifiersExampleIcon from '../../assets/modifier-example-icon.png';
import StacksExampleIcon from '../../assets/stack-example-icon.png';
import DescriptionInstruction from '../../assets/description-ins.png';
import EditorInstruction from '../../assets/editor-ins.png';
import InstructionsVideo from '../../assets/instructions.mp4';

export const LandingPage = ({setlevel}) => {
    const onStartHandler = () => {
        localStorage.setItem('level', 1);
    }

    return (
        <>
        <div className="header-section flex-column">
            <h1 className="header-text">Learn Code By Practicing <span className="pink-gradient">SwiftUI</span></h1>
            <h2 className="subhead-text" style={{width: "50%"}}>No more boring courses, videos and articles.
    Learn to code in a revolutionary new, fun, and effective way.</h2>
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
                <div id='text' className='text custom-text'>Enjoy your journey</div>
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
        <div className="advantage-wrapper flex-column">
            <div style={{width: "70%"}}>
                <h1 className="header-text" style={{color: "rgb(255, 37, 110)"}}>We 😍</h1>
                <h1 className="header-text" style={{color: "white"}}>VS</h1> 
                <h1 className="header-text" style={{color: "rgb(255, 37, 37)"}}>Articles, videos and courses</h1> 
                <h2 className="subhead-text" style={{color: "white", padding: "20px"}}>We are the next-generation platform for learning code by playing games that combines the missing parts of traditional learning: a tremendous amount of practice and an engaging learning environment.</h2>
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