export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased  h-screen overflow-hidden border border-red-500 w-screen`}
      >
        {/* <main className=" grid bg-[url(/assets/images/svg/floating-cogs.svg)] grid-rows-6 p-4 grid-flow-col w-full h-full  grid-cols-12 gap-4">
          <div className=" bg-blue-500/10 backdrop-blur-sm rounded-xl p-5 ">
            1
          </div>
          <div className="bg-blue-500/10 backdrop-blur-sm col-span-2 row-span-5 min-w-1/2  rounded-xl p-5">
            2
          </div>
          <div className="bg-blue-500/10 backdrop-blur-sm col-span-11  rounded-xl p-5">
            3
          </div>
          <div className="bg-blue-500/10 backdrop-blur-sm col-span-10 row-span-5  rounded-xl p-5">
            4
          </div>
        </main> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
