document.addEventListener('DOMContentLoaded' , () => {
let text = document.querySelector('.user-text-1');
let name1 = document.getElementById('name-1');
let email1 = document.getElementById('email-1');
let phone1 = document.getElementById('phone-1');
let username1 = document.getElementById('username-1');
let companyName1 = document.getElementById('company-name-1');
let city1 = document.getElementById('city-1');

let name2 = document.getElementById('name-2');
let email2 = document.getElementById('email-2');
let phone2 = document.getElementById('phone-2');
let username2 = document.getElementById('username-2');
let companyName2 = document.getElementById('company-name-2');
let city2 = document.getElementById('city-2');

let name3 = document.getElementById('name-3');
let email3 = document.getElementById('email-3');
let phone3 = document.getElementById('phone-3');
let username3 = document.getElementById('username-3');
let companyName3 = document.getElementById('company-name-3');
let city3 = document.getElementById('city-3');

let name4 = document.getElementById('name-4');
let email4 = document.getElementById('email-4');
let phone4 = document.getElementById('phone-4');
let username4 = document.getElementById('username-4');
let companyName4 = document.getElementById('company-name-4');
let city4 = document.getElementById('city-4');

let name5 = document.getElementById('name-5');
let email5 = document.getElementById('email-5');
let phone5 = document.getElementById('phone-5');
let username5 = document.getElementById('username-5');
let companyName5 = document.getElementById('company-name-5');
let city5 = document.getElementById('city-5');

let name6 = document.getElementById('name-6');
let email6 = document.getElementById('email-6');
let phone6 = document.getElementById('phone-6');
let username6 = document.getElementById('username-6');
let companyName6 = document.getElementById('company-name-6');
let city6 = document.getElementById('city-6');

let name7 = document.getElementById('name-7');
let email7 = document.getElementById('email-7');
let phone7 = document.getElementById('phone-7');
let username7 = document.getElementById('username-7');
let companyName7 = document.getElementById('company-name-7');
let city7 = document.getElementById('city-7');

let name8 = document.getElementById('name-8');
let email8 = document.getElementById('email-8');
let phone8 = document.getElementById('phone-8');
let username8 = document.getElementById('username-8');
let companyName8 = document.getElementById('company-name-8');
let city8 = document.getElementById('city-8');

let name9 = document.getElementById('name-9');
let email9 = document.getElementById('email-9');
let phone9 = document.getElementById('phone-9');
let username9 = document.getElementById('username-9');
let companyName9 = document.getElementById('company-name-9');
let city9 = document.getElementById('city-9');

let name10 = document.getElementById('name-10');
let email10 = document.getElementById('email-10');
let phone10 = document.getElementById('phone-10');
let username10 = document.getElementById('username-10');
let companyName10 = document.getElementById('company-name-10');
let city10 = document.getElementById('city-10');






const fetchedData = () => {
    const users = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                
                const names = data[0];
                const names1 = data[1];
                const names2 = data[2];
                const names3 = data[3];
                const names4 = data[4];
                const names5 = data[5];
                const names6 = data[6];
                const names7 = data[7];
                const names8 = data[8];
                const names9 = data[9];


                name1.innerHTML += `${names.name}`;
                email1.innerHTML += `${names.email}`;
                phone1.innerHTML += `${names.phone}`;
                username1.innerHTML += `${names.username}`;
                companyName1.innerHTML += `${names.company.name}`;
                city1.innerHTML += `${names.address.city}`;


                name2.innerHTML += `${names1.name}`;
                email2.innerHTML += `${names1.email}`;
                phone2.innerHTML += `${names1.phone}`;
                username2.innerHTML += `${names1.username}`;
                companyName2.innerHTML += `${names1.company.name}`;
                city2.innerHTML += `${names1.address.city}`;

                name3.innerHTML += `${names2.name}`;
                email3.innerHTML += `${names2.email}`;
                phone3.innerHTML += `${names2.phone}`;
                username3.innerHTML += `${names2.username}`;
                companyName3.innerHTML += `${names2.company.name}`;
                city3.innerHTML += `${names2.address.city}`;

                name4.innerHTML += `${names3.name}`;
                email4.innerHTML += `${names3.email}`;
                phone4.innerHTML += `${names3.phone}`;
                username4.innerHTML += `${names3.username}`;
                companyName4.innerHTML += `${names3.company.name}`;
                city4.innerHTML += `${names3.address.city}`;
                
                name5.innerHTML += `${names4.name}`;
                email5.innerHTML += `${names4.email}`;
                phone5.innerHTML += `${names4.phone}`;
                username5.innerHTML += `${names4.username}`;
                companyName5.innerHTML += `${names4.company.name}`;
                city5.innerHTML += `${names4.address.city}`;
                
                name6.innerHTML += `${names5.name}`;
                email6.innerHTML += `${names5.email}`;
                phone6.innerHTML += `${names5.phone}`;
                username6.innerHTML += `${names5.username}`;
                companyName6.innerHTML += `${names5.company.name}`;
                city6.innerHTML += `${names5.address.city}`;

                name7.innerHTML += `${names6.name}`;
                email7.innerHTML += `${names6.email}`;
                phone7.innerHTML += `${names6.phone}`;
                username7.innerHTML += `${names6.username}`;
                companyName7.innerHTML += `${names6.company.name}`;
                city7.innerHTML += `${names6.address.city}`;

                name8.innerHTML += `${names7.name}`;
                email8.innerHTML += `${names7.email}`;
                phone8.innerHTML += `${names7.phone}`;
                username8.innerHTML += `${names7.username}`;
                companyName8.innerHTML += `${names7.company.name}`;
                city8.innerHTML += `${names7.address.city}`;

                name9.innerHTML += `${names8.name}`;
                email9.innerHTML += `${names8.email}`;
                phone9.innerHTML += `${names8.phone}`;
                username9.innerHTML += `${names8.username}`;
                companyName9.innerHTML += `${names8.company.name}`;
                city9.innerHTML += `${names8.address.city}`;

                name10.innerHTML += `${names9.name}`;
                email10.innerHTML += `${names9.email}`;
                phone10.innerHTML += `${names9.phone}`;
                username10.innerHTML += `${names9.username}`;
                companyName10.innerHTML += `${names9.company.name}`;
                city10.innerHTML += `${names9.address.city}`;
            })

            .catch();
    }
    users();
}

fetchedData();
})