import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  const errorMessage = getErrorMessage(error)

  return (
    <>
      <div className="flex flex-col gap-8 h-[100vh] justify-center items-center">
        <div className="font-bold text-4xl">Oops!</div>
        <div className="text-2xl">Sorry, an unexpected error has occurred.</div>
        <div>{errorMessage}</div>
      </div>
    </>
  )
}

function getErrorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  } else if (error instanceof Error) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    console.error(error)
    return 'Unknown error'
  }
}