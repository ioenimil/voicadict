import Header from "@/components/header";
import Logo from "@/components/logo";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen border border-red-500 antialiased">
      <main className="grid h-full w-full grid-flow-col grid-cols-12 grid-rows-6 gap-4 bg-[url(/assets/images/svg/floating-cogs.svg)] p-4">
        <div className="rounded-xl bg-blue-500/10 p-5 backdrop-blur-sm">
          <Logo />
        </div>
        <div className="min-w-1/2 col-span-2 row-span-5 rounded-xl bg-blue-500/10 p-5 backdrop-blur-sm">
          <Sidebar />
        </div>
        <div className="col-span-11 rounded-xl bg-blue-500/10 p-5 backdrop-blur-sm">
          <Header  />
        </div>
        <div className="col-span-10 row-span-5 rounded-xl bg-blue-500/10 p-5 backdrop-blur-sm">
          {children}
        </div>
      </main>
    </div>
  );
}
