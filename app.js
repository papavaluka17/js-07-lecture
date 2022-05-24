const div = document.querySelector('#main')
const error1 = document.querySelector('#error')

//  axios.get('https://fakerapi.it/api/v1/addresses?_quantity=7')
//     .then(function (response) {
//         const ul = document.createElement('ul')
//         div.appendChild(ul);

//         response.forEach(element => {
//             const li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = element.street
//         });
//     })
//     .catch(function (error) {
//         const p = document.createElement('p')
//         error1.appendChild(p)
//         p.textContent = 'status code' + error;
//         p.style.color = 'red';
//         p.style.fontSize = '20px'
//     })


async function ax() {
    await axios.get('https://fakerapi.it/api/v1/addresses?_quantity=7')
        .then(function (response) {
            console.log(response)
            const ul = document.createElement('ul')
            div.appendChild(ul);

            response.data.data.forEach(element => {
                const li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = element.street
            });
        })
        .catch(function (error) {
            const p = document.createElement('p')
            error1.appendChild(p)
            p.textContent = error;
            p.style.color = 'red';
            p.style.fontSize = '20px'
        })
}
ax()


async function ax2() {
    await axios.get('https://reqres.in/api/unknown')
        .then(function (response) {
            console.log(response)
            const ul = document.createElement('ul')
            div.appendChild(ul);

            response.data.data.forEach(element => {
                const li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = element.year
            });
        })
        .catch(function (error) {
            const p = document.createElement('p')
            error1.appendChild(p)
            p.textContent = error;
            p.style.color = 'red';
            p.style.fontSize = '20px'
        })
}
ax2()




