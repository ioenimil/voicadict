import { DropdownMenuRadioGroupDemo } from "@/components/font-dropdown";
import { ModeToggle } from "@/components/theme-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  h-full p-4">
      <main className="  h-full grid gap-4 grid-cols-12 grid-rows-6">
        <div className=" col-span-12 lg:col-start-3 lg:col-span-8 row-span-6  pt-10 pb-2 px-4 md:px-20">
          <div className="flex flex-col gap-10 h-full w-full ">
            <section className=" flex flex-col gap-4">
              <nav className=" flex justify-between  w-full">
                <Image
                  src="/assets/images/iconoir_book.svg"
                  alt="Logo"
                  width={32}
                  height={36}
                />
                <div className=" flex w-[207px] items-center justify-between">
                  <div>
                    <DropdownMenuRadioGroupDemo />
                  </div>
                  <Separator orientation="vertical" />
                  <div>
                    <ModeToggle />
                  </div>
                </div>
              </nav>
              <div className="border border-green-400 h-[64px]">search</div>
            </section>

            <ScrollArea className=" h-full  outline flex flex-col justify-between ">
              <div>
                <section className=" md:h-[116px] ">
                  <div className=" w-full flex justify-between items-center">
                   <div>
                    <h2 className=" text-4xl font-bold">Insosophysical</h2>
                    <p>Pronounciation</p>
                   </div>
                   <div>Sound Play</div>
                  </div>
                </section>
                <section className=" h-[377px]">
                  <div>
                    <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
                    <p className="mt-3 text-lg">
                      Get started by editing <code>pages/index.js</code>
                    </p>
                  </div>
                </section>
                <section>
                  <div>
                    <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
                    <p className="mt-3 text-lg">
                      Get started by editing <code>pages/index.js</code>
                    </p>
                  </div>
                </section>
              </div>
              <footer>
                <div>
                  <h1 className="text-3xl font-bold">Footer</h1>
                </div>
              </footer>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
}
