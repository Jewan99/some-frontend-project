






const userList = document.getElementById("userList");
fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userBox = document.createElement("div");
            userBox.classList.add("user-box");

            userBox.innerHTML = `
                <h2>${user.name}</h2>
                <p>
                    <strong>ID:</strong>
                    ${user.id}
                </p>
                <p>
                    <strong>Username:</strong>
                    ${user.username}
                </p>
                <p>
                    <strong>Email:</strong>
                    ${user.email}
                </p>
                <p>
                    <strong>Phone:</strong>
                    ${user.phone}
                </p>
                <p>
                    <strong>Website:</strong>
                    ${user.website}
                </p>
                <p>
                    <strong>Address:</strong>
                    ${user.address.street},
                    ${user.address.suite},
                    ${user.address.city},
                    ${user.address.zipcode}
                </p>
                <p>
                    <strong>Company:</strong>
                    ${user.company.name}
                </p>
            `;
            userList.appendChild(userBox);

        });

    })
    .catch(error => {
        console.log("Error:", error);
        userList.innerHTML = `
            <h2>Failed to load users.</h2>
        `;
    });