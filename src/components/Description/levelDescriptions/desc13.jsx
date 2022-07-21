import './../index.css'

export const Description13 = () => {
    return (
         <>
            <div className='instructions'>
                <p className='level-title'>How to create views in a loop using ForEach</p>
                <p>You will commonly find that you want to loop over a sequence to create views, and in SwiftUI that’s done using <span style={{color: "#8c28c2"}}>ForEach</span></p>
                <p><span style={{color: "#8c28c2"}}>ForEach</span> in SwiftUI is a view struct in its own right, which means you can return it directly from your view body if you want. You provide it an array of items, and you may also need to tell SwiftUI how it can identify each of your items uniquely so it knows how to update them when values change. You also pass it a function to run to create a view for each item in the loop.</p>
                <p>For simple loops over ranges, you can pass the range directly into ForEach and tell Swift to use each number as the unique identifier for the items. For example, this counts from 10 down to 1 then adds a message at the end:</p>
                <pre className='desc-code'>
{`
   VStack(alignment: .leading) {
        ForEach((1...10).reversed(), id: \.self) {
            Text("\($0)…")
        }

        Text("Ready or not, here I come!")
    }

`}
                </pre>
                <img  className='center-img' style={{height: "150px", border: "1px solid black", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach-1@2x.png"/>
                <p>The <span style={{color: "#8c28c2"}}>id: \.self</span> part is required so that SwiftUI can identify each element in the array uniquely – it means that if you add or remove an item, SwiftUI knows exactly which one.</p>
                <p>You can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each color name and color value:</p>
                <pre className='desc-code'>
{`
    struct ContentView: View {
        let colors: [Color] = [.red, .green, .blue]
    
        var body: some View {
            VStack {
                ForEach(colors, id: \.self) { color in
                    Text(color.description.capitalized)
                        .padding()
                        .background(color)
                }
            }
        }
    }

`}
                </pre>
                <img className='center-img' style={{height: "200px", border: "1px solid black", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach-2@2x.png"/>
                <p>If you have custom types in your array, you should use id with whatever property inside your type identifies it uniquely. For example, you could create a struct where the id property is a UUID, which mean it’s guaranteed to be unique – perfect for our purposes. We could create such a struct and then use it like this:</p>
                <pre className='desc-code'>
{` 
    struct SimpleGameResult {
        let id = UUID()
        let score: Int
    }
    
    struct ContentView: View {
        let results = [
            SimpleGameResult(score: 8),
            SimpleGameResult(score: 5),
            SimpleGameResult(score: 10)
        ]
    
        var body: some View {
            VStack {
                ForEach(results, id: \.id) { result in
                    Text("Result: \(result.score)")
                }
            }
        }
    }

`}
                </pre>
                <img className='center-img' style={{height: "50px", border: "1px solid black", padding: "0 8px"}} src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach-3@2x.png"/>
                <p>That tells SwiftUI it can distinguish between views inside the ForEach by looking at their id property.</p>
                <p>As an alternative, if you make a struct that conforms to the Identifiable protocol you can just write ForEach(results). Conforming to this protocol means adding an id property that uniquely identifies each object, which in our case we already have. So, this code achieves the same result:</p>
                <pre className='desc-code'>
{` 
    struct IdentifiableGameResult: Identifiable {
        var id = UUID()
        var score: Int
    }
    
    struct ContentView: View {
        let results = [
            IdentifiableGameResult(score: 8),
            IdentifiableGameResult(score: 5),
            IdentifiableGameResult(score: 10)
        ]
    
        var body: some View {
            VStack {
                ForEach(results) { result in
                    Text("Result: \(result.score)")
                }
            }
        }
    }

`}
                </pre>
            </div>
        </>
    );
};