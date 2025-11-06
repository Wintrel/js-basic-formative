function ticketPrice(visitorAge, isStudent){
    if (visitorAge < 6){
        console.log("Bērniem līdz 6 gadu vecumam (ieskaitot) ieeja ir bez maksas.")
        return
    } if (isStudent == true){
        console.log("Skolēniem un studentiem biļetes cena ir 5 EUR.")
    } else {
        console.log("Visiem pārējiem biļetes cena ir 10 EUR.")
    }
}

ticketPrice(12, true)
ticketPrice(35, false)