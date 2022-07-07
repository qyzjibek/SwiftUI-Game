import './../index.css'

export const Description4= () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>How to adjust the opacity of a view?</p>
                <p>Any SwiftUI view can be partially or wholly transparent using the opacity() modifier. This accepts a value between 0 (completely invisible) and 1 (fully opaque), just like the alpha property of UIView in UIKit.</p>
                <p>For example, this creates a text view with a red background, then gives it 30% opacity: </p>
                <pre className='desc-code'>
{`
    Text("Now you see me")
    .background(.red)
    .opacity(0.3)

`}
                </pre>
                <p>Hidden views are invisible and can’t receive or respond to interactions. However, they do remain in the view hierarchy and affect layout. Use this modifier if you want to include a view for layout purposes, but don’t want it to display.</p>
                <pre className='desc-code'>
{`
    Text("Now you see me")
    .hidden()
    
`}
                </pre>
                <p>
                It’s never visible, but like the opacity example, it still takes up space.
                </p>
                <p>A hidden view can be useful in some rare situations where you want to use the size of the view to affect layout even though you never show the view.</p>
            </div>
        </>
    );
};