import Banner from "./components/bannner"
import Header from "./components/header"

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:w-10/12">
          <Header />          
          <Banner />
        </div>
      </div>      
    </>
  )
}

export default App
