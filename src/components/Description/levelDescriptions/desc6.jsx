import './../index.css'

export const Description6 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>How to give a view a custom frame?</p>
                <p>By default SwiftUI’s views take up only as much space as they need, but if you want that to change you can use a <span style={{color: "#8c28c2"}}>frame(width:height:alignment:)</span> modifier to tell SwiftUI what kind of size range you want to have.</p>
                <p>The alignment parameter specifies this view’s alignment within the frame.</p>
                <pre className='desc-code'>
{`
    Text("Hello world!")
    .frame(width: 200, height: 30, alignment: .topLeading)
    .border(Color.gray)

`}
                </pre>
                <p> In the example above, the text is positioned at the top, leading corner of the frame. If the text is taller than the frame, its bounds may extend beyond the bottom of the frame’s bounds.</p>
                <div id='picture'>                
                    <img alt="A screenshot showing the effect of frame size options on a text view" srcset="https://docs-assets.developer.apple.com/published/c38bb439a9c5e2632878344997227e8d/SwiftUI-View-frame-2@2x.png 2x" src="https://docs-assets.developer.apple.com/published/c38bb439a9c5e2632878344997227e8d/SwiftUI-View-frame-2@2x.png" />
                </div>
            </div>
        </>
    );
};