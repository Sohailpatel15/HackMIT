"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-hack-400 relative antialiased overflow-hidden">
      <div className="max-w-2xl mx-auto p-4 z-10">
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and
          customizable email solutions for your business. Whether you&apos;re sending order confirmations, password
          reset emails, or promotional campaigns, MailJet has got you covered.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <div className="absolute inset-0 h-full">
        <BackgroundBeams />
      </div>
    </div>
  );
}
