import { Await, defer, useLoaderData } from "react-router-dom";
import { FetchPersonDetailsPromise } from "../../utils/utils"
import { PersonDetails } from "../../models/personDetails";
import { Suspense } from "react";
import PersonPageBanner from "./personPageBanner";
import PersonPageInfo from "./personPageInfo";

export async function PersonPageLoader({ params }: any) {
  const personId = params.personId as string
  const personDetailsPromise = FetchPersonDetailsPromise(personId)
  return defer({personDetails: personDetailsPromise})
}

export default function PersonPage() {
  const data = useLoaderData() as { personDetails: Promise<PersonDetails> };
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={data.personDetails}>
        {
          (personDetails: PersonDetails) =>
          (
            <>
              <PersonPageBanner personDetails={personDetails} />
              <PersonPageInfo personDetails={personDetails}/>
            </>
          )
        }
        </Await>
      </Suspense>
    </>
  )
}