import { creepster } from "@/app/layout";
export default function Footer() {
  return (
    <>
      <footer className="w-full flex justify-center items-center h-18 bg-black text-fear-orange fixed bottom-0 left-0">
        <p className={`${creepster.className} text-center text-xl`}>
          Made with 😱
        </p>
      </footer>
    </>
  );
}
