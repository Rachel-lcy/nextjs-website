import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>

      <div className="flex justify-center my-8">
        <Link href="/tickets/create">
          <button className="btn-primary">Create Tickets</button>
        </Link>
      </div>

      <Suspense fallback = {<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
