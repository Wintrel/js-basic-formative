// 6.uzdevums
// Problēmas risinājums.
// Mazs interneta veikals uztur savu preču sarakstu.
// Katra prece tiek attēlota kā objekts ar četrām īpašībām: nosaukums, kategorija, cena un daudzums noliktavā.

// Izveidojiet failu `internet-store.js`.
// Izveidojiet tajā testa datus, lai jūsu izveidotā programma spētu veikt uzdevumu.
// Ir jāizveido saraksts, kurā ir vismaz 3 preces no vismaz 2 dažādām kategorijām (piemēram, "Elektronika", "Apģērbi").

// Programmai jāsniedz atbildes uz diviem jautājumiem:
// 1. Kuras preces pieder kategorijai "Elektronika"?
// Izdrukājiet konsolē visu preču nosaukumus, kuru kategorija ir "Elektronika".

// 2. Kāda ir kopējā visu preču vērtība noliktavā?
// Aprēķiniet un izvadiet visu preču kopējo vērtību internetveikalā šādā formātā - "Kopējā summa: 5173 EUR", bet cena būs atkarīga no Jūsu testa datiem.

products = [
    {name: "ps5", catagory: "Electronic", price: 764, quantity: 44},
    {name: "logitic", catagory: "Electronic", price: 76, quantity: 98 },
    {name: "soda", catagory: "drinks", price: 2, quantity: 234 },
    {name: "hoodie", catagory: "clothing", price: 16, quantity: 167 },
]

for (product of products){
    if(product.catagory === "Electronic"){
        console.log(product.name)
    }
}

for (product of products){
    while ()
}