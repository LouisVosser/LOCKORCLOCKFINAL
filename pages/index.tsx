
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Send, ImagePlus, Gift, Star } from "lucide-react";
import Image from "next/image";

export default function LockOrClockSite() {
  return (
    <div className="bg-yellow-100 text-black min-h-screen font-sans">
      {/* Header Section */}
      <div className="relative text-center py-10 px-4 border-b border-black">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          LOCK IN OR CLOCK IN
        </h1>
        <p className="mt-4 text-xl md:text-2xl italic">
          Make your choice: generational wealth or eternal 9-to-5.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="text-lg px-6 py-3 rounded-2xl">Buy Now</Button>
          <Button variant="outline" className="text-lg px-6 py-3 rounded-2xl">
            View Chart
          </Button>
        </div>
        <div className="mt-8">
          <Image
            src="/banner_ready.png"
            alt="LockorClock Banner"
            width={1200}
            height={400}
            className="rounded-2xl border shadow-xl mx-auto"
          />
        </div>
      </div>

      {/* About the Coin */}
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">About $LOCKORCLOCK</h2>
        <p className="text-lg leading-relaxed">
          $LOCKORCLOCK isn’t just a memecoin — it’s a warning. Lock in early or get
          cooked by the system. You're either stacking bags, or clocking shifts.
          This is your final stand against the 9-to-5 matrix. Choose wisely.
        </p>
      </div>

      {/* Chart Embed */}
      <div className="bg-yellow-200 py-16 px-6 border-t border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Live Chart</h2>
          <iframe
            src="https://dexscreener.com/solana/replace-with-your-token-address"
            width="100%"
            height="500"
            className="rounded-xl border border-black"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Token Info */}
      <div className="bg-yellow-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Token Info</h2>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div><strong>Name:</strong> LockorClock</div>
            <div><strong>Symbol:</strong> $LOCKORCLOCK</div>
            <div><strong>Chain:</strong> Solana</div>
            <div><strong>Supply:</strong> 69,420,000,000</div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">Roadmap</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li><strong>Q1:</strong> Get cooked by fiat reality</li>
          <li><strong>Q2:</strong> Lock in the community</li>
          <li><strong>Q3:</strong> Meme domination, sticker drops</li>
          <li><strong>Q4:</strong> Full timeline takeover, Clockchain bridge</li>
        </ul>
      </div>

      {/* Airdrop Claim Page */}
      <div className="bg-yellow-300 py-20 px-6 border-t border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2">
            <Gift className="w-6 h-6" /> Claim Your Airdrop
          </h2>
          <input
            type="text"
            placeholder="Enter your wallet address"
            className="px-4 py-3 w-full max-w-md border border-black rounded-xl text-black"
          />
          <div className="mt-4">
            <Button className="text-lg px-6 py-3 rounded-xl">Claim Now</Button>
          </div>
        </div>
      </div>

      {/* Meme Gallery & Sticker Pack */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-6 flex gap-2 items-center">
          <ImagePlus className="w-6 h-6" /> Meme Gallery & Sticker Pack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image src="/meme1.png" alt="Meme 1" width={400} height={400} className="rounded-xl border" />
          <Image src="/meme2.png" alt="Meme 2" width={400} height={400} className="rounded-xl border" />
          <Image src="/meme3.png" alt="Meme 3" width={400} height={400} className="rounded-xl border" />
        </div>
      </div>

      {/* Whitelist Form */}
      <div className="bg-yellow-100 py-16 px-6 border-t border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
            <Star className="w-6 h-6" /> Get Whitelisted
          </h2>
          <input
            type="text"
            placeholder="Enter your Twitter @ or Email"
            className="px-4 py-3 w-full max-w-md border border-black rounded-xl text-black"
          />
          <div className="mt-4">
            <Button className="text-lg px-6 py-3 rounded-xl">Submit</Button>
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="bg-black text-yellow-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <div className="flex justify-center gap-6">
            <Button className="flex items-center gap-2 px-6 py-3 text-lg">
              <Twitter className="w-5 h-5" /> X / Twitter
            </Button>
            <Button className="flex items-center gap-2 px-6 py-3 text-lg">
              <Send className="w-5 h-5" /> Telegram
            </Button>
          </div>
        </div>
      </div>

      <footer className="text-center py-10 text-sm text-black bg-yellow-100">
        © 2025 $LOCKORCLOCK. Stay locked.
      </footer>
    </div>
  );
}
