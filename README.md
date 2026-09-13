# 🧱 Dev Stack Builder

A responsive web app that helps developers explore and build their ideal tech stack — pick technologies across frontend, backend, database, styling, DevOps, and more, then curate them into a personal "stack" you can review, adjust, and clear at any time.

## 📖 About

Dev Stack Builder lets you browse a curated list of popular development technologies, each shown with its category, difficulty level, rating, and a short description. You can add technologies to your personal stack with one click, see them collected in a sidebar, and remove them individually or all at once — all backed by toast notifications so every action gives clear feedback.

## 🛠️ Built With

- **React** (with TypeScript)
- **Vite** — build tool and dev server
- **Tailwind CSS** + **daisyUI** — styling and UI components
- **React-Toastify** — alert/notification system
- **JSON** — local data source for all technology entries

## ✨ Features

1. **Interactive Stack Builder** — browse 20 technologies across 7 categories, add or remove them from your personal stack, with duplicate-add prevention and a "Remove All" option.
2. **Shared Gradient Brand Theme** — a single CSS variable (`--gradient-brand`) powers the brand name, hero heading highlight, and primary buttons, so the whole site's accent color can be re-themed by changing one value.
3. **Fully Responsive Design** — a distinct, purpose-built mobile layout (collapsible hamburger nav, stacked hero, single-column cards, simplified footer) alongside the full desktop experience, using Tailwind's responsive breakpoints throughout.

## 🔗 Links

- **Live Site:** [add your deployed link here]
- **Repository:** https://github.com/Srabon-bot/DevStack

---

## 🧠 React Concepts — In My Own Words

### 1. What is JSX, and why is it used in React?
JSX basically let me write HTML looking code inside my JavaScript file. So instead of writing React.createElement() every time which is very long and confusing, I can just write a div like normal HTML. React understand this and convert it to real elements behind the scene. It is used because it make the code way more readable, you can see the UI structure and the logic together in same place instead of jumping between files.

### 2. What is the difference between props and state?
Props is data that comes from the parent component, and the child cannot change it, it just use it. State is different, it is data that the component keep for itself and it can change over time, usually when user do some action like clicking button. In my project, stack object is passed as props to StackCard from its parent, but selectedStacks is a state which I made using useState inside Stacks.tsx, because this data need to update every time user add or remove a technology.

### 3. What does the useState hook do, and where did you use it in this project?
useState hook is used to give a component its own memory basically, so it can hold value and update it, and whenever that value change, component re-render automatically. I used this in Stacks.tsx for selectedStacks, this array store all the technology user selected. Every time setSelectedStacks get called (like when adding or removing something), the app updates and shows the new list right away.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect hook let you run some code after component render, mostly for things like fetching data or doing something that is not directly related to showing UI. First I was thinking to use useEffect with fetch for loading my data.json file when component mount, since fetching data is exactly this type of side effect. But at the end I used a different approach, I used the use() hook with a promise that I create outside the component, and this works together with Suspense to show loading state, so I didn't need useEffect for this part in my final code.

### 5. Why does every item in a .map() list need a unique key prop?
The key prop help React to identify which item in the list is which, so when something change, add, or remove, React know exactly what to update instead of re-rendering whole list again. If you don't give unique key, sometimes React get confused and show wrong data in wrong card, or the state can get messed up. I use each technology id (like react or vuejs) as the key because these value is always unique and not gonna change.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering mean showing different thing on screen depending on a condition, kind of like if-else but for JSX. I used it in SelectedStacks.tsx, if selectedStacks.length is 0 then it shows a message "No technologies selected yet" with empty box design, but if there is something selected, then it shows the count and the list of selected cards with the Remove All button instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent send data to child using props, this is the normal way, like how Stacks.tsx pass selectedStacks and setSelectedStacks down to AllStacks and SelectedStacks. But for child to send data back to parent, parent need to pass a function as prop, and child just call that function whenever it want to send something. In my project StackCard get setSelectedStacks function from parent as prop, and it calls it like setSelectedStacks with the new array when user click "Add to Stack" button, this is how child talk back to parent basically.