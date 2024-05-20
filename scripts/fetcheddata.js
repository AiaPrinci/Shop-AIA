let text = document.getElementById('user-text');

const fetchedData = () => {
    const users = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                
                const names = data[1];
                data.forEach(user => {
                    
                    // text.innerHTML += names;
                    // console.log(names);
                    // console.log(user);
                });

                console.log(names);
                text.innerHTML += `${names.name} - `;
                text.innerHTML += `${names.phone} - `;
                text.innerHTML += `${names.address.city} - `;
                // text.innerHTML += names.name;
                // text.innerHTML += names.name;
                // text.innerHTML += names.name;
            })

            .catch();
    }
    users();
}

fetchedData();