// a) Izveidojiet failu `ticket-price.js`.
// b) Izveidojiet mainīgo `visitorAge` ar vērtību `12` un mainīgo `isStudent` ar patiesu Boolean vērtību.
// c) Izmantojot nosacījumus (if..else) izdrukājiet konsolē biļetes cenu:
// - Bērniem līdz 6 gadu vecumam (ieskaitot) ieeja ir bez maksas.
// - Skolēniem un studentiem (`isStudent` ir patiess) biļetes cena ir 5 EUR.
// - Visiem pārējiem biļetes cena ir 10 EUR.

visitorAge = 23
isStudent = false

if (visitorAge < 6){
    console.log("Bērniem līdz 6 gadu vecumam (ieskaitot) ieeja ir bez maksas.")
    return
} if (isStudent == true){
    console.log("Skolēniem un studentiem biļetes cena ir 5 EUR.")
} else {
    console.log("Visiem pārējiem biļetes cena ir 10 EUR.")
}