'use client'
import { track } from "@vercel/analytics";
import Link from "next/link";

export default function Enrollment() {
    return(
        <Link href="https://pay.hotmart.com/E88055193B?off=h8d9oi5k"
            target="_blank"
            className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            onClick={()=>{
              track('enrollment', {location: 'investment'})
            }}      
        >
            Matricular
        </Link>
    )
}