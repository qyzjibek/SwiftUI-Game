import './../index.css'

export const Description5 = () => {
    return (
         <>
            <div className='instructions'>
                <p style={{fontWeight: "bold"}}>How to add rounded corners in SwiftUI?</p>
                <p>The easiest way to add rounded corners to any view is by using the <span style={{color: "#8c28c2"}}>cornerRadius</span> modifier. Of course, you have to add background to see the effect of this modifier.</p>
                <p>So, you can create a text view with 16-point rounded corners like this:</p>
                <pre className='desc-code'>
{`
    Text("Now I am rounded")
    .background(.green)
    .cornerRadius(16)
    
`}
                </pre>
                <p>The cornerRadius modifier supports two parameters. The first unnamed one is radius, and the second one is antialiased, which is by default set to true.</p>
            </div>
                </>
    );
};