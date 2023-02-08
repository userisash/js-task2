const input = document.querySelector("#username");
const searchBtn = document.querySelector("#searchBtn");
const userCardsContainer = document.querySelector("#user-cards-container");

searchBtn.addEventListener("click", function() {
  fetchUser(input.value);
});

input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    fetchUser(input.value);
  }
});

function fetchUser(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then(userData => {
        const existingCard = userCardsContainer.querySelector(
          `.user-card[data-username="${username}"]`
        );
        if (existingCard) {
          return;
        }
        const userCard = createUserCard(userData, username);
        userCardsContainer.appendChild(userCard);
        input.value = "";
        input.focus();
      })
      .catch(error => {
        console.error(error);
        alert("Error: Failed to fetch user data");
      });
  }
  
  function createUserCard(userData, username) {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.setAttribute("data-username", username);
  
    const avatar = document.createElement("img");
    avatar.src = userData.avatar_url;
    avatar.alt = "User Avatar";
    card.appendChild(avatar);
  
    const name = document.createElement("h3");
    name.textContent = userData.name || username;
    card.appendChild(name);
  
    const publicRepos = document.createElement("p");
    publicRepos.textContent = `Public Repos: ${userData.public_repos}`;
    card.appendChild(publicRepos);
  
    card.addEventListener("click", function() {
      window.open(userData.html_url, "_blank");
    });
  
    return card;
  }
  
