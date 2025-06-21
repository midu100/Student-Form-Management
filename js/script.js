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

        console.log(totalUser) //checking object


        // create tags
        let singleUser = document.createElement('div')
        let studentName= document.createElement('p')
        let studentId= document.createElement('p')
        let studentEmail= document.createElement('p')
        let studentPhone= document.createElement('p')
        let studentAge= document.createElement('p')
        let singleBtn = document.createElement('div')
        let userDelete = document.createElement('button')

        // append child
        allBox.appendChild(singleUser)
        singleUser.appendChild(studentName)
        singleUser.appendChild(studentId)
        singleUser.appendChild(studentEmail)
        singleUser.appendChild(studentPhone)
        singleUser.appendChild(studentAge)
        singleUser.appendChild(singleBtn)
        singleBtn.appendChild(userDelete)

        // add className
        singleUser.classList.add('singleUser')
        studentName.classList.add('studentName')
        studentId.classList.add('studentId')
        studentEmail.classList.add('studentEmail')
        studentPhone.classList.add('studentPhone')
        studentAge.classList.add('studentAge')
        singleBtn.classList.add('singleBtn')
        userDelete.classList.add('userDelete')


        // add content
        userDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
        totalUser.map((item)=>{
            studentName.innerHTML  = `Name  : ${item.userName}`
            studentId.innerHTML    = `Id    : ${item.userId}`
            studentEmail.innerHTML = `Email : ${item.userEmail}`
            studentPhone.innerHTML = `Phone : ${item.userPhone}`
            studentAge.innerHTML   = `Age   : ${item.userAge}`
        })
        // remove input value
        InputName.value=''
        InputId.value  =''
        InputEmail.value=''
        InputPhone.value=''
        InputAge.value = ''

        // delete button
        userDelete.addEventListener('click',()=>{
            singleUser.remove()
        })


    }
}



/*

studentName.innerHTML = InputName.value
        studentId.innerHTML = InputId.value
        studentEmail.innerHTML = InputEmail.value
        studentPhone.innerHTML = InputPhone.value
        studentAge.innerHTML = InputAge.value


*/