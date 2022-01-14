const btn = document.querySelector('#formBtn');


let bish;
let bosh;
let size;



btn.addEventListener('click', function (event) {

    bish = document.getElementById('bish').value;
    bosh = document.getElementById('bosh').value;
    size = document.getElementById('size').value;

    let result = `Result: `;
    for (let i = 1; i <= size; i++) {
        if (i % bish === 0 && i % bosh === 0) {
            result += `Bish-Bosh `;
        }
        else if (i % bish === 0) {
            result += `Bish `;
        }
        else if ((i % bosh) === 0) {
            result += `Bosh `;
        }
        else {
            result += i + ` `;

        }

    }
    document.getElementById("output").innerHTML = result;

    event.preventDefault();

});
