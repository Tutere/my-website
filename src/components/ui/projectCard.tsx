import {Github,Link as LinkIcon} from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
    img: string;
    title: string;
    description: string;
}

export default function ProjectCard({img, title, description}: ProjectCardProps) {
    return (
      <div>
        <div 
            className="h-52 md:h-72 rounded-t-xl relative group" 
            style={{background: `url(${img})`, backgroundSize: "cover"}}
        >
            <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link 
                    href={"/"}
                    className='h-14 w-14 mr-2 border-2 relative rounded-full border-gray-500 hover:border-white group/link'
                >
                    <LinkIcon className='h-10 w-10 text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:hover:text-white'></LinkIcon>
                </Link>
                <Link 
                    href={"/"}
                    className='h-14 w-14 border-2 relative rounded-full border-gray-500 hover:border-white group/link'
                >
                    <Github className='h-10 w-10 text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:hover:text-white'></Github>
                </Link>
            </div>
        </div>
        <div className="text-white rounded-b-xl py-1 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-gray-400">{description}</p>
        </div>
      </div>
    )
  }