# Registration App

## Project Overview

This project is a simple registration application built with Spring Boot for the backend and basic HTML/CSS/JavaScript for the frontend.

## Backend Setup

1. **Prerequisites**:
   - Java JDK 11
   - Maven

2. **Steps to Run the Backend**:
   1. Navigate to the `com.example.registration` directory.
   2. Run the following command to build the project:
      ```bash
      mvn clean install
      ```
   3. Start the Spring Boot application:
      ```bash
      mvn spring-boot:run
      ```
   4. The backend should now be running at `http://localhost:8080/api/registration`.

## Frontend Setup

1. Type `http://localhost:8080/` in a web browser to access the registration form.

## API Endpoints

- **POST /api/registration**: Create a new registration.
- **GET /api/registration/{id}**: Retrieve a registration by ID.
- **GET /api/registration**: Retrieve all registrations.
- **PUT /api/registration/update/{id}**: Update a registration.
- **DELETE /api/registration/delete/{id}**: Delete a registration.

## Contributing

Feel free to fork the repository and submit pull requests.

![RegistrationApp1](https://github.com/user-attachments/assets/a2985c40-9d3c-4c37-820c-6a0ac8038a92)

![RegistrationApp2](https://github.com/user-attachments/assets/f738cd31-1df7-4fe8-b6fa-c1982fedee85)

