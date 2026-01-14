// components/ReviewsGrid.tsx
import Image, { StaticImageData } from "next/image";
import { Twitter } from "lucide-react";
import { Avatar } from "@/app/assest/images";

type Review = {
  name: string;
  location: string;
  avatar: StaticImageData | string;
  message: string;
  delay: string;
  profileUrl?: string;
};

const reviews: Review[] = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: Avatar,
    delay: "0.3",
    message:
      "AIleana completely changed how I shop online. The AI assistant understands exactly what I'm looking for and finds the best deals. Shopping with friends has never been easier!",
    profileUrl: "https://x.com/",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    avatar: Avatar,
    delay: "0.4",
    message:
      "As a small business owner, AIleana has helped me connect with customers in a more personal way while streamlining my sales process. The in-chat payments are revolutionary.",
    profileUrl: "https://x.com/",
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    avatar: Avatar,
    delay: "0.5",
    message:
      "The combination of messaging and commerce is brilliant. I can chat with friends about products and purchase them without leaving the app. The group shopping feature is a game-changer!",
    profileUrl: "https://x.com/",
  },
];

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 12 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.45202 0.5H11.2924L7.27177 5.58308L12.0017 12.5H8.29819L5.3975 8.30492L2.07844 12.5H0.236996L4.53741 7.06308L0 0.5H3.7975L6.41947 4.33446L9.45202 0.5ZM8.80612 11.2815H9.82587L3.24339 1.65446H2.1491L8.80612 11.2815Z"
        className="fill-(--text-primary)"
      />
    </svg>
  );
}

function ReviewCard({ name, location, avatar, message, delay, profileUrl }: Review) {
  return (
    <article
      data-ns-animate
      data-delay={delay}
      className="bg-(--review-card-bg) rounded-4xl p-8"
    >
      <div className="flex items-center justify-between pb-6">
        <figure className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={`${name}'s avatar`}
            width={44}
            height={44}
            className="size-11 rounded-full object-center object-cover bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
          />

          <figcaption>
            <h3 className="text-lg font-medium leading-normal">{name}</h3>
            <p className="font-normal ">
              {location}
            </p>
          </figcaption>
        </figure>

        <a
          href={profileUrl ?? "https://x.com/"}
          target="_blank"
          rel="noopener"
          aria-label={`Follow ${name} on X`}
          className=" hover:bg-secondary/10 dark:hover:bg-accent/10 transition-colors duration-400 cursor-pointer size-9 rounded-full flex items-center justify-center"
        >
          <XIcon/>
        </a>
      </div>

      <p className="pt-6 border-t text-sm">
        {message}
      </p>
    </article>
  );
}

export default function Reviews() {
  return (

      <section className="mx-auto w-full px-4 py-16 space-y-10">
         <div className="max-w-7xl mx-auto flex flex-col gap-5.5 justify-centery items-center">
          {/* Badge */}
          <div className="inline-flex max-w-md rounded-full border border-[#C7A55C] bg-[#F5E4AF] px-4 py-2 text-xs font-medium text-black/70">
            Reviews
          </div>

          <h2 className="text-(--text-primay) max-w-4xl text-4xl text-center font-medium leading-[1.05] md:text-[54px]">
            Hear from our early users about their experiences with us
          </h2>

        </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </div>
    </section>
    
  );
}
