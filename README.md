<div align="center">

# 🚀 SpaceX Mission App  
### COMP3133 Lab Test 2A  

<p>
  <b>Heemal Syangbo</b> &nbsp;|&nbsp;
  Student ID: 101532464 &nbsp;|&nbsp;
  COMP3133
</p>

<p>
  A modern Angular application that integrates with the <b>SpaceX REST API</b> to explore launch missions with filtering and detailed views.
</p>

<p>
  🌐 <b>Live Application</b><br>
  👉 https://101532464-comp3133-lab-test2.vercel.app/
</p>

</div>

---

## 📌 Overview
The <b>SpaceX Mission App</b> is a responsive Angular application built for <b>COMP3133 Lab Test 2A</b>.  
It allows users to browse SpaceX launches, filter them by launch year, and view detailed mission information through a clean and intuitive interface.

---

## ✨ Core Features
- 🚀 Display all SpaceX launch missions  
- 🔍 Filter missions by launch year  
- 📄 View detailed mission information  
- ⚡ Fast and reactive UI using Angular Signals  
- 🧩 Modular architecture with reusable components  
- 🎨 Clean UI with Angular Material  

---

## 🛠️ Tech Stack
- **Angular 21**
- **TypeScript**
- **Angular Material**
- **RxJS**
- **HTML5 & CSS3**

🔗 API Used: https://api.spacexdata.com/v3/launches  

---

## 📂 Architecture
- **mission-list** → Displays all missions  
- **mission-filter** → Handles year-based filtering  
- **mission-details** → Shows selected mission details  
- **SpacexApiService** → Centralized API communication  
- **mission.model.ts** → Type-safe data structure  

---

## ▶️ Run Locally
```bash
cd spacex-labtest2
npm install
npm start
Open in browser:
http://localhost:4200
