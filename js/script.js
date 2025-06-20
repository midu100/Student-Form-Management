// DOM
let InputName = document.querySelector('.InputName')
let InputId = document.querySelector('.InputId')
let InputEmail = document.querySelector('.InputEmail')
let InputPhone = document.querySelector('.InputPhone')
let InputAge = document.querySelector('.InputAge')
let errorUser = document.querySelector('.errorUser')
let allBox = document.querySelector('.allBox')


// Create object with constructor function
let totalUser = []

function user(name, id, email, phone, age) {

    this.userName = name
    this.userId = id
    this.userEmail = email
    this.userPhone = phone
    this.userAge = age
}

let handleAdd = () => {
    if (!InputName.value || !InputId.value || !InputEmail.value || !InputPhone.value || !InputAge.value) {
        errorUser.innerHTML = 'Every field must be filled in.'
    } else {
        errorUser.innerHTML = ''

        // add object value
        let singUser1 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser1)

        let singUser2 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser2)

        let singUser3 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser3)

        let singUser4 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser4)

        let singUser5 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser5)

        let singUser6 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser6)

        let singUser7 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser7)

        let singUser8 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser8)

        let singUser9 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser9)

        let singUser10 = new user(InputName.value, InputId.value, InputEmail.value, InputPhone.value, InputAge.value)
        totalUser.push(singUser10)

        console.log(totalUser)


        // create tags
        let singleUser = document.createElement('div')
        let studentName= document.createElement('p')
        let studentId= document.createElement('p')
        let studentEmail= document.createElement('p')
        let studentPhone= document.createElement('p')
        let studentAge= document.createElement('p')

        // append child
        allBox.appendChild(singleUser)
        singleUser.appendChild(studentName)
        singleUser.appendChild(studentId)
        singleUser.appendChild(studentEmail)
        singleUser.appendChild(studentPhone)
        singleUser.appendChild(studentAge)

        // add className
        singleUser.classList.add('singleUser')
        studentName.classList.add('studentName')
        studentId.classList.add('studentId')
        studentEmail.classList.add('studentEmail')
        studentPhone.classList.add('studentPhone')
        studentAge.classList.add('studentAge')


        // add content
        studentName.innerHTML = InputName.value
        studentId.innerHTML = InputId.value
        studentEmail.innerHTML = InputEmail.value
        studentPhone.innerHTML = InputPhone.value
        studentAge.innerHTML = InputAge.value


    }
}