let text = document.getElementById('user-text');

const fetchedData = () => {
    const users = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                // text.innerHTML += data[1].name;
                data.forEach(user => {
                    console.log(user.name);
                });
            })

            .catch();
    }
    users();
}

fetchedData();