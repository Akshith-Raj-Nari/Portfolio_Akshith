import { useEffect } from "react";
import "./LandingPage.css";

function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-container md sm">
      <img
        src="./Profile.jpg"
        alt="Akshith Raj Nari"
        className="profile-image"
      />
      <h1 className="display-2 hidden">Hi! This is Akshith Raj Nari</h1>
      <h2 className="display-6 hidden">
        Intern at Accenture | Web Developer | Software Developer
      </h2>
    </div>
  );
}

export default LandingPage;
