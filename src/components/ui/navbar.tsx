import Link from "next/link";
import { Button } from "./button";


export function Navbar () {

    return (
    <div className="sticky top-0">
      <div className="flex items-center justify-between bg-gray-800 h-[70px]">
        <div className="flex items-center px-3 cursor-pointer">
          <Link href={"/"} >
            <h1 className="text-xl font-bold text-white cursor-pointer mr-8">
              Icon placeholder
            </h1>
          </Link>
          <div className="flex items-center gap-2">
          <Link href={"/"} className="text-white" >
            <Button variant={"ghost"}>
              Home
            </Button>
          </Link>
          <Link href={"/monthlyReport"} className="text-white">
            <Button variant={"ghost"}>
              Page 2
            </Button>
          </Link>
          <Link href={"/emailPreferences"} className="text-white">
            <Button variant={"ghost"}>
              Page 3
            </Button>
          </Link>
          <Link href={"/newProject"} className="text-white">
            <Button variant={"ghost"}>
              Page 4
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    )
}