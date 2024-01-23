'use client'

import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
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
import { Label } from "./label";
import { HomeIcon } from '@radix-ui/react-icons'
import { Separator } from "./separator";




export function Navbar () {

  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

    return (
    <div className="sticky top-0">
      <div className="flex items-center justify-between p-6 bg-gray-800 h-[70px]">
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

        
          <ul className={` border-y divide-y  absolute justify-end w-full left-0 top-[70px] md:hidden  shadow-md bg-blue z-50 ${openMenu ? 'animate__slideInDown' : 'hidden'}`}>
            <li className="py-3 pb-3 md:mb-0">
              <Link href="/" className="text-xl flex items-center justify-end pr-6" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className=" py-3 md:mb-0">
              <Link href="/" className="text-xl flex items-center justify-end pr-6  " onClick={toggleMenu}>
                Page One
               </Link>
            </li>
            <li className=" py-3 md:mb-0">
              <Link href="/" className="text-xl flex items-center justify-end pr-6  " onClick={toggleMenu}>
                Page Two
              </Link>
            </li>
          </ul>


          {/* <div className="flex items-center gap-2">
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
          </div> */}

        </div>

        <Sheet>
          <SheetTrigger>
          <Image
              src={"/bg-menu.png"}
              width={30}
              height={30}
              className="flex md:hidden cursor-pointer"
              // onClick={toggleMenu}
              alt="menu icon"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>
            <Separator />
             <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-0">
              {/* <Image
                src={openMenu ? "/close.png" : "/bg-menu.png"}
                width={30}
                height={30}
                className="flex md:hidden cursor-pointer"
                onClick={toggleMenu}
                alt="menu icon"
            /> */}
                {/* <Label htmlFor="name" className="text-right">
                  Name
                </Label> */}
                <HomeIcon height={25} width={25} />
                <SheetClose asChild>
                  <Link href="/" className="text-xl col-span-3" >
                    Home
                  </Link>
                </SheetClose>
                {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
              </div>
              <div className="grid grid-cols-4 items-center gap-0">
                <HomeIcon height={25} width={25} />
                <SheetClose asChild>
                  <Link href="/" className="text-xl col-span-3" >
                    Page One
                  </Link>
                </SheetClose>
                {/* <Input id="username" value="@peduarte" className="col-span-3" /> */}
              </div>
              <div className="grid grid-cols-4 items-center gap-0">
                <HomeIcon height={25} width={25} />
                <SheetClose asChild>
                  <Link href="/" className="text-xl col-span-3" >
                    Page Two
                  </Link>
                </SheetClose>
                {/* <Input id="username" value="@peduarte" className="col-span-3" /> */}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* <Image
                src={openMenu ? "/close.png" : "/bg-menu.png"}
                width={30}
                height={30}
                className="flex md:hidden cursor-pointer"
                onClick={toggleMenu}
                alt="menu icon"
            /> */}
      </div>
    </div>
    )
}