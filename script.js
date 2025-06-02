const reviews = [
  {
    stars: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur  Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    name: "Talan Westervelt",
    role: "Graphic Designer",
    img: "assets/Profile (2).png"
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur  Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    name: "James Gouse",
    role: "Photographer",
    img: "assets/Profile.png"
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur  Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    name: "Tiana Philips",
    role: "Business Man",
    img: "assets/Profile (1).png"
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur  Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    name: "Talan Westervelt",
    role: "Business Man",
    img: "assets/Profile (2).png"
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur  Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    name: "Talan Westervelt",
    role: "Business Man",
    img: "assets/Profile.png"
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur  Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    name: "Talan Westervelt",
    role: "Graphic Designer",
    img: "assets/Profile (1).png"
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur  Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    name: "Talan Westervelt",
    role: "Business Man",
    img: "assets/Profile.png"
  },
];




const reviewBox = document.querySelector(".reviewBox");
const dotsContainer = document.getElementById("pagination-dots");


const clonedReviews = [...reviews];
const total = clonedReviews.length;


const firstClone = { ...clonedReviews[0] };
const lastClone = { ...clonedReviews[total - 1] };


clonedReviews.unshift(lastClone); 
clonedReviews.push(firstClone);  


clonedReviews.forEach((review, index) => {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("reviewCard");
  reviewCard.innerHTML = `
    <div class="stars">${'★'.repeat(review.stars)}</div>
    <h3>${review.title}</h3>
    <p>${review.text}</p>
    <div class="profile">
      <img src="${review.img}" alt="${review.name}" />
      <div class="profile-info">
        <h4>${review.name}</h4>
        <span>${review.role}</span>
      </div>
    </div>
  `;
  reviewBox.appendChild(reviewCard);
});


for (let i = 0; i < total; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
}


let currentIndex = 0;
const slideWidth = reviewBox.children[0].offsetWidth;
reviewBox.scrollLeft = slideWidth; 

function updateCarousel() {
  const newIndex = currentIndex + 1;
  const slideWidth = reviewBox.children[0].offsetWidth;

  reviewBox.scrollTo({
    left: newIndex * slideWidth,
    behavior: "smooth",
  });

  document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
  dotsContainer.children[currentIndex].classList.add("active");
}


setInterval(() => {
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
}, 5000);


reviewBox.addEventListener("scroll", () => {
  const slideWidth = reviewBox.children[0].offsetWidth;
  const maxIndex = total + 1;


  if (reviewBox.scrollLeft >= slideWidth * maxIndex) {
    reviewBox.scrollLeft = slideWidth;
  }

  
  if (reviewBox.scrollLeft <= 0) {
    reviewBox.scrollLeft = slideWidth * total;
  }
});
