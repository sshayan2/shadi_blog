let Name = document.getElementById('name')
let email = document.getElementById('email')
let postcode = document.getElementById('post')
let city = document.getElementById('city')
let age = document.getElementById('age')
let country_canada = document.getElementById('canada')
let other_country = document.getElementById('other')
let hire = document.getElementById('hire')
let comment = document.getElementById('comment')
let question = document.getElementById('question')
let hourInput = document.getElementById('hour')
let hourContainer = document.querySelector('.hour-container')
let message = document.getElementById('message')
let form = document.querySelector('.form')


// let button = document.getElementsByClassName('btn')
// button.addEventListener('click', sub)
// function sub(){
//     document.alert('Thanks')
// }

// click event 
let choose = ''
hire.addEventListener('click', hire);
//call the hire function
function hire() {
    choose = 'Hire'
    hourContainer.style.display = "block"
}
question.addEventListener('click', question)
function question() {
    choose = 'Question'
    hourContainer.style.display = "none"
}

comment.addEventListener('click', comment)
function comment() {
    choose = 'Comment'
    hourContainer.style.display = "none"
}
canada.addEventListener('click', canada)
function canada() {
    choose = 'Canada'
    hourContainer.style.display = "none"
}
other.addEventListener('click', other)
function other() {
    choose = 'Other Country'
    hourContainer.style.display = "none"
}
form.onsubmit = function (item) {
    item.preventDefault()
    // canadian postal code like --> M3A 1Z9
    let validPostCode = /^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/.test(postcode.value)
    if (!validPostCode) 
    return
    // if true... 
    if (Name.value && email.value && city.value && age.value && purpose && country && message.value) {
        if (purpose === 'Hire' && !hourInput.value) 
        return
        fetch('https://httpbin.org/post',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: Name.value,
                    postcode: postcode.value,
                    email: email.value,
                    city: city.value,
                    reason: purpose,
                    age: age.value,
                    where: country,
                    message: message.value,
                    hourRate: hourInput.value ? hourInput.value : undefined
                })
            }).then(response => {
                console.log(response)
                if (response.ok) {
                    resetValues()
                }
            })
    }
}

function resetValues() {
    Name.value = ""
    postcode.value = ""
    email.value = ""
    city.value = ""
    reason = ""
    age.value = ""
    where = ""
    hourInput.value = ""
    message.value = ""
    hire.checked = false
    question.checked = false
    comment.checked = false
}