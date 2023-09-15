/*const formRegister = document.getElementById('form-register');
console.log(formRegister);

formRegister.onsubmit = function (event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const email = form.get('email');
    console.log('email: ' + email); // chặn load lại page
    //const email = event.target.value;
}

//formRegister.addEventListener('submit', function() {

//}) */

console.log('Running')

const formRegister = document.getElementById('form-register');
console.log(formRegister);

let listStudent = [];

function renderList() {
    const listContent = document.getElementById('list-content');

    let elListStudent = '';
    listStudent.forEach((student, id) => {
        elListStudent += `<tr>
      <th scope="row">${id + 1}</th>
      <td>${student.email}</td>
      <td>${student.fullname}</td>
   </tr>`
    });
    console.log(elListStudent);
    listContent.innerHTML = elListStudent;
}

function addNewStudent(info) {
    listStudent.push(info);
    // console.log(listStudent);
    renderList();
}

formRegister.onsubmit = function (event) {
    event.preventDefault(); // Chặn load lại page


    const form = new FormData(event.target);

    //Cách 1
    // const email = form.get('email');
    // const fullName = form.get('fullname');
    // console.log('email: ' + email);
    // console.log('fullName: ' + fullName);

    //Cách 2
    const info = Object.fromEntries(form)
    addNewStudent(info);
    // console.log('info:', info);

}

// formRegister.addEventListener('submit',function(){

// })
