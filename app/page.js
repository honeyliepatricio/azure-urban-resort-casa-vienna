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
    { label: "Sleeps", value: "2–3 guests" },
    { label: "Bed", value: "1 Queen" },
    { label: "Bath", value: "1 Full" },
    { label: "Size", value: "32 sqm" },
  ],
  tags: ["City view", "Full kitchen", "Smart TV", "Free wifi", "Pool access"],
  description:
    "A compact, well-lit unit built for couples and solo travelers who want a proper kitchen, a comfortable bed, and easy access to the pool — without paying for space they won't use.",
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
    { label: "Beds", value: "Queen + Twin" },
    { label: "Baths", value: "2 Full" },
    { label: "Size", value: "54 sqm" },
  ],
  tags: ["Private balcony", "Full kitchen", "2 Smart TVs", "Free wifi", "Pool access"],
  description:
    "Two bedrooms and a private balcony give small families and groups room to spread out, with enough shared space for meals in and lazy afternoons by the pool.",
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
