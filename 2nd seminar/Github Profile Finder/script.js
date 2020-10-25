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

const createUserCard = (user) => {
    console.log("user", user);
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}>
            <div/>
            <div class="user-info">
                <h2>${user.name}</h2> 
                <p>${user.bio}</p>
                <ul class="info">
                    <li><strong>Followers</strong>${user.followers}</li>
                    <li><strong>Following</strong>${user.following}</li>
                    <li><strong>Repos</strong>${user.public_repos}</li>
                </ul>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
};
/*
${} string 탬플릿 리터럴. 처리된 값을 문자열로 반환한다. ``으로 선언할 수 있다.
함수 사용하면서 html 작성하려고 일케 넣는건가요? 원래 html 은 최소로 하고 JS로 코드 추가 하는게 좋은건가용?
*/

const addRepoToCard = (repos) => {
    const repoE1 = document.getElementById("repos");

    repos.slice(0, 10).forEach((repo) =>{ //.slice()는 배열의 일부분을 선택하여 새로운 배열을 만든다
        const repoE1 = document.createElement("a");
        repoE1.classList.add("repo");
        repoE1.href = repo.html_url;
        repoE1.target = "blank";
        repoE1.innerText = repo.name;

        reposE1.appendChild(repoE1);
    });
};

/*
요기 다시공부
*/

const getRepo = async (username) => {
    const response = await fetch(`${API_URL}${username}/repo`);
    const responseData = await response.json();
    
    addRepoToCard(responseData);
}
/*
Fetch API 이용 -> Request, Response 와 같은 HTTP의 파이프라인을 구성하는 요소를 조작. 비동기 네트워크 통신 알기쉽게 

*/

const getUser = async (username) => {
    const response = await fetch (API_URL + username);
    const responseData = await response.json();
    console.log("responseData", responseData);

    createUserCard(responseData);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = input.value;

    if (user){
        getUser(user);
        input.value = "";
    }

});


