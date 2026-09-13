import Hero from "../components/Hero";
import Amenities from "../components/Amenities";
import RoomsTeaser from "../components/RoomsTeaser";
import Reviews from "../components/Reviews";
import GalleryPreview from "../components/GalleryPreview";
import RoomDetail from "../components/RoomDetail";
import HowToBook from "../components/HowToBook";

const ONE_BEDROOM = {
  id: "onebedroom",
  title: "1 Bedroom",
  photos: [
    { label: "1BR photo — main", variant: "" },
    { label: "1BR photo — bed", variant: "v2" },
    { label: "1BR photo — bath", variant: "v3" },
  ],
  specs: [
    { label: "Sleeps", value: "4 guests" },
    { label: "Units", value: "1 available" },
    { label: "View", value: "City view" },
    { label: "Bath", value: "1 Full" },
  ],
  tags: ["City view", "Full kitchen", "Smart TV", "Free wifi", "Pool access"],
  description:
    "A bright city-view unit at Azure Urban Resort Residences, comfortably fitting up to 4 guests with a full kitchen and easy access to the pool.",
};

const TWO_BEDROOM = {
  id: "twobedroom",
  alt: true,
  title: "2 Bedroom",
  photos: [
    { label: "2BR photo — main", variant: "v5" },
    { label: "2BR photo — bed", variant: "v4" },
    { label: "2BR photo — balcony", variant: "v2" },
  ],
  specs: [
    { label: "Sleeps", value: "4–6 guests" },
    { label: "Units", value: "2 available" },
    { label: "View", value: "Beachview" },
    { label: "Baths", value: "2 Full" },
  ],
  tags: ["Beachview", "Full kitchen", "2 Smart TVs", "Free wifi", "Pool access"],
  description:
    "Two beachview units, each with two bedrooms, give families and small groups room to spread out — with ocean views and enough shared space for meals in and lazy afternoons by the pool.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Amenities />
      <RoomsTeaser />
      <Reviews />
      <GalleryPreview />
      <RoomDetail {...ONE_BEDROOM} />
      <RoomDetail {...TWO_BEDROOM} />
      <HowToBook />
    </>
  );
}
