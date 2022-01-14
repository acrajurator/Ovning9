const btn = document.querySelector('#formBtn');
const buyList = document.querySelector('#buyList');

function isEmpty(str) {
    return !str.trim().length;
}

btn.addEventListener('click', function (event) {

    let product = document.getElementById('product').value;
    let amount = document.getElementById('amount').value;

   
    if (isEmpty(product)!= null && !isEmpty(product)) {


        document.getElementById('product').value = null;
        document.getElementById('amount').value = null;
        var entry = document.createElement('li');
        var b = document.createElement('button');
        b.id = 'btn';
        b.textContent = 'remove item from list';
        b.hidden = true;

        b.addEventListener('click', function () {
            this.parentElement.remove();
        })

        entry.appendChild(document.createTextNode(amount + ` ` + product));
        entry.appendChild(b);
        entry.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove("active");
                b.hidden = true;
            } else {
                this.classList.add("active");
                b.hidden = false;

            }
        })
        buyList.appendChild(entry);
    }

    event.preventDefault();
});

