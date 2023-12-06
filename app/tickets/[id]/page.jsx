import { notFound } from "next/navigation"
import DeleteTicket from "./DeleteTicket"

async function getTicket(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 0
        }
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

export default async function TicketDetails({params}) {
    const id = params.id
    const ticket = await getTicket(id)
    
    return (
        <main>
            <div className="flex gap-6 items-center">
                <h1>Ticket Details</h1>
                <DeleteTicket id={ticket.id}/>
            </div>
            <div className="card">
                <h3>{ticket.title}</h3> 
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
