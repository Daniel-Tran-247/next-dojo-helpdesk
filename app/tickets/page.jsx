import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from 'next/link'  

const Tickets = () => {
  return (
    <main>
      <div>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col justify-center gap-0">
            <h1>Ticket</h1>
            <p><small>Currently open tickets</small></p>  
          </div>
          <Link href="/tickets/create">
            <button className="btn-primary">Create a New Ticket</button>
          </Link>
          
        </div>
        <Suspense fallback={<Loading/>}><TicketList /></Suspense>
      </div>
    </main>
  )
}

export default Tickets
