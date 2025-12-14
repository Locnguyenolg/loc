# 🎭 Playwright TodoMVC Automation Framework

A robust End-to-End (E2E) test automation project demonstrating modern testing practices using **Playwright** with JavaScript against a React Application.

## 🚀 Project Overview

This project automates critical user workflows of the [TodoMVC React Application](https://todomvc.com/examples/react/dist/), showcasing:
- **Resilient Locator Strategies** using `getByRole` and `getByTestId`
- **Atomic Test Design** principles
- **Page Interventions** (Input, Click, Filter, Check)
- **State Verification** & Assertions

## 🛠️ Tech Stack

- **Automation Tool:** [Playwright](https://playwright.dev/)
- **Language:** JavaScript
- **Test Runner:** Playwright Test
- **Reporting:** Playwright HTML Reporter

## 📂 Test Scenarios Covered

The project includes atomic tests (`todo.spec.js`) covering:
1.  ✅ **Task Creation:** Adding multiple Todo items dynamically
2.  ✅ **Task Management:** Marking items as completed
3.  ✅ **Filtering:** Verifying 'Active' vs 'Completed' filters
4.  ✅ **Verification:** Asserting visibility and state of todo items

## 🏃‍♂️ How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pratik9905/MiniProject_PlayWright.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run tests (Headless):**
    ```bash
    npx playwright test
    ```
4.  **Run tests (Headed):**
    ```bash
    npx playwright test --headed
    ```
5.  **View Report:**
    ```bash
    npx playwright show-report
    ```

## 🤝 Contribution

Feel free to fork this project and submit PRs! Open to discussions on improving test patterns.

---
*Created by Pratik - SDET / QA Engineer*
