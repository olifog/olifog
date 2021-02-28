import Image from 'next/image'
import TechBlock from '../components/TechBlock';

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-700 p-6 mx-auto max-w-sm rounded-xl overflow-hidden shadow-lg">
      <div className="self-center">
        <Image 
          src="/olifog.png"
          alt="Picture of Oliver Fogelin"
          width={121}
          height={124}
          className="rounded-full"
        />
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-yellow-600 text-xl mb-2">
          Oliver Fogelin
        </div>
        <p className="text-white text-base">
          Freelance developer near London
        </p>
      </div>
      <div className="self-center">
        <TechBlock>Python</TechBlock>
        <TechBlock>React</TechBlock>
        <TechBlock>MongoDB</TechBlock>
      </div>
    </div>
  );
}
