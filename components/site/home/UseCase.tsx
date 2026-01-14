// components/FeatureGrid.tsx
import Image, { StaticImageData } from "next/image";
import { Digital } from "@/app/assest/images";

type FeatureItem = {
  title: string;
  description: string;
  image: StaticImageData | string;
};

const features: FeatureItem[] = [
  {
    title: "Smarter, Safer Digital Life",
    description:
      "An ad-free social and commerce experience powered by AI that understands your interests, protects your privacy, and helps you discover people, content, and products that truly matter to you.",
    image: Digital
  },
  {
    title: "Own Your Content. Own Your Income.",
    description:
      "Build direct relationships with your audience, control your intellectual property, and earn through licensing, royalties, and exclusive sales — without being buried by paid algorithms.",
    image: Digital
  },
  {
    title: "Sell Without Paying for Attention",
    description:
      "Reach customers through intelligent product discovery, integrated payments, and AI-driven support — not through expensive ads or manipulative ranking systems.",
    image: Digital
  },
  {
    title: "Find Work. Get Paid. Build Trust.",
    description:
      "Access verified opportunities, secure payments, and professional communication tools that help you grow your reputation and income in a trusted, AI-assisted marketplace.",
    image: Digital
  },
];

function FeatureCard({ title, description, image }: FeatureItem) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-[#f5f5f5] shadow-sm space-y-4 p-5">
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold leading-tight text-neutral-900">
          {title}
        </h3>

        <p className="text-[14px] leading-relaxed text-neutral-600 md:max-w-lg w-full">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function UseCase() {
  return (
    <section className="mx-auto w-full bg-background px-4 py-16 space-y-10">
         <div className="max-w-7xl mx-auto flex flex-col gap-5.5 justify-centery items-center">
          {/* Badge */}
          <div className="inline-flex max-w-md rounded-full border border-[#C7A55C] bg-[#F5E4AF] px-4 py-2 text-xs font-medium text-black/70">
            Use Case
          </div>

          <h2 className="text-(--text-primay) text-4xl text-center font-medium leading-[1.05] md:text-[54px]">
            Built for Every Role in the Digital Economy
          </h2>

          <p className="max-w-xl  text-center  text-sm leading-relaxed text-(--text-primary) md:text-base">
            Whether you are here to connect, create, sell, or work, AIleana adapts to your goals and gives you the tools, intelligence, and trust layer you need to succeed in one unified ecosystem.
          </p>
        </div>
      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {features.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
