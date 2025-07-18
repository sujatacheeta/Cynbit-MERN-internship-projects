const users = [                                                                           // users array
  { name: "Abhishek Mehra", branch: "AIDS", email: "abhishek@gmail.com", year: 2019 },
  { name: "Urvashi Baria", branch: "ECE", email: "urvashi@gmail.com", year: 2024 },
  { name: "Sakshi Gupta", branch: "CSE", email: "sakshi@gmail.com", year: 2024 },
  { name: "Tanisha Jindal", branch: "CSE", email: "tanisha@gmail.com", year: 2021 },
  { name: "Soumi Mishra", branch: "EE", email: "soumi@gmail.com", year: 2023 },
  { name: "Tanvi Gupta", branch: "IT", email: "tanvi@gmail.com", year: 2025 }
];

let filteredUsers = [...users];
let sortedAsc = true;

const userList = document.getElementById("userList");
const searchInput = document.getElementById("search");
const sortBtn = document.getElementById("sortBtn");

function displayUsers(usersToDisplay) {
  userList.innerHTML = "";
  usersToDisplay.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Branch: ${user.branch}</p>
      <p>Email: ${user.email}</p>
      <p>Year: ${user.year}</p>
    `;
    userList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm) ||
    user.branch.toLowerCase().includes(searchTerm)
  );
  displayUsers(filteredUsers);
});

sortBtn.addEventListener("click", () => {
  filteredUsers.sort((a, b) => sortedAsc ? a.year - b.year : b.year - a.year);
  sortedAsc = !sortedAsc;
  displayUsers(filteredUsers);
});

displayUsers(filteredUsers);