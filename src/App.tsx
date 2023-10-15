import Banner from "./components/banner/bannner"
import Header from "./components/header"
import BodySliders from "./components/bodySliders"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
      <div className="bg-[#242428]">
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export function RootContent() {
  return (
    <>
      <Banner />
      <div className="flex flex-col mt-3 px-4 gap-5">
        <BodySliders />
      </div> 
    </>
  )
}