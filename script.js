document.addEventListener("DOMContentLoaded", function () {
  const industrySelect = document.getElementById("industrySelect");
  const industryMessage = document.getElementById("industryMessage");
  const quoteOutput = document.getElementById("quote");
  const contactForm = document.getElementById("contactForm");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const themeToggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  const industryImages = document.getElementById("industryImages");
  industrySelect.addEventListener("change", function () {
    const val = industrySelect.value;
    let msg = "";
    if (val === "restaurant") {
      msg = "Perfect! We’ve helped restaurants get more reservations online. Food sites need to be appetizing and informative. We’ll help you create a site that showcases your recipes or restaurant offerings effectively. Let's get you started.";
      // Show 4 images from images/restaurant folder
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/restaurant/${i}.png`;
        img.alt = `restaurant example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } else if (val === "ecommerce") {
      msg = "Great choice! Our e-commerce sites convert visitors into buyers efficiently.";
    // Show 4 images from images/ecommerce folder
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/ecommerce/${i}.png`;
        img.alt = `ecommerce example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "portfolio") {
      msg = "Let’s showcase your talent with a stunning, high-impact portfolio site.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/portfolio/${i}.png`;
        img.alt = `portfolio example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "blog") {
      msg = "Blogs are a great way to share your expertise. We’ll help you build a platform that attracts readers.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/blog/${i}.png`;
        img.alt = `blog example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "nonprofit") {
      msg = "Nonprofits need to connect with their community. We’ll help you create a site that inspires action.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/nonprofit/${i}.png`;
        img.alt = `nonprofit example ${i}`; 
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "tech") {
      msg = "Tech sites need to be innovative and user-friendly. We’ll help you create a site that highlights your products and services effectively.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/technology/${i}.png`;
        img.alt = `technology example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "fashion") {
      msg = "Fashion sites need to be stylish and engaging. We’ll help you create a site that showcases your collections beautifully.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/fashion/${i}.png`;
        img.alt = `fashion example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    }  
    else if (val === "education") {
      msg = "Education sites need to be informative and engaging. We’ll help you create a platform that educates and inspires.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/education/${i}.png`;
        img.alt = `education example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "healthcare") {
      msg = "Healthcare sites need to be user-friendly and secure. We’ll help you create a site that builds trust and provides essential information.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/healthcare/${i}.png`;
        img.alt = `healthcare example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "real-estate") {
      msg = "Real estate sites need to showcase properties effectively. We’ll help you create a site that attracts buyers and sellers.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/real-estate/${i}.png`;
        img.alt = `real estate example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "travel") {
      msg = "Travel sites need to inspire wanderlust. We’ll help you create a site that showcases destinations and services beautifully.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/travel/${i}.png`;
        img.alt = `travel example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "finance") {
      msg = "Finance sites need to be secure and informative. We’ll help you create a site that builds trust and provides essential financial information.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/finance/${i}.png`;
        img.alt = `finance example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "entertainment") {
      msg = "Entertainment sites need to engage and captivate. We’ll help you create a site that showcases your content effectively.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/entertainment/${i}.png`;
        img.alt = `entertainment example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "fitness") {
      msg = "Sports sites need to be dynamic and engaging. We’ll help you create a site that keeps fans updated and excited.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/fitness/${i}.png`;
        img.alt = `sports example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "government") {
      msg = "Government sites need to be accessible and informative. We’ll help you create a site that serves the public effectively.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/government/${i}.png`;
        img.alt = `government example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "automotive") {
      msg = "Automotive sites need to showcase vehicles and services effectively. We’ll help you create a site that attracts buyers and showcases your offerings.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/automotive/${i}.png`;
        img.alt = `automotive example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else if (val === "gaming") {
      msg = "Gaming sites need to be immersive and engaging. Arts sites need to be visually stunning and engaging. We’ll help you create a site that showcases your work beautifully. We’ll help you create a site that showcases your games and community effectively. Music sites need to be engaging and showcase your talent. We’ll help you create a site that connects with your audience.";
      industryImages.innerHTML = "";
      for (let i = 1; i <= 4; i++) {
        const img = document.createElement("img");
        img.src = `images/gaming/${i}.png`;
        img.alt = `gaming example ${i}`;
        img.style.width = "120px";
        img.style.height = "90px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        industryImages.appendChild(img);
      }
    } 
    else {
      msg = "Select an industry to see a tailored message and examples.";
      industryImages.innerHTML = "";
      industryImages.style.display = "none";
    }
    industryMessage.textContent = msg;
    industryMessage.style.display = msg ? "block" : "none";
  });

  document.querySelectorAll("input[name='type'], input[name='features']").forEach(el => {
    el.addEventListener("change", calculateQuote);
  });

  function calculateQuote() {
    const type = document.querySelector("input[name='type']:checked")?.value || "portfolio";
    const features = document.querySelectorAll("input[name='features']:checked").length;

    let basePrice = {
      portfolio: 1500,
      ecommerce: 3000,
      blog: 1000
    }[type];

    let featureCost = features * 200;
    quoteOutput.textContent = basePrice + featureCost;
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const honeypot = document.getElementById("honeypot").value;
    if (honeypot) return; // Bot detected

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const business = document.getElementById("business").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !business || !message) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setTimeout(() => {
      document.getElementById("formSuccess").style.display = "block";
      contactForm.reset();
    }, 1500);
  });

  window.addEventListener("scroll", function () {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  });

  document.addEventListener("mouseout", function (e) {
    if (e.clientY < 5 && !localStorage.getItem("exitPromptShown")) {
      alert("Leaving already? Let’s talk—just 30 seconds and we’ll make your dream site real.");
      localStorage.setItem("exitPromptShown", true);
    }
  });

  // HERO GALLERY AUTOPLAY
  const heroGalleryTrack = document.querySelector('.hero-gallery-track');
  if (heroGalleryTrack) {
    // Only inject if not already present
    if (heroGalleryTrack.children.length === 0) {
      for (let i = 1; i <= 10; i++) {
        const img = document.createElement('img');
        img.src = `images/display/${i}.png`;
        img.alt = `Showcase ${i}`;
        heroGalleryTrack.appendChild(img);
      }
    }
  }
});
