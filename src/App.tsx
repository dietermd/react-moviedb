import Banner from "./components/banner/bannner"
import Header from "./components/header"
import BodySliders from "./components/bodySliders"

function App() {
  return (
    <>
      <div className="bg-[#242428]">
        <Header />
        <Banner />

        <div className="flex flex-col mt-3 px-4 gap-5">
          <BodySliders />
        </div>        
      </div>
    </>
  )
}

export default App
