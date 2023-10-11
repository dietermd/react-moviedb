export default function PeopleCardLoading() {
  return (
    <>
      <div className="flex flex-col w-[150px] animate-pulse">
        <div className="w-full h-[225px] rounded-lg bg-slate-300"></div>
        <div className="mt-2 px-[10px] flex flex-col gap-2 items-center">
          <div className="h-3 bg-slate-300 rounded w-full"></div>
        </div>
      </div>
    </>
  )
}