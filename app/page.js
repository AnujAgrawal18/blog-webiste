import Image from "next/image";
import Blogs from "@/components/Blogs"
import Highlight from "@/components/Highlight";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className="flex flex-col justify-center align-middle w-[100vw] overflow-x-hidden text-center text-white ">
      <img src="https://cdna.artstation.com/p/assets/images/images/028/105/926/large/nico-kopf-landscape1-2048-nicokopf.jpg?1593502275" alt="" className="h-[30rem] brightness-50 relative w-full overflow-x-hidden" />
      <div className="absolute font-bold w-[98vw] overflow-x-hidden text-center">
      <div className="text-[50px] text-wrap">Publish your passions, your way</div>
      <div className="text-[30px] text-wrap my-5">Create a unique and beautiful blog easily.</div>
      <div><Link href='/createblog'><button className="text-[18px] text-wrap py-[1rem] rounded-[5rem] bg-orange-600 px-4 ">CREATE YOUR BLOG</button></Link></div></div>
    </div>
    <div className="flex flex-col justify-center my-6 lg:flex-row items-center w-full overflow-x-hidden">
    <Blogs/>
    <Highlight/>
    </div>
  </>   
  );
}
