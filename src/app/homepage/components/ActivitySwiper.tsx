"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AppImage from "@/components/ui/AppImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Activity {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

const activities: Activity[] = [
{
  id: "activity_1",
  image: "https://images.unsplash.com/photo-1669220666939-03f4deff14fa",
  alt: "Children learning road safety with interactive floor mat showing crosswalk and traffic signs",
  caption: "Ateliers Pratiques - Passages Piétons"
},
{
  id: "activity_2",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_178f2dd3e-1770034869248.png",
  alt: "Preschool children sitting in circle with teacher showing traffic sign flashcards",
  caption: "Préscolaire - Reconnaissance Panneaux"
},
{
  id: "activity_3",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_114e01a72-1770034868376.png",
  alt: "Students at computer workstations using interactive road safety simulation software",
  caption: "Simulation Interactive - CIER"
},
{
  id: "activity_4",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_150eb4fe1-1770034867826.png",
  alt: "University students participating in road safety awareness workshop with presenter",
  caption: "Séminaires Universitaires"
},
{
  id: "activity_5",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_127c8678a-1770034875379.png",
  alt: "Children drawing and coloring road safety posters during summer camp activity",
  caption: "Colonies de Vacances - Ateliers Créatifs"
}];


export default function ActivitySwiper() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="w-full aspect-[4/3] rounded-[40px] overflow-hidden bg-muted">
        <AppImage
          src={activities[0].image}
          alt={activities[0].alt}
          className="w-full h-full object-cover grayscale brightness-90" />

      </div>);

  }

  return (
    <div className="relative w-full group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        navigation={true}
        pagination={{
          clickable: true
        }}
        className="rounded-[40px] overflow-hidden shadow-2xl">

        {activities.map((activity) =>
        <SwiperSlide key={activity.id}>
            <div className="relative w-full aspect-[4/3]">
              <AppImage
              src={activity.image}
              alt={activity.alt}
              className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 hover:grayscale-0 hover:brightness-100" />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-bold uppercase tracking-wider">
                  {activity.caption}
                </p>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>);

}