const tableBody = document.getElementById('table-body')

let flights = [
    // {
    //     time: '13:40',
    //     destination:'ABU DHABI',
    //     flight:'EY538',
    //     gate:'01',
    //     remarks:'ON TIME'
    // },
    {
        time: '07:00',
        destination:'LONDON',
        flight:'EY16',
        gate:'02 B',
        remarks:'DELAYED'
    } ,
    // {
    //     time: '18:25',
    //     destination:'CAPE TOWN',
    //     flight:'LH791',
    //     gate:'01 C',
    //     remarks:'ON TIME'
    // } ,
    {
        time: '22:00',
        destination:'DUBAI',
        flight:'EK363',
        gate:'09',
        remarks:'ON TIME'
    } ,
    {
        time: '13:30',
        destination:'MUSCAT',
        flight:'WY204',
        gate:'04',
        remarks:'DELAYED'
    } ,
    {
        time: '15:00',
        destination:'JEDDAH',
        flight:'EY3334',
        gate:'02 B',
        remarks:'ON TIME'
    },
    {
        time: '02:00',
        destination:'SYDNEY',
        flight:'TT814',
        gate:'05',
        remarks:'DELAYED'
    } ,
    {
        time: '04:00',
        destination:'TOKYO',
        flight:'NQ8536',
        gate:'09',
        remarks:'ON TIME'
    } ,
    {
        time: '07:00',
        destination:'PARIS',
        flight:'AF6230',
        gate:'01',
        remarks:'CANCELLED'
    } ,
    {
        time: '19:00',
        destination:'ROME',
        flight:'I93219',
        gate:'01',
        remarks:'ON TIME'
    }
    
]

const destination= [ 'MUMBAI', 'LONDON', 'ABU DHABI', 'DURBAN']
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']
let hour = 22

function populateTable(){
    for(const flight of flights){
        const tableRow = document.createElement('tr')
        for(const flightDetail in flight){
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])
            
            for(const [index, letter] of word.entries()){
                const letterEl = document.createElement('div')

                setTimeout(() => {
                    letterEl.classList.add('flip')
                    letterEl.textContent = letter 
                    tableCell.append(letterEl)  
                }, 100 * index );
            }

            tableRow.appendChild(tableCell)
        }
        tableBody.append(tableRow)
    }
}

// populateTable()

function generateRandomLetter(){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return alphabet.charAt(Math.floor(Math.random()*alphabet.length))
}

function generateRandomNum(maxNumber){
    const numbers = '0123456789'
    if (maxNumber){
        const newNum = numbers.slice(0, maxNumber + 1)
        return newNum.charAt(Math.floor(Math.random()*newNum.length))
    }
    return numbers.charAt(Math.floor(Math.random()*numbers.length))
}

function generateTime(){
    let displayHour = hour
    if(hour<24){
        hour++
    }if(hour >= 24){
        hour = 1
        displayHour = hour
    }if (hour < 10){
        displayHour = '0' + hour
    }
    return displayHour + ':' + generateRandomNum(5) + generateRandomNum()
}

function shuffleUp(){
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destination[Math.floor(Math.random()* destination.length)],
        flight: generateRandomLetter() + " " + generateRandomNum() + generateRandomNum() + generateRandomNum(),
        gate:generateRandomLetter() + " " + generateRandomNum() + generateRandomNum(),
        remarks:remarks[Math.floor(Math.random()*remarks.length)]
    })
    tableBody.textContent = ''
    populateTable()
}

setInterval(shuffleUp, 5000)