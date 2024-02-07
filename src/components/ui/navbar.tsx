'use client'

import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HomeIcon } from '@radix-ui/react-icons'
import { Separator } from "./separator";




export function Navbar () {
  
    return (
    <div className="sticky top-0 z-10">
      <div className="flex items-center justify-between pt-6 pb-3 px-10 bg-gray-800 h-[70px] border-b border-gray-500 ">
        <div className="flex items-center">
          <Link href={"/"} >
            <h1 className="text-xl font-bold text-white cursor-pointer">
              Tutere Durie
            </h1>
          </Link>

          <ul className={`hidden md:static md:flex items-center gap-2`}> 
            <li className="mb-6 md:mb-0">
              <Link href="/" className="text-white md:ml-10">
                <Button variant={"ghost"}>
                 Home
                </Button>
              </Link>
            </li>
            <li className="mb-6 md:mb-0">
              <Link href="/faqs" className="text-white">
                <Button variant={"ghost"}>
                  Page One
                </Button>
              </Link>
            </li>
            <li className="mb-6 md:mb-0">
              <Link href="/faqs" className="text-white">
                <Button variant={"ghost"}>
                  Page Two
                </Button>
              </Link>
            </li>

          </ul>
        </div>

        <Sheet>
          <SheetTrigger>
          <Image
              src={"/bg-menu.png"}
              width={30}
              height={30}
              className="flex md:hidden cursor-pointer"
              alt="menu icon"
            />
          </SheetTrigger>
          <SheetContent className="bg-gray-800 text-white border-gray-500">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>
            <Separator className="bg-gray-500"/>
             <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-0">
                <HomeIcon height={25} width={25} />
                <SheetClose asChild>
                  <Link href="/" className="text-xl col-span-3" >
                    Home
                  </Link>
                </SheetClose>
              </div>
              <div className="grid grid-cols-4 items-center gap-0">
                <HomeIcon height={25} width={25} />
                <SheetClose asChild>
                  <Link href="/" className="text-xl col-span-3" >
                    Page One
                  </Link>
                </SheetClose>
              </div>
              <div className="grid grid-cols-4 items-center gap-0">
                <HomeIcon height={25} width={25} />
                <SheetClose asChild>
                  <Link href="/" className="text-xl col-span-3" >
                    Page Two
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    )
}