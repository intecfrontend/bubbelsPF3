export default [
  {
    id: "1",
    imageName: "recipeapp.png",
    seelink: "https://epic-thompson-89844b.netlify.app/",
    codelink:
      "https://github.com/FrontEnd-React3/recipe-calories/blob/master/src/App.js",
    tag: ["Show all", "React"],
    title: "Cookbook",
    software: "React",
    description: "Cookbook with API calory selector",
    date: "February '20"
  },

  {
    id: "2",
    imageName: "amazonshop.png",
    seelink: "https://blissful-ride-78dcc3.netlify.app/",
    codelink:
      "https://github.com/FrontEnd-React3/amazonshop/blob/master/src/Checkout.js",
    tag: ["Show all", "FireBase", "React"],
    title: "Amazon Shop",
    software: "React - Firebase",
    description: "Amazon clone with shopping card and login",
    date: "January '21"
  },
  {
    id: "3",
    imageName: "pizzashop.png",
    seelink: "https://agitated-johnson-c0d611.netlify.app/",
    codelink: "https://github.com/FrontEnd-React3/React-pizza",
    tag: ["Show all", "React"],
    title: "Pizzeria App",
    software: "React - GIT",
    description: "Amazon clone with shopping card and login",
    date: "March '21"
  },
  {
    id: "4",
    imageName: "income.jpg",
    seelink: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/",
    codelink: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/",
    tag: ["Show all", "React-Native"],
    title: "Mobile Phone App",
    software: "React-Native",
    description: "Getting my feet wet with React-Native",
    date: "May '21"
  } , {
    id: "5",
    imageName: "img16.jpeg",
    seelink: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/",
    codelink: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/",
    tag: ["Show all", "React", "Latest Job"],
    title: "In Progress",
    software: "React",
    description: "No jobs yet, but it could be you!",
    date: "2021"
  }
];
export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
