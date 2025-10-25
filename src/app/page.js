import Link from "next/link";
import { creepster } from "./layout";

export default function Home() {
  return (
    <section>
      <p className="mt-5">
        October is the season of shadows, stories, and self-discovery, and here
        at 31 Days of Fear, we’re taking that spirit a little deeper. Every day
        this month, we’ll explore one of humanity’s greatest fears and look at
        what those fears really say about us.
      </p>
      <p className="mt-5">
        Each post shines a light on a single fear: where it comes from, why it
        grips us, and how we might learn to face it. You’ll also find a list of
        films that bring that fear to life - face your fear from a new
        perspective, or make a note of which titles to skip next movie night.
      </p>
      <p className="mt-5">
        Read along, share your thoughts, and join others as we face our fears
        one day at a time. So grab a blanket, dim the lights, and enter if you
        dare!
      </p>
      <Link
        href="/posts"
        className={`${creepster.className} mt-10 inline-block py-4 px-8 rounded-lg bg-fear-green text-fear-off-white text-3xl shadow-lg hover:bg-fear-orange shadow-fear-brown/50`}
      >
        enter
      </Link>
    </section>
  );
}
