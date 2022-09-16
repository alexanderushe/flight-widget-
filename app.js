const tableBody = document.getElementById('table-body')

const flights = [
    {
        time: "08:11",
        destination: "ZAMBIA",
        flight: "HR 23",
        gate: "A01",
        remarks: "ON TIME"
    },
    {
        time: "03:11",
        destination: "BULAWAYO",
        flight: "HR 23",
        gate: "A331",
        remarks: "DELAYED"
    },
    {
        time: "11:11",
        destination: "LONDON",
        flight: "HR 23",
        gate: "A01",
        remarks: "CANCELLED"
    }
    
]
const destinations = ["TOKYO","DUBAI","ZIMBABWE","KYV","LONDON"]
const remarks = ["ON TIME","DELAYED","CANCELLED"]
let hour = 11

function populateTable(){
    for(const flight of flights){
        const tableRow = document.createElement("tr")

        for (const flightDetails in flight ){
            const tableCell = document.createElement("td")
            // tableCell.innerText = flight[flightDetails]
            const word = Array.from(flight[flightDetails])
            for(const [index,letter] of word.entries()){
                const letterElement = document.createElement('div')
                setTimeout(()=>{
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCell.append(letterElement)
                },100*index)
            }
            tableRow.appendChild(tableCell)
        }
        tableBody.append(tableRow)
    }

}
populateTable()
function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRTTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random*alphabet.length))
}
function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0,maxNumber +1)
        return newNumbers.charAt(Math.floor(Math.random*newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random*numbers.length))
}

function generateTime(){
    let displayHour = hour
    if(hour < 24){
        hour++
    }if (hour >= 24){
        hour = 1
        displayHour = hour
    }if (hour <10){
        displayHour = "0" + hour
    }
    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp(){
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter()+ generateRandomLetter() + ""+ generateRandomNumber() +generateRandomNumber(),
        gate: generateRandomLetter() + "" + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent =""
    populateTable()
}
setInterval(shuffleUp,5000)