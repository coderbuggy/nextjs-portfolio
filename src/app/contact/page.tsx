import Image from "next/image";
import Link from "next/link";

function ContactPage() {
  return (
    <>
      <div className="container mx-auto p-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Contact wit me:</h3>
      </div>
      <div className="text-center text-2xl">
        <span className="bg-blue-950">bugrayuksel05 @ gmail.com</span>
      </div>
      <div>
        <div className="p-10 flex flex-wrap justify-center gap-4">
          <Link href={"https://github.com/coderbuggy"}>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
              width={60}
              height={60}
              alt="github"
              className="flex-shrink-0 rounded-full transition-all hover:drop-shadow-glow"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/bugra-yuksel-b04067154/"}>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              width={60}
              height={60}
              alt="github"
              className="flex-shrink-0 rounded-full transition-all hover:drop-shadow-glow"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
export default ContactPage;
