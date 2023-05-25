"use client"

import { motion } from "framer-motion"
import { useState } from "react";
import { RiMailSendFill } from "react-icons/ri";

export default function SendMessage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Sending")
        let data = {
            name,
            email,
            subject,
            message
        }
        fetch("api/sendContactForm", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log("Response received")
            if (res.status === 200) {
                console.log("Response succeeded!")
                setSubmitted(true)
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
            }
        })
    }

    // animate text
    const quote = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
            }
        }
    }

    return (
        <div id="SendMessage" className="pt-1 px-1 lg:pt-3 lg:px-3">
            <div className="bg-[#ddd9d1] rounded-[75px] lg:p-14">
                <div className="text-[#1B1B1F] lg:text-8xl text-4xl font-black space-y-5 p-10">
                    <p>Do you have a question?</p>
                    <motion.p variants={quote} initial="initial" animate="animate">
                        Contact Me!
                    </motion.p>
                </div>

                <form className="p-3 lg:pb-10">
                    <div className="text-[#ddd9d1] text-2xl flex flex-col p-1 lg:py-5 space-y-1 lg:space-x-5 lg:space-y-0 lg:grid lg:grid-cols-3">
                        <input name="name" type="text" placeholder="Name" required onChange={(e) => { setName(e.target.value) }}
                            className="bg-[#1B1B1F] rounded-[75px] p-10 lg:p-14 outline-none" />

                        <input name="email" type="email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }}
                            className="bg-[#1B1B1F] rounded-[75px] p-10 lg:p-14 outline-none" />

                        <input name="subject" type="text" placeholder="Subject" required onChange={(e) => { setSubject(e.target.value) }}
                            className="bg-[#1B1B1F] rounded-[75px] p-10 lg:p-14 outline-none" />
                    </div>

                    <div className="lg:grid flex flex-col px-1 lg:grid-cols-4 lg:gap-5 lg:h-80">
                        <textarea name="message" type="text" placeholder="Message" required onChange={(e) => { setMessage(e.target.value) }}
                            className="text-[#ddd9d1] bg-[#1B1B1F] text-2xl rounded-[75px] p-10 h-96 mb-1 lg:p-14 col-span-3 resize-none outline-none" />

                        <motion.button type="submit" onChange={(e) => { setSubmitted(e.target.value) }} onClick={(e) => { handleSubmit(e) }}
                            className="col-span-1 w-full bg-[#1B1B1F] text-[#feca52] text-3xl font-black rounded-[75px] flex lg:flex-col items-center justify-center p-10"
                            whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            Send
                            <RiMailSendFill size={40} />
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    )
}