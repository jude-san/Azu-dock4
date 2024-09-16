# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Web Application Documentation

## Overview

This documentation provides an in-depth look into the web application developed using AWS services and modern frontend technologies. The application leverages AWS DynamoDB, API Gateway, Lambda functions, IAM roles, and DynamoDB triggers on the backend, while utilizing React with Vite on the frontend. Additionally, it incorporates a notification/email feature using Gmail SMTP.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technologies Used](#technologies-used)
3. [Architecture Diagram](#architecture-diagram)
4. [Budget Estimation](#budget-estimation)
   - [Solution A: Cost Optimization](#solution-a-cost-optimization)
   - [Solution B: High Performance](#solution-b-high-performance)
5. [Preferred Solution](#preferred-solution)
6. [Conclusion](#conclusion)

---

## Architecture Overview

The web application is designed to provide a seamless user experience with efficient backend processing. Users can register and log in, and upon successful authentication, they are presented with a dashboard displaying user data. The application records user login timestamps and sends notifications via email using Gmail SMTP.

## Technologies Used

### AWS Services

- **DynamoDB**: Used as the primary database for storing user information.
- **API Gateway**: Serves as the entry point for client requests, routing them to the appropriate Lambda functions.
- **Lambda Functions**: Handle backend logic for user registration, login, and data retrieval.
- **IAM Roles**: Manage permissions and access control for AWS resources.
- **DynamoDB Triggers**: Invoke Lambda functions in response to data changes in DynamoDB.

### Frontend

- **React with Vite**: Provides a fast and efficient development environment for building the user interface.

### Notification/Email Feature

- **Gmail SMTP**: Utilized for sending email notifications to users upon certain events (e.g., successful registration or login).

---

## Architecture Diagram

Below is a textual representation of the architecture diagram:

1. **Client (Browser)**

   - Users interact with the application through a React frontend.

2. **API Gateway**

   - Receives HTTP requests from the client and routes them to appropriate Lambda functions.

3. **Lambda Functions**

   - **Registration Function**: Handles user registration, stores data in DynamoDB.
   - **Login Function**: Authenticates users, updates login timestamps in DynamoDB.
   - **Notification Function**: Sends emails via Gmail SMTP upon certain triggers.
   - **Data Retrieval Function**: Fetches user data for the dashboard.

4. **DynamoDB**

   - Stores user data, including authentication tokens and login timestamps.
   - DynamoDB triggers invoke Lambda functions when data changes occur.

5. **IAM Roles**

   - Control access between AWS services, ensuring secure interactions.

6. **Gmail SMTP Server**
   - External service used by Lambda functions to send email notifications.

Below is a diagram representation of the architecture diagram:

<img src="./src/assets/User Flowchart.png" alt="flowchart" width="500"/>

<img src="./src/assets/Cloud Infract Azu-dock.drawio.png" alt="Cloud infract." width="500"/>

<img src="./src/assets/Backend Lambda Azu-dock.drawio.png" alt="backend infract." width="500"/>

---

## Budget Estimation

### Solution A: Cost Optimization

**Objective**: Minimize costs while maintaining acceptable performance for small to medium workloads.

#### AWS Services

- **DynamoDB (On-Demand Capacity Mode)**

  - Costs are based on actual read/write requests.
  - Suitable for applications with unpredictable traffic patterns.

- **Lambda Functions**

  - Allocate minimal memory (e.g., 128 MB) to reduce costs.
  - Code optimization to ensure functions execute quickly.

- **API Gateway**

  - Use the REST API option, which is more cost-effective than WebSocket APIs for standard HTTP requests.

- **IAM Roles**
  - Use minimal policies required to reduce overhead.

#### Email Notifications

- **Gmail SMTP**
  - Free for low-volume email sending.
  - May have limitations on the number of emails sent per day.

#### Estimated Monthly Costs

- **DynamoDB**: \$5 - \$10 (assuming low read/write operations)
- **Lambda**: \$1 - \$5 (depending on invocation count and execution time)
- **API Gateway**: \$3 - \$5 (based on number of API calls)
- **Total Estimated Cost**: \$9 - \$20 per month

### Solution B: High Performance

**Objective**: Optimize for high performance and scalability, suitable for large workloads.

#### AWS Services

- **DynamoDB (Provisioned Capacity with Auto Scaling)**

  - Pre-allocate read/write capacity units for consistent performance.
  - Auto Scaling adjusts capacity based on traffic.

- **Lambda Functions**

  - Increase memory allocation (e.g., 512 MB or more) for faster execution.
  - Use provisioned concurrency to reduce cold start times.

- **API Gateway**

  - Utilize HTTP APIs for lower latency and cost compared to REST APIs.
  - Enable caching to reduce backend load.

- **IAM Roles**
  - Fine-grained access control for enhanced security.

#### Email Notifications

- **Gmail SMTP**
  - May not be sufficient for high-volume email sending.
  - Consider using AWS Simple Email Service (SES) for better scalability.

#### Estimated Monthly Costs

- **DynamoDB**: \$50 - \$100 (based on higher provisioned capacity)
- **Lambda**: \$10 - \$30 (due to higher memory allocation and provisioned concurrency)
- **API Gateway**: \$5 - \$15 (more API calls and caching costs)
- **AWS SES (Optional)**: \$5 - \$20 (if replacing Gmail SMTP)
- **Total Estimated Cost**: \$70 - \$165 per month

---

## Preferred Solution

### Solution A: Cost Optimization

**Reasons for Preference**:

- **Cost-Effective**: Ideal for startups or projects with budget constraints.
- **Sufficient Performance**: Adequate for applications with moderate traffic.
- **Scalability**: AWS services can scale as the application grows, with the option to switch to higher performance configurations when needed.
- **Simplicity**: Easier to manage and maintain with fewer complexities.

**Considerations**:

- **Performance Trade-offs**: May experience latency during peak times due to lower resource allocation.
- **Email Limitations**: Gmail SMTP may not handle high email volumes; monitor usage to avoid service interruptions.

---

## Conclusion

The web application leverages a robust set of AWS services and modern frontend technologies to deliver a functional and efficient user experience. While both solutions offer their own advantages, **Solution A (Cost Optimization)** is preferred due to its balance between cost and performance, making it suitable for current application needs and allowing room for scaling in the future.

---

**Note**: The budget estimates are approximate and can vary based on actual usage patterns. It's recommended to monitor AWS costs regularly and adjust resource allocations as needed.
