import './index.css'

export const Description3= () => {
    return (
         <>
                        <div className='instructions'>
                            <p>Color can be used in modifiers to change the background or foreground colors of views, or color can be used as a view itself.</p>
                            <p>We can control the color of text using the <span style={{color: "#8c28c2"}}>.foregroundColor()</span> modifier, like this:</p>
                            
                            <pre className='desc-code'>
            {`
                Text("SwiftUI is best")
                .foregroundColor(.red)
            `}
                            </pre>
                            <p style={{fontWeight: "bold"}}>Result</p>
                            <pre className='desc-code' style={{color: "red"}}>
            {`
                SwiftUI is best
            `}
                            </pre>
                            <p>
                            Use this modifier to change the main display color of a <span style={{color: "#8c28c2"}}>View</span>. This can be used on any <span style={{color: "#8c28c2"}}>View</span>, and its effect depends on the view.
                            </p>
                        </div>
                </>
    );
};