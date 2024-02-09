'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Input } from "./input"
import { Button } from "./button"
import GithubImg from "/public/github-icon.svg"
import LinkedinImg from "/public/linkedin-icon.svg"
import tickImg from "/public/check-square.svg"
import PhoneImg from "/public/phone-icon.svg"
import EmailImg from "/public/email.svg"
import Link from "next/link"
import Image from "next/image"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import emailjs from '@emailjs/browser';
import { useState } from "react"

 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  subject: z.string().min(2, {
    message: "Subject must be filled out and at least 2 characters",
  }),
  message:z.string().min(2, {
    message: "Message must be filled out and at least 2 characters",
  }),

})

export default function ContactSection() {

    // 1. Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
    },
  })

  const [emailSent,setEmailSent] = useState(false);
  const [emailSending,setEmailSending] = useState(false);

  // 2. Define a submit handler.
  function contactformSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
    console.log(process.env.NEXT_PUBLIC_TEMPLATE_ID);
    console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY);
    setEmailSending(true);

    if (process.env.NEXT_PUBLIC_SERVICE_ID 
      && process.env.NEXT_PUBLIC_TEMPLATE_ID 
      && process.env.NEXT_PUBLIC_PUBLIC_KEY) {
        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID,process.env.NEXT_PUBLIC_TEMPLATE_ID, 
          {
            from_name: values.name,
            subject: values.subject,
            from_email: values.email,
            message: values.message,
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                alert("Email was sent!");
                setEmailSent(true);
            }, (error) => {
                console.log(error.text);
                alert("Error:" + error.text);
            });  
    }


  }


    return (
      <section className="py-16">
        <div className="flex flex-col items-center">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Contact Me
            </h2>
        </div>
        <div className="grid md:grid-cols-2 my-5 md:my-5 gap-6">
          <div className="text-white mb-4">
            <h5 className="my-4 text-xl font-bold">Let&apos;s Connect</h5>
            <p className="mb-4 max-w-lg">
              {" "}
              Feel free to send a message or reach out through the various methods below. Whether you have a question or just want to say hi, my inbox 
              is always open and I&apos;ll be happy to get back to you {" :)"}
            </p>
            <div className="flex flex-row gap-2">
              <Popover>
                <PopoverTrigger>
                  <Image 
                        src={EmailImg}
                        alt="Email Icon"
                        />
                  </PopoverTrigger>
                <PopoverContent
                  className="w-fit h-fit ml-10"
                  side="top"
                >
                  tuteredurie@hotmail.com
                </PopoverContent>
              </Popover>
              <Link href={"https://www.linkedin.com/in/tutere-durie/"} target="blank">
                <Image 
                src={LinkedinImg}
                alt="Linkedin Icon"
                />
              </Link>
              <Popover>
                <PopoverTrigger>
                  <Image 
                        src={PhoneImg}
                        alt="Phone Icon"
                        />
                  </PopoverTrigger>
                <PopoverContent
                  className="w-fit h-fit"
                  side="top"
                >
                  +64273732085
                </PopoverContent>
              </Popover>
            </div>
          </div>
          {emailSent ? (
            <div className="flex flex-col md:items-center gap-5">
              <Image 
                className=""
                src={tickImg}
                alt="Tick Icon"
              />
              <p className="text-white">
                Thanks for reaching out, your email was sent! I&apos;ll be in touch soon {":)"}
              </p>
            </div>
          ) :(
            <div>
              <Form {...form}>
                  <form 
                  onSubmit={form.handleSubmit(contactformSubmit)} 
                  className=" w-full flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                      <FormField 
                        control={form.control} 
                        name="name" 
                        render={({field}) =>{
                          return <FormItem className="flex-grow">
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        }} 
                      />
                      <FormField 
                        control={form.control} 
                        name="email" 
                        render={({field}) =>{
                          return <FormItem className="flex-grow">
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        }} 
                      />
                    </div>
                  <FormField 
                    control={form.control} 
                    name="subject" 
                    render={({field}) =>{
                      return <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this email about?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    }} 
                  />
                  <FormField 
                    control={form.control} 
                    name="message" 
                    render={({field}) =>{
                      return <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter the messgae you would like to send..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    }} 
                  />
                  <Button type="submit" className="w-full bg-blue-500 mt-4" disabled={emailSending}>
                  {emailSending ? "Sending Email..." : " Send Email"}
                  </Button>
                  </form>
              </Form>
            </div>
          )}
          
        </div>
      </section>
    )
  }