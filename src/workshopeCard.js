import phone from "./assets/pictures/phone-cover.jpg";
import camera from "./assets/pictures/camera.jpg";
import car from "./assets/pictures/car.jpg";

const card = [
  {
    img: camera,
    heading: 'DjangoGirls Arusha Workshop "Build Your First Web App"',
    message:
      "This DjangoGirls workshop offers practical web development training for women, held just before DjangoCon Africa 2026",
    date: "August 09 2025",
    location: "Institute of Accounting Arusha (IAA)",
  },
  {
    img: phone,
    heading: 'DjangoGirls Tanzania Workshop "Hands-On Python & Django"',
    message:
      "A community workshop hosted locally in Tanzania where participants work through beginner‑friendly Python and Django exercises",
    date: "June 28 2026",
    location: "Binary Labs, Kunduchi (near Dar es Salaam)",
  },
  {
    img: car,
    heading: 'DjangoGirls Tanzania Workshop "Intro to Python & Django"',
    message:
      "A beginner-friendly workshop where women build their first Python and Django web apps with mentor support",
    date: "September 28 2026",
    location: "New Library, University of Dar es Salaam (UDSM)",
  },
];

export function getCard() {
  return card;
}
