# 🚀 DEV STACK 2026

A modern, interactive web application that allows developers to explore software development tools and technologies, compare options, and build their customized tech stack[cite: 1, 2].

---

## 📝 Project Description

DEV STACK 2026 is an interactive web platform built to help developers pick and organize their ideal technology stack. Users can browse through various categories like Frontend, Backend, Database, and DevOps, select technologies to build a personalized stack panel, and manage their selections seamlessly.

---

## 🛠️ Tech Stack Used

* **React** (v19)
* **TypeScript**
* **Tailwind CSS** & **DaisyUI**
* **React Icons** (`react-icons/fc`, `react-icons/gi`, `react-icons/rx`)
* **React Toastify** (`react-toastify`)
* **Vite**

---

## ✨ Key Features

* **Interactive Tech Stack Selection:** Users can add available technologies to their personalized "Your Stack" panel with real-time UI updates and duplicate selection prevention.
* **Stack Management & Alerts:** Ability to remove individual technologies or clear the entire stack at once, complemented by toast notifications (`React-Toastify`) for user feedback[cite: 1].
* **Responsive & Sticky Navigation:** Built with a fully responsive layout featuring a mobile hamburger drawer, sticky glassmorphism navbar, and custom gradient brand styling[cite: 1, 2].

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript/TypeScript code. It is used in React because it makes code much easier to read, write, and maintain compared to using pure `React.createElement()` functions.

### 2. What is the difference between props and state?

* **Props (Properties):** Read-only data passed down from a parent component to a child component. They are immutable within the child component.
* **State:** Local data managed internally within a component. It is mutable and triggers a re-render when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components to track and manage local component state[cite: 1]. In this project, `useState` was used in `Technologies.tsx` to manage the array of selected technologies (`selectedTechnology`)[cite: 1], and in `Nav.tsx` to toggle the mobile menu state (`isMobile`)[cite: 1].

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects in React components, such as data fetching, subscriptions, or DOM manipulation. It is used when fetching JSON data because fetching is an asynchronous side effect that needs to run after the component mounts without blocking the initial render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React relies on the `key` prop to identify which items in a dynamic list have changed, been added, or been removed. Unique keys ensure efficient DOM reconciliation, avoiding unnecessary re-renders and preventing state corruption across list items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering is the process of displaying different UI elements or components based on specific conditions (such as state or props)[cite: 1].

**Example from `SelectedCard.tsx`:**

```tsx
{selectedTechnology.length === 0 ? (
    <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center">
        <p className="text-xs text-gray-400">Your stack is empty.</p>
    </div>
) : (
    <div className="space-y-3">
        {/* Render stack items */}
    </div>
)}
```
