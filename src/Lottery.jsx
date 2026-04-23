import { useState } from "react"
import { genTicket, sum } from "./helper.js"
import Ticket from "./Ticket.jsx"
import Button from "./Button.jsx"

export default function Lottery({ n = 3, winCondition }) { // default values for props
    let [ticket, setTicket] = useState(genTicket(n))
    let isWinning = winCondition(ticket)

    let buyTicket = () => {
        setTicket(genTicket(n))
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <Button action={buyTicket} />
            <h3>{isWinning ? "Congratulations! You won!" : "Keep trying!"}</h3>
        </div>
    )
}