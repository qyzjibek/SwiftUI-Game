import './../index.css'

export const Description8 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>SwiftUI Font</p>
                <p>SwiftUI lets you customize Text by applying a <span style={{color: "#8c28c2"}}>.font()</span> modifier. The default iOS font is called San Francisco and if you don’t explicitly change it, then all of your text will have the default iOS look.</p>
                <p>Use one of many standard fonts which are great to keep consistency with default iOS look: </p>
                <pre className='desc-code'>
{`
    Text("Simple Swift Guide").font(.largeTitle)

`}
                </pre>
                <p>Some other options of standard fonts include: title, headline, subheadline, body, callout, caption or footnote.</p>
                <p>Change font size of Text using default system font (San Francisco):</p>
                <pre className='desc-code'>
{`
    Text("Simple Swift Guide").font(.system(size: 56.0))

`}
                </pre>
                <p>Change font weight:</p>
                <pre className='desc-code'>
{`
    Text("Simple Swift Guide").fontWeight(.light)

`}
                </pre>
                <p>Change font weight:</p>
                <pre className='desc-code'>
{`
    Text("Simple Swift Guide").font(.system(size: 45, weight: .bold, design: .default))

`}
                </pre>
            </div>
        </>
    );
};