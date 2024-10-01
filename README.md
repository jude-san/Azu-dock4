# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Web Application Documentation 📄

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

#### For info on Backend resources 🧑‍💻

Click here 👉 [Backend](./backend_Logic/README.md) 👈

## Architecture Overview

The web application is designed to provide a seamless user experience with efficient backend processing. Users can register and log in, and upon successful authentication, they are presented with a dashboard displaying user data. The application records user login timestamps and sends notifications via email using Gmail SMTP.

## Technologies Used

### AWS Services

<svg class="w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-DynamoDB_32_svg__a"><stop stop-color="#2E27AD" offset="0%"></stop><stop stop-color="#527FFF" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-DynamoDB_32_svg__a)"></path><path d="M26.066 31.019v-2.866c-1.526 1.308-4.694 2.17-8.538 2.17-3.847 0-7.015-.863-8.541-2.172v2.863c0 1.411 3.508 2.984 8.54 2.984 5.027 0 8.531-1.57 8.54-2.98zm.001-8.175l.987-.006v.006c0 .625-.312 1.207-.906 1.742.726.653.906 1.294.906 1.75l-.001.008v4.67c0 2.272-4.094 3.986-9.525 3.986-5.403 0-9.48-1.696-9.523-3.951 0-.01-.005-.016-.005-.025v-4.69l.002-.008c.002-.454.183-1.09.9-1.737-.716-.65-.897-1.284-.901-1.734L8 22.85v-4.69l.002-.007c.002-.455.184-1.09.902-1.738-.718-.65-.9-1.283-.903-1.734L8 14.675v-4.69c0-.006.003-.009.003-.014C8.023 7.706 12.109 6 17.528 6c2.608 0 5.114.43 6.874 1.177l-.381.925c-1.643-.7-4.01-1.1-6.493-1.1-5.033 0-8.54 1.573-8.54 2.984 0 1.413 3.507 2.986 8.54 2.986.138.001.268 0 .403-.006l.04 1c-.148.008-.296.008-.443.008-3.847 0-7.015-.863-8.541-2.172v2.874c.006.545.543 1.02.992 1.322 1.348.89 3.763 1.496 6.454 1.622l-.047 1c-2.723-.126-5.11-.712-6.645-1.608-.384.295-.753.692-.753 1.15 0 1.411 3.507 2.984 8.54 2.984.496 0 .98-.017 1.453-.05l.072.998c-.496.036-1.006.054-1.525.054-3.847 0-7.015-.862-8.541-2.171v2.861c.006.558.542 1.033.992 1.334 1.54 1.018 4.434 1.65 7.549 1.65h.219v1.003h-.22c-3.165 0-6.029-.612-7.785-1.641-.384.295-.754.693-.754 1.152 0 1.411 3.507 2.984 8.54 2.984 5.024 0 8.527-1.567 8.538-2.978V26.333c0-.455-.367-.85-.749-1.145-.243.143-.505.28-.801.406l-.382-.922c.362-.156.678-.323.939-.5.453-.306.994-.786.994-1.328zm5.288-8.355h-3.283a.491.491 0 01-.4-.21.506.506 0 01-.067-.452l1.455-4.348h-6.528l-3.121 6.012h3.169a.49.49 0 01.392.197.505.505 0 01.084.436l-2.718 10.108 11.017-11.743zm1.51-.155L19.705 28.36a.493.493 0 01-.6.09.505.505 0 01-.233-.568l3.063-11.39h-3.342a.492.492 0 01-.423-.242.505.505 0 01-.014-.492l3.642-7.013a.493.493 0 01.436-.267h7.515c.16 0 .309.078.401.209a.51.51 0 01.066.453l-1.455 4.347h3.746c.198 0 .376.12.454.304a.51.51 0 01-.096.543zM9.728 31.04c.571.332 1.27.626 2.079.87l.281-.96c-.734-.222-1.363-.484-1.869-.779l-.491.869zm2.079-7.232l.281-.96c-.732-.221-1.36-.484-1.869-.78l-.491.87c.573.334 1.273.627 2.079.87zm-2.08-8.974l.492-.868c.505.294 1.135.558 1.87.78l-.282.96c-.81-.244-1.508-.538-2.08-.872z" fill="#FFF"></path></g></svg>

- **DynamoDB**: Used as the primary database for storing user information.

<svg class="w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-API-Gateway_32_svg__a"><stop stop-color="#4D27A8" offset="0%"></stop><stop stop-color="#A166FF" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-API-Gateway_32_svg__a)"></path><path d="M19 28h2v-1h-2v1zM14 7.262l-7 3.04v20.055l7 2.439V7.262zM15 13v14h2v1h-2v5.5a.5.5 0 01-.664.472l-8-2.787A.5.5 0 016 30.713V9.974c0-.199.118-.379.301-.458l8-3.474A.5.5 0 0115 6.5V12h2v1h-2zm18-2.698l-7-3.04v25.534l7-2.439V10.302zm1-.328v20.739a.5.5 0 01-.336.472l-8 2.787a.507.507 0 01-.454-.064.5.5 0 01-.21-.408V28h-2v-1h2V13h-2v-1h2V6.5a.5.5 0 01.699-.458l8 3.474a.499.499 0 01.301.458zM19 13h2v-1h-2v1zm4.975 2.658l-.95-.316-3 9 .95.316 3-9zm-4.829 7.196l-3-3a.502.502 0 010-.708l3-3 .708.708-2.647 2.646 2.647 2.646-.708.708z" fill="#FFF"></path></g></svg>

- **API Gateway**: Serves as the entry point for client requests, routing them to the appropriate Lambda functions.

<svg class="w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_AWS-Lambda_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop><stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_AWS-Lambda_32_svg__a)"></path><path d="M14.386 33H8.27l6.763-14.426 3.064 6.44L14.387 33zm1.085-15.798a.49.49 0 00-.442-.282h-.002a.493.493 0 00-.441.285l-7.538 16.08a.507.507 0 00.028.482c.09.145.247.233.415.233h7.206c.19 0 .363-.111.445-.286l3.944-8.489a.508.508 0 00-.002-.432l-3.613-7.591zM32.018 33h-5.882l-9.47-20.711a.491.491 0 00-.444-.289H12.37l.005-5h7.549l9.424 20.71c.08.177.256.29.446.29h2.224v5zm.49-6h-2.4L20.684 6.29a.492.492 0 00-.446-.29h-8.353a.496.496 0 00-.491.5l-.006 6c0 .132.052.259.144.354a.488.488 0 00.347.146h4.032l9.468 20.711c.08.176.254.289.445.289h6.686a.495.495 0 00.491-.5v-6c0-.276-.219-.5-.491-.5z" fill="#FFF"></path></g></svg>

- **Lambda Functions**: Handle backend logic for user registration, login, and data retrieval.

<svg class="w-6 h-6" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M44.083 32.581a72.853 72.853 0 00-2.082.191l-.168.018c-1.765.182-3.763.387-4.714.257-.594-.085-1.688-.56-2.848-1.063-1.966-.852-4.414-1.914-6.627-2.084-3.046-.234-8.31.34-11.703 1.931-1.962-.088-3.782-.616-5.196-1.488a46.44 46.44 0 01-.012-.649c0-4.136 1.938-8.015 5.32-10.65a15.176 15.176 0 017.66-2.052c6.12 0 11.553 3.617 13.672 8.942h-.813c-.814 0-1.496.576-1.663 1.34l-.412-.156c-2.03-.783-4.813-1.854-8.031-1.663-4.705.276-7.02.56-8.843 1.08l.549 1.924c1.668-.477 3.868-.74 8.41-1.008 2.785-.158 5.338.818 7.195 1.533.395.153.752.286 1.09.407v.205c0 .939.766 1.704 1.705 1.704h3.647c.937 0 1.7-.762 1.704-1.698l.354-.032a175.57 175.57 0 001.595-.151l.21-.021v3.183zM9.799 34.249c-2.65.363-4.742.039-5.608-.496.525-.371 1.71-.89 2.544-1.254a43.482 43.482 0 002.16-1.004c1.154.879 2.583 1.538 4.165 1.931-.915.368-2.048.658-3.261.823zM36.868 29.3h3.055v-1.366h-3.055V29.3zM26.586 13c8.368 0 15.396 6.295 16.43 14.492-.287.028-.591.057-.912.086l-.185.016a1.704 1.704 0 00-1.7-1.66h-.711c-2.201-6.477-8.576-10.942-15.795-10.942-2.674 0-5.29.612-7.641 1.775.017-.014.03-.029.046-.042A16.59 16.59 0 0126.586 13zm18.94 14.794a1.625 1.625 0 00-.497-.298C43.983 18.185 36.049 11 26.586 11a18.595 18.595 0 00-11.732 4.175 18.504 18.504 0 00-6.85 14.406c0 .041.004.082.004.123-.667.335-1.372.655-2.073.962-2.136.934-3.68 1.608-3.91 2.826-.057.309-.067.914.52 1.502 1.038 1.037 3.028 1.409 5.05 1.409.842 0 1.688-.064 2.474-.172 1.339-.182 3.839-.673 5.536-1.915 2.678-1.941 8.733-2.667 11.886-2.422 1.879.145 4.155 1.132 5.985 1.925 1.396.607 2.5 1.085 3.366 1.208 1.19.163 3.136-.037 5.195-.248l.173-.017a62.627 62.627 0 011.592-.151c.215-.021.428-.036.712-.056.88-.062 1.569-.8 1.569-1.68v-3.829c0-.478-.202-.934-.556-1.252z" fill="#BF0816" fill-rule="evenodd"></path></svg>

- **IAM Roles**: Manage permissions and access control for AWS resources.

- **DynamoDB Triggers**: Invoke Lambda functions in response to data changes in DynamoDB.

### Frontend

<img src="./src/assets/react.svg" alt="flowchart" width="35"/>

- **React with Vite**: Provides a fast and efficient development environment for building the user interface.

### Notification/Email Feature

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="100" viewBox="0 0 48 48">
<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
</svg>

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
