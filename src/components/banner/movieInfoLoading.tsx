export default function MovieInfoLoading() {
  return (
    <>
      <div className="absolute h-full w-full md:w-3/5 flex flex-col gap-4 justify-center px-4 z-10 animate-pulse">
        <div className="h-4 bg-red-500 rounded w-[150px]"></div>
        <div className="h-6 bg-slate-300 rounded w-full"></div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="h-4 bg-slate-300 rounded w-[150px]"></div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="basis-2/3 h-3 bg-slate-300 rounded"></div>
              <div className="basis-1/3 h-3 bg-slate-300 rounded"></div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="basis-1/2 h-3 bg-slate-300 rounded"></div>
              <div className="basis-1/2 h-3 bg-slate-300 rounded"></div>
            </div>
            <div className="h-3 bg-slate-300 rounded w-full"></div>
            <div className="flex flex-row gap-2">
              <div className="basis-1/3 h-3 bg-slate-300 rounded"></div>
              <div className="basis-2/3 h-3 bg-slate-300 rounded"></div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="basis-1/6 h-5 bg-slate-300 rounded-lg"></div>
            <div className="basis-1/5 h-5 bg-slate-300 rounded-lg"></div>
            <div className="basis-1/6 h-5 bg-slate-300 rounded-lg"></div>
          </div>
        </div>        
        <div className="h-6 bg-red-500 rounded-full w-[100px]"></div>
      </div>
    </>
  )
}