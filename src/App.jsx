import "./style.scss";
import { Navbar } from "./sections/Navbar.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Card } from "./components/Card.jsx";
import { Footer } from "./sections/Footer.jsx";

const card1 = {
  cardIcon: "bi bi-collection",
  cardTitle: "Explore Our Properties",
  cardStatement:
    "Discover curated properties designed for comfort, style, and functionality. Find the perfect home, apartment, or villa for you.",
};

const card2 = {
  cardIcon: "bi bi-collection",
  cardTitle: "Hero Header",
  cardStatement:
    "Immerse yourself in the beauty of featured properties. Experience luxury and elegance in extraordinary living spaces.",
};

const card3 = {
  cardIcon: "bi bi-collection",
  cardTitle: "Unique Features",
  cardStatement:
    "Explore unique property features through custom-designed boxes. Prioritizing stylish amenities for an enhanced living experience.",
};

const card4 = {
  cardIcon: "bi bi-collection",
  cardTitle: "Simple and Clean Design",
  cardStatement:
    "Enjoy a seamless browsing experience with our website's simple and clean design. Committed to staying updated with the latest technologies.",
};

const card5 = {
  cardIcon: "bi bi-heart",
  cardTitle: "A Trusted Name",
  cardStatement:
    "With years of experience, we've earned our reputation as a trusted name in real estate. Since [Year], dedicated to providing quality properties and excellent service.",
};

const card6 = {
  cardIcon: "bi bi-collection",
  cardTitle: "Contact Us",
  cardStatement:
    "For property information or to schedule a viewing, reach out. We look forward to assisting you in finding your dream home.",
};

const cards = [card1, card2, card3, card4, card5, card6];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
