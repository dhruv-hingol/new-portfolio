import Image from "next/image";
import developerImg from "../public/assests/software-dev.jpg";
export default function Home() {
  return (
    <div className="p-16 h-hull flex-col lg:flex-row flex gap-8 home-page-container">
      <div>
        <p className="text-2xl">
          Welcome to my professional portfolio! As a dedicated frontend
          engineer, I specialize in designing and developing seamless digital
          experiences. I am proficient in the latest web technologies. I am
          committed to creating visually captivating and highly user-friendly
          interfaces. My passion for continuous learning, collaborative
          teamwork, and innovative problem-solving drives me to excel in my
          field. Together, let's pioneer the future of web development.
        </p>
      </div>
      <Image
        src={developerImg}
        alt="developer image"
        className="h-80 aspect-video lg:w-auto md:max-w-[30rem]"
      />
    </div>
  );
}
