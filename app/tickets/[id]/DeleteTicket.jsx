'use client'
import { useRouter } from 'next/navigation'

export default function DeleteTicket({id}) {
    const router = useRouter()  

    async function deleteTicket() {
        const res = await fetch(`http://localhost:4000/tickets/${id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            router.refresh()
            router.push('/tickets')
        }
    }

    return (
        <div>
            <button className="btn-primary bg-red-600" onClick={deleteTicket}>Delete Ticket</button>
        </div>
  )
}
