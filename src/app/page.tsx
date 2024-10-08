import IconSlider from "@/components/IconSlider";
import Image from "next/image";
import logo from "@/../public/logo.png";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center align-center mt-10 ">
        <Image
          src={logo}
          width={300}
          height={300}
          alt="logo"
          className="flex-shrink-0 rounded-full shadow-md shadow-slate-100"
          priority={true}
        />
      </div>
      <div className="p-10">
        <h4>
          With a strong foundation in Web Development, I am an experienced
          professional with a proven track record in{" "}
          <span className="bg-yellow-400 text-black">JavaScript</span>. My
          career journey has equipped me with extensive knowledge in{" "}
          <span className="bg-blue-400 text-black">SAP</span> and Web
          Development, enabling me to drive impactful results and innovate
          within dynamic environments. Passionate about continuous learning and
          growth, I have consistently demonstrated the ability to adapt and
          excel in projects. I am especially adept at web technologies, which
          allows me to effectively contribute to creating user-centric solutions
          and optimizing performance. My collaborative approach and commitment
          to excellence make me a valuable asset to any team.
        </h4>
      </div>
      <div>
        <IconSlider></IconSlider>
      </div>
    </div>
  );
}
