# Rule Engine with Abstract Syntax Tree (AST)

A rule engine application built with Node.js, Express, and MongoDB to dynamically create, combine, and evaluate rules based on user attributes. The rules are parsed into an Abstract Syntax Tree (AST) format, enabling flexible rule creation, storage, and evaluation.


## Table of Contents

- [Features](#features)
  
- [Tech Stack](#tech-stack)
  
- [Setup and Installation](#setup-and-installation)
  
- [Testing](#testing)
  
- [Usage Example](#usage-example)
  
- [Future Enhancements](#future-enhancements)


## Features

- **Dynamic Rule Creation:**: Supports complex rules with conditional operators (AND, OR).
  
- **AST Representation:**: Rules are parsed into an AST, allowing efficient evaluation and modification.
  
- **Admin Interface:**: Allows for rule creation and modification via a simple UI.
  
- **API Integration:**: Provides API endpoints to create and evaluate rules.
  
- **Persistent Storage:**: Rules are stored in MongoDB, enabling retrieval and reuse.
  

## Tech Stack

- **Frontend:**: Supports complex rules with conditional operators (AND, OR).
  
- **Backend:**: Supports complex rules with conditional operators (AND, OR).
  
- **Database:**: Supports complex rules with conditional operators (AND, OR).
  
- **Testing:**: Supports complex rules with conditional operators (AND, OR).


## Setup and Installation

**Prerequisites:**

**1. Node.js:**
   - Ensure Node.js (v14 or above) is installed. You can download it from Node.js official website.
    
**2. MongoDB:**
   - Install MongoDB locally or use MongoDB Atlas for a cloud-hosted solution. Sign up at MongoDB Atlas if you choose the cloud version.
     
**Install Dependencies:**
   - After navigating to the backend folder, install all necessary dependencies using npm: Run **npm install** in the terminal. This will install packages like **Express** for server setup, **Mongoose** for **MongoDB** interactions, and Jest for testing.

**Set Up MongoDB:**

   **1. If you’re using MongoDB Atlas:**
   - Create a new cluster and database.
   - Copy the connection URI and replace <username>, <password>, and <dbname> with your credentials and database name.

   **2. If you’re using local MongoDB:**
   - Make sure MongoDB is running on mongodb://localhost:27017.
   - You may need to create a database manually if MongoDB is set up with authentication.


## Testing

- **Jest:**: Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.To test the application run **npm test** in the terminal.


## Usage Example

**1. Create a Rule:**
   - Send a POST request to /api/create-rule with a rule string, such as (age > 30 AND department = 'Sales') OR (salary > 50000).
   - This generates an AST and stores it in MongoDB.

  
**2. Evaluate a Rule:**
 - Send a POST request to /api/evaluate with the ruleId and the user data you want to evaluate.
 - The response will indicate if the user data matches the rule.


## Future Enhancements

- **User Interface:**: A full admin UI with React for managing rules.
  
- **Complex Rules:**: Support nested conditions and more complex operators.
  
- **Optimization:**: Caching frequent evaluations for faster results.
