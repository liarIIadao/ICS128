// part 1
let hotelInfo = [
    {type: `Standard`, detail: `single room with a bed`, price: `159`},
    {type: `Double`, detail: `double room with a bed`, price: `229`},
    {type: `Penthouse`, detail: `King size bed & bar & jacuzzi`, price: `359`}
]

function url_load() {
    for (let i = 0; i < hotelInfo.length; i++) {
        document.getElementById(`name${i}`).innerHTML = hotelInfo[i].type;
        document.getElementById(`detail${i}`).innerHTML = hotelInfo[i].detail;
        document.getElementById(`price${i}`).innerHTML = hotelInfo[i].price;
    }
    document.getElementById(`load`).innerHTML = document.URL;
}

// Part 1 exercise 2
for (let i = 0; i < hotelInfo.length; i++) {
    let button = document.getElementById(`button${i}`)
    button.addEventListener(`click`, function (){
        showAlert(i)
    })
}
function showAlert(index){
    alert(`Your room is $${hotelInfo[index].price} per night`)
}

