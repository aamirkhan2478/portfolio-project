// Mobile Nav Toggle
const mobileBtn = document.querySelector(".mobile-toggle-btn");
const headerNav = document.querySelector(".header");
const navLink = document.querySelectorAll(".link-nav");

mobileBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
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
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tota  reprehenderit incidunt quo nm! Mollitia consequatur vero distinct blanditiis obcaecati dolorib?",
    languages: ["MongoDB", "Node", "Express", "React"],
    live: "https://dtvsforfuuast.herokuapp.com/",
    source: "https://github.com/aamirkhan2478",
    img: "./assets/images/post-image-desktop.png",
  };

  // Get all data from languages array in side mainCardDetails object
  const languagesArr = mainCardDetails.languages.map(
    (language) => `<li>${language}</li>`,
  );

  // Add dynamic data in main card
  let mainCardData = "";
  mainCardData += `
                  <h1 class='work-main-heading'>My Recent Works</h1>
                  <hr class='divider' />
                  <div class='main-card' id='main'>
                    <img src=${mainCardDetails.img} class='post-image'/>
                    <div class='main-card-content'>
                      <h4 class='work-title-post'>${mainCardDetails.title}</h4>
                      <p class='work-supporting-text'>
                        ${mainCardDetails.desc}
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
      title: "Degree Tracking system",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totamreprehenderit incidunt quo nam Mollitia consequatur vero distinctio anditiis obcaecati doloribus",
      languages: ["MongoDB", "Node", "Express", "React"],
      live: "https://dtvsforfuuast.herokuapp.com/",
      source: "https://github.com/aamirkhan2478",
      img: "./assets/images/Cardimage.png",
    },
    {
      id: 2,
      title: "Calculator App",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totamreprehenderit incidunt quo nam Mollitia consequatur vero distinctio anditiis obcaecati doloribus",
      languages: ["MongoDB", "Node", "Express", "React"],
      live: "https://dtvsforfuuast.herokuapp.com/",
      source: "https://github.com/aamirkhan2478",
      img: "./assets/images/calculator-app.png",
    },
    {
      id: 3,
      title: "Chat App",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totamreprehenderit incidunt quo nam Mollitia consequatur vero distinctio anditiis obcaecati doloribus",
      languages: ["MongoDB", "Node", "Express", "React"],
      live: "https://dtvsforfuuast.herokuapp.com/",
      source: "https://github.com/aamirkhan2478",
      img: "./assets/images/chat-app.jpg",
    },
    {
      id: 4,
      title: "Conference App",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totamreprehenderit incidunt quo nam Mollitia consequatur vero distinctio anditiis obcaecati doloribus",
      languages: ["MongoDB", "Node", "Express", "React"],
      live: "https://dtvsforfuuast.herokuapp.com/",
      source: "https://github.com/aamirkhan2478",
      img: "./assets/images/conference-app.jpg",
    },
    {
      id: 5,
      title: "Counter App",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totamreprehenderit incidunt quo nam Mollitia consequatur vero distinctio anditiis obcaecati doloribus",
      languages: ["MongoDB", "Node", "Express", "React"],
      live: "https://dtvsforfuuast.herokuapp.com/",
      source: "https://github.com/aamirkhan2478",
      img: "./assets/images/counter-app.png",
    },
    {
      id: 6,
      title: "Timer App",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totamreprehenderit incidunt quo nam Mollitia consequatur vero distinctio anditiis obcaecati doloribus",
      languages: ["MongoDB", "Node", "Express", "React"],
      live: "https://dtvsforfuuast.herokuapp.com/",
      source: "https://github.com/aamirkhan2478",
      img: "./assets/images/timer-app.png",
    },
  ];

  // Fetch all cards details from cardsDetails array of objects
  let cardData = "";
  cardDetails.map((card) => {
    // Fetch languages array from a languages object
    const languagesArr = card.languages.map((lang) => `<li>${lang}</li>`);

    // Add dynamic in other cards
    cardData += `
                <div class='card-desktop' id='card-image-${card.id}'>
                  <img src='${card.img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${card.title}</h1>
                    <p class='card-text'>${card.desc}</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn-hidden'
                      onclick='otherModal(${card.id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
                <div class='card'>
                  <img src='${card.img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${card.title}</h1>
                    <p class='card-text'>${card.desc}</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn'
                      onclick='otherModal(${card.id})'
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
                        <h1>${mainCardDetails.title}</h1>
                        <ion-icon name='close' class='modal-close-icon'></ion-icon>
                      </div>
                      <ul class='modal-languages-list'>
                        ${mainCardDetails.languages.map(
    (lang) => `<li>${lang}</li>`,
  )}
                      </ul>
                      <div class='modal-content'>
                        <div class='modal-image-mobile'>
                          <img src='${mainCardDetails.img}' alt='modal image' />
                        </div>
                        <div class='modal-image-desktop'>
                          <img src='${mainCardDetails.img}' alt='modal image' />
                        </div>
                        <p class='title'>${mainCardDetails.desc}</p>
                      </div>
                      <div class='buttons'>
                        <a href='${
  mainCardDetails.live
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
  mainCardDetails.source
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
                      ${data.languages.map((lang) => `<li>${lang}</li>`)}
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
});

// Form Validation
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert-danger");

const submitForm = (e) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const str = email.value;
  if (str === str.toLowerCase()) {
    if (regex.test(str)) {
      alert.classList.remove("show-alert");
    } else {
      e.preventDefault();
      alert.classList.add("show-alert");
      alert.innerHTML = `
          <span>
            <ion-icon name="close-circle" class="alert-icon"></ion-icon>
          </span>
          You enter invalid email address!
    `;
    }
  } else {
    e.preventDefault();
    alert.classList.add("show-alert");
    alert.innerHTML = `
          <span>
            <ion-icon name="close-circle" class="alert-icon"></ion-icon>
          </span>
          Please enter lowercase letters.
    `;
  }
  setTimeout(() => {
    alert.classList.remove("show-alert");
  }, 2500);
};

submit.addEventListener("click", submitForm);

//Store data in localStorage 

changeHandler = () => { 
  let field = { 
    name: fullName.value, 
    email: email.value, 
    message: message.value, 
  }; 
  localStorage.setItem("user", JSON.stringify(field)); 
}; 