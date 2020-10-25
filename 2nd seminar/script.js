/*
*여러줄 주석
*/
const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");
/*
Document.getElementById() 메서드는 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환합니다.
*/


const getUser = async (username) => {
    const response = await fetch (API_URL + username);
    const responseData = await response.json();
    console.log("responseData", responseData);

    createUserCard(responseData);
};

const createUserCard = (user) => {
    console.log("user", user);
    const cardHTML = `
        <h1>${user.name}</h>
    `;

    main.innerHTML = cardHTML;
};



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = input.value;

    if (user){
        getUser(user);
        
        input.value = "";
    }

});


