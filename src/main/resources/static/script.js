// Create Registration
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;

    const registrationData = {
        name: name,
        email: email,
        dateOfBirth: dateOfBirth
    };

    fetch('/api/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('response').innerText = 'Registration successful: ' + JSON.stringify(data);
        fetchAllRegistrations(); // Refresh the list after creating a registration
    })
    .catch((error) => {
        document.getElementById('response').innerText = 'Registration failed: ' + error;
    });
});

// Update Registration
document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const updateId = document.getElementById('updateId').value;
    const updateName = document.getElementById('updateName').value;
    const updateEmail = document.getElementById('updateEmail').value;
    const updateDob = document.getElementById('updateDob').value;

    const updateData = {
        name: updateName,
        email: updateEmail,
        dateOfBirth: updateDob
    };

    fetch(`/api/registration/${updateId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('response').innerText = 'Registration updated successfully: ' + JSON.stringify(data);
        fetchAllRegistrations(); // Refresh the list after updating
    })
    .catch((error) => {
        document.getElementById('response').innerText = 'Update failed: ' + error;
    });
});

// Delete Registration
document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const deleteId = document.getElementById('deleteId').value;

    fetch(`/api/registration/${deleteId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.status === 204) {
            document.getElementById('response').innerText = 'Registration deleted successfully';
            fetchAllRegistrations(); // Refresh the list after deleting
        } else {
            document.getElementById('response').innerText = 'Error deleting registration';
        }
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error: ' + error;
    });
});

// Fetch all Registrations
document.getElementById('fetchRegistrations').addEventListener('click', fetchAllRegistrations);

function fetchAllRegistrations() {
    fetch('/api/registration')
    .then(response => response.json())
    .then(data => {
        const registrationsList = document.getElementById('registrationsList');
        registrationsList.innerHTML = ''; // Clear previous list
        data.forEach(reg => {
            const regDiv = document.createElement('div');
            regDiv.textContent = `ID: ${reg.id}, Name: ${reg.name}, Email: ${reg.email}, Date of Birth: ${reg.dateOfBirth}`;
            registrationsList.appendChild(regDiv);
        });
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error fetching registrations: ' + error;
    });
}
