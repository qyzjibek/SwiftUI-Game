import './../index.css'

export const Description12 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>How to control spacing around individual views using padding</p>
                <p>SwiftUI lets us set individual padding around views using the <span style={{color: "#8c28c2"}}>padding()</span> modifier, causing views to be placed further away from their neighbors.</p>
                <p>If you use this with no parameters you’ll get system-default padding on all sides, like this:</p>
                <pre className='desc-code'>
{`
   VStack {
        Text("Using")
        Text("SwiftUI")
            .padding()
        Text("rocks")
    }

`}
                </pre>
                <img  className='center-img' style={{height: "150px", border: "1px solid black", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding-1@2x.png"/>
                <p>But you can also customize how much padding to apply and where. So, you might want to apply system padding to only one side:</p>
                <pre className='desc-code'>
{`
    VStack {
        Text("Using")
        Text("SwiftUI")
            .padding(.bottom)
        Text("rocks")
    }

`}
                </pre>
                <img className='center-img' style={{height: "150px", border: "1px solid black", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding-2@2x.png"/>
                <p>Or you might want to control how much padding is applied to all sides:</p>
                <pre className='desc-code'>
{` 
    VStack {
        Text("Using")
        Text("SwiftUI")
            .padding(100)
        Text("rocks")
    }

`}
                </pre>
                <img className='center-img' style={{height: "260px", border: "1px solid black", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding-3@2x.png"/>
                <p>Or you can combine the two to add a specific amount of padding to one side of the view:</p>
                <pre className='desc-code'>
{` 
    VStack {
        Text("Using")
        Text("SwiftUI")
            .padding(.bottom, 100)
        Text("rocks")
    }

`}
                </pre>
                <img className='center-img' style={{height: "200px", border: "1px solid black", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding-4@2x.png"/>
            </div>
        </>
    );
};