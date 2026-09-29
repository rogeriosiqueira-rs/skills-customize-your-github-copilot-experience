const apiUrl = "http://localhost:8000/activities";
const activities = [];

const searchInput = document.querySelector("#search-input");
const statusMessage = document.querySelector("#status-message");
const activitiesList = document.querySelector("#activities-list");

function renderActivities(items) {
  activitiesList.innerHTML = "";

  items.forEach((activity) => {
    const listItem = document.createElement("li");
    listItem.className = "activity-card";
    listItem.innerHTML = `
      <h3>${activity.name}</h3>
      <p>${activity.description}</p>
      <p>${activity.schedule}</p>
    `;
    activitiesList.append(listItem);
  });
}

async function loadActivities() {
  // TODO: buscar os dados, tratar erros e chamar renderActivities.
}

searchInput.addEventListener("input", () => {
  // TODO: filtrar activities por nome ou descrição.
});

loadActivities();