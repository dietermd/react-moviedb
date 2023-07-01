export function Header() {
  
  return (
    <div className="relative">
      <img className="absolute h-[600px] w-full object-cover brightness-50" src="https://image.tmdb.org/t/p/original/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg" />
      <div className="absolute h-[80px] w-full flex justify-center items-center">
        <input type="text" className="w-1/2 h-1/2 bg-transparent border-2 border-white rounded-lg outline-none text-center text-white placeholder:text-white" placeholder="Search movie..."/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" 
          className="pointer-events-none w-5 h-5 -translate-x-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    </div>
  )
}