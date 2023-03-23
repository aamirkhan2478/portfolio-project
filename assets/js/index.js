// Mobile Nav Toggle
const mobileBtn = document.querySelector(".mobile-toggle-btn");
const headerNav = document.querySelector(".header");
const navLink = document.querySelectorAll(".link-nav");
const profilePic = document.querySelector(".profile-pic");

mobileBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  profilePic.classList.toggle("hide-profile");
});

[].forEach.call(navLink, (element) => {
  element.onclick = () => {
    headerNav.classList.remove("active");
  };
});

// Implement Dynamic Functionality for cards and modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const gridItems = document.getElementById("grid");

  // Create a new object
  const mainCardDetails = {
    title: "Degree Tracking System",
    desc: "Degree tracking system will allow the students to track their degree and check the status of their application of degree. This will facilitate both the students and the university administration. In past the process of applying and receiving the degree was manual. That takes lot of time and many students have to come to university again and again to check the status of their degree but this system will allow the students to check their degree status by sitting at home.",
    languages: ["MongoDB", "NodeJS", "ExpressJS", "ReactJS"],
    live: "https://fuudtvs.netlify.app/",
    source: "https://github.com/aamirkhan2478/fuudtvs.git",
    img: "./assets/images/Cardimage.png",
  };

  const {
    title, desc, languages, live, source, img,
  } = mainCardDetails;
  // Get all data from languages array in side mainCardDetails object
  const languagesArr = languages
    .map((language) => `<li>${language}</li>`)
    .join("");

  // Add dynamic data in main card
  let mainCardData = "";
  mainCardData += `
                  <h1 class='work-main-heading'>My Recent Works</h1>
                  <hr class='divider' />
                  <div class='main-card' id='main'>
                    <img src=${img} class='post-image'/>
                    <div class='main-card-content'>
                      <h4 class='work-title-post'>${title}</h4>
                      <p class='work-supporting-text'>
                      ${desc.slice(0, 100)} ...
                      </p>
                      <ul class='languages-list'>
                        ${languagesArr}
                      </ul>
                      <div class='btn-left'>
                        <button class='btn-primary btn' onclick='mainModal()'>See Project</button>
                      </div>
                    </div>
                  </div>
  `;

  // Create new array of objects
  const cardDetails = [
    {
      id: 1,
      title: "Learn Web",
      desc: "In this website you will learn how to create a web application. This is live conference website where you can learn more how to create a web application. This website is just a simple example of a web application. You can learn more about how to create a web application and see my source code too.",
      languages: ["HTML", "CSS", "JS"],
      live: "https://aamirkhan2478.github.io/learnweb.github.io/",
      source: "https://github.com/aamirkhan2478/learn-web",
      img: "./assets/images/learnWeb.png",
    },
    {
      id: 2,
      title: "Todo App",
      desc: "In this app, you can create your todo tasks and also you can check your todo tasks. You can remove one task and also multiple tasks and you can also edit these todo tasks.",
      languages: ["HTML", "CSS", "JS"],
      live: "https://aamirkhan2478.github.io/todo-list.github.io/",
      source: "https://github.com/aamirkhan2478/todo-list",
      img: "./assets/images/todo-list.png",
    },
    {
      id: 3,
      title: "Awesome Books",
      desc: "In this website you can add your favorite books and also see your favorite list of books. You can also delete the book you added mistakenly. You can also check the list of books you have already.",
      languages: ["HTML", "BOOTSTRAP", "JS"],
      live: "https://aamirkhan2478.github.io/awesome-books/",
      source: "https://github.com/aamirkhan2478/awsome-books-es6.git",
      img: "./assets/images/awesome-books.png",
    },
    {
      id: 4,
      title: "Leader Board",
      desc: "In this website you will add scores and also see your scores and I am using a api for fetch the data from api and also add data to the api.",
      languages: ["HTML", "BOOTSTRAP", "JS"],
      live: "https://aamirkhan2478.github.io/leader-board/dist/",
      source: "https://github.com/aamirkhan2478/leader-board",
      img: "./assets/images/leader-board.png",
    },
    {
      id: 5,
      title: "Meals Capstone",
      desc: "This is JavaScript Module capstone project, In this Project We have created website for Meals info, commenting and reservation of meals. We have used Webpack as bundler, Linters for error checking, Jest library for testing functions. We have used API to fetch data also for likes, comments and reservation.",
      languages: ["HTML", "CSS", "JS"],
      live: "https://edi-sipka.github.io/meals_capstone/dist/",
      source: "https://github.com/edi-sipka/meals_capstone",
      img: "./assets/images/meals-capstone.png",
    },
    {
      id: 6,
      title: "Math Magicians",
      desc: "This is simple math expression project that can be used to evaluate complex numbers using mathematical expressions like Mathematically complex",
      languages: ["React JS", "React Router Dom"],
      live: "https://my-math-magicians.netlify.app/",
      source: "https://github.com/aamirkhan2478/math-magicians-react",
      img: "./assets/images/math-magicians.png",
    },
    {
      id: 7,
      title: "Book Store",
      desc: "This is simple react web application we store some books and check the list of books by using API and also we remove unwanted books from lists.",
      languages: ["React JS", "Redux Toolkit", "React Router Dom"],
      live: "https://aamir-book-store.netlify.app/",
      source: "https://github.com/aamirkhan2478/book-store-react.git",
      img: "./assets/images/book-store.png",
    },
    {
      id: 8,
      title: "Space Traveler's Hub",
      desc: "This is simple react web application you can see new rockets and also reserved rockets. You can also see different missions and also join missions and also you can see you profile and check it how many missions you joined and how many rockets you reserved.",
      languages: ["React JS", "Redux Toolkit", "React Router Dom"],
      live: "https://aamir-space-hub.netlify.app/",
      source: "https://github.com/aamirkhan2478/space-traveler-hub.git",
      img: "./assets/images/rockets-page.png",
    },
    {
      id: 9,
      title: "Budget App",
      desc: "This is simple ROR budget app. You can login to your account and see your budget. You can also add and manage budgets. This is mobile version app so open on inspect or on your mobile.",
      languages: ["Ruby On Rails", "PostgreSql"],
      live: "https://my-budget-app.herokuapp.com/",
      source: "https://github.com/aamirkhan2478/budget-app.git",
      img: "./assets/images/budget-app.png",
    },
    {
      id: 10,
      title: "El Dorado",
      desc: "El Dorado Frontend is a luxury car rental application where the user can register new accounts, login and reserve a set of different cars.",
      languages: ["Ruby On Rails", "PostgreSql", "React JS"],
      live: "https://eldorado-rentals.netlify.app/",
      source: "https://github.com/aamirkhan2478/ElDorado-Frontend.git",
      img: "./assets/images/eldorado.png",
    },
    {
      id: 11,
      title: "Chakra Chat",
      desc: "Chakra chat is a chat application that allows you to chat with others ans also create a new group and connect with others.",
      languages: ["Node", "MongoDB", "React", "Express"],
      live: "https://my-chakra-chat.netlify.app/",
      source: "https://github.com/aamirkhan2478/chakra-chat-frontend",
      img: "./assets/images/chakra-chat.png",
    },
  ];

  // Fetch all cards details from cardsDetails array of objects
  let cardData = "";
  cardDetails.map((card) => {
    const {
      id, img, title, desc, languages,
    } = card;
    // Fetch languages array from a languages object
    const languagesArr = languages.map((lang) => `<li>${lang}</li>`).join("");
    // Add dynamic in other cards
    cardData += `
                <div class='card-desktop' id='card-image-${id}'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn-hidden'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
                <div class='card'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
    `;
    return cardData;
  });

  // Show all data in main and other cards
  gridItems.innerHTML = mainCardData + cardData;

  // Add dynamic modal for main cards data
  mainModal = () => {
    let modalDetails = "";
    modalDetails += `
                    <div class='modal'>
                      <div class='modal-header'>
                        <h1>${title}</h1>
                        <ion-icon name='close' class='modal-close-icon'></ion-icon>
                      </div>
                      <ul class='modal-languages-list'>
                        ${languages.map((lang) => `<li>${lang}</li>`).join("")}
                      </ul>
                      <div class='modal-content'>
                        <div class='modal-image-mobile'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <div class='modal-image-desktop'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <p class='title'>${desc}</p>
                      </div>
                      <div class='buttons'>
                        <a href='${live}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                  alt='live-icon'
                                  class='icon-right'
                                  height='18'/>
                            </span>
                        </a>
                        <a href='${source}' class='btn-primary' target='_blank'>
                          See Source
                          <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                        </a>
                      </div>
                    </div>
  `;

    // Show Data in modal
    modal.innerHTML = modalDetails;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // Add dynamic modal details for other cards
  otherModal = (id) => {
    const data = cardDetails.find((card) => card.id === id);
    let modalData = "";
    modalData += `
                  <div class='modal'>
                    <div class='modal-header'>
                      <h1>${data.title}</h1>
                      <ion-icon name='close' class='modal-close-icon'></ion-icon>
                    </div>
                    <ul class='modal-languages-list'>
                      ${data.languages
    .map((lang) => `<li>${lang}</li>`)
    .join("")}
                    </ul>
                    <div class='modal-content'>
                      <div class='modal-image-mobile'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <div class='modal-image-desktop'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <p class='title'>${data.desc}</p>
                    </div>
                    <div class='buttons'>
                      <a href='${
  data.live
}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                      </a>
                      <a href='${
  data.source
}' class='btn-primary' target='_blank'>
                        See Source
                        <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                              alt='live-icon'
                              class='icon-right'
                              height='18'/>
                        </span>
                      </a>
                    </div>
                  </div>
    `;

    // Show Data in modal
    modal.innerHTML = modalData;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // When user clicks out side of the modal, close the modal.
  document.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  new Typed(".auto-change", {
    strings: [
      "Web Developer",
      "MERN Stack Developer",
      "Full Stack Developer",
      "Front-end Developer",
      "React Native Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
});

// Form Validation
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert-danger");

const submitForm = (e) => {
  e.preventDefault();
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const emailValue = email.value;
  const nameValue = fullName.value;
  const messageValue = message.value;

  const showAlert = (message) => {
    alert.classList.add("show-alert");
    if (message === "Message sent successfully!") {
      alert.innerHTML = `<span> <ion-icon name="checkmark" class="alert-icon"></ion-icon> </span> ${message}`;
    } else {
      alert.innerHTML = `<span> <ion-icon name="close-circle" class="alert-icon"></ion-icon> </span> ${message}`;
    }
    setTimeout(() => {
      alert.classList.remove("show-alert");
      alert.classList.remove("alert-success");
    }, 2500);
  };

  if (!nameValue || !emailValue || !messageValue) {
    showAlert("Please enter all required fields");
    return;
  }

  if (emailValue !== emailValue.toLowerCase()) {
    showAlert("Please enter lowercase letters.");
    return;
  }

  if (!regex.test(emailValue)) {
    showAlert("Invalid email address!");
    return;
  }

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aamir.khan2478@gmail.com",
    Password: "660EC2AB2AB9343D6BE9C8AED37DDD75DF15",
    To: "aamir.khan2478@gmail.com",
    From: "aamir.khan2478@gmail.com",
    Subject: "Contact Information",
    Body: `Name: ${nameValue} <br/> Email: ${emailValue} <br/> Message: ${messageValue}`,
  }).then((msg) => {
    if (msg === "OK") {
      alert.classList.add("show-alert");
      alert.classList.add("alert-success");
      showAlert("Message sent successfully!");
    }
    email.value = "";
    fullName.value = "";
    message.value = "";
    localStorage.removeItem("user");
  });
};

submit.addEventListener("click", submitForm);

// Store data in localStorage
const reset = document.getElementById("reset");

changeHandler = () => {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem("user", JSON.stringify(field));
};

if (localStorage.getItem("user") === null) {
  email.value = "";
  fullName.value = "";
  message.value = "";
} else {
  const user = JSON.parse(localStorage.getItem("user"));
  email.value = user.email;
  fullName.value = user.name;
  message.value = user.message;
}

const resetFrom = (e) => {
  e.preventDefault();
  email.value = "";
  fullName.value = "";
  message.value = "";
  localStorage.removeItem("user");
};

reset.addEventListener("click", resetFrom);

// Select all the sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Add an event listener to the window that listens for a scroll event
document.addEventListener("scroll", () => {
  // Get the current position of the window
  const currentPosition = window.scrollY + 80;
  // Loop through all the sections
  sections.forEach((section) => {
    // Check if the current position is within the section
    if (
      section.offsetTop <= currentPosition
      && section.offsetTop + section.offsetHeight > currentPosition
    ) {
      // Loop through all the nav links
      navLinks.forEach((link) => {
        // Remove the active class from all the nav links
        link.classList.remove("nav-active");
        // Check if the section id is the same as the nav link href
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          // Add the active class to the nav link
          link.classList.add("nav-active");
        }
      });
    }
  });
});
