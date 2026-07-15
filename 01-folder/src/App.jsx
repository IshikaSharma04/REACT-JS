// function App(){
//   return 'hello'
// }
// export default App
//app.jsx ka parent is main.jsx



//import React from 'react'

const App = () => {
  return (
    <>
    <div id = "dad">
      <h1 id = "child1">Hello</h1>
      <h2 id = "child2">Hello</h2>
      </div>
    
    <div id = "chacha"></div>
    </>
    
  )
}
//when we need to pass two div then we use fragments or empty tags 
export default App

//assests mein we keep svg , images jo bohot use ho rah ah , emojis , icons 
//fonts , images , we keep in public 