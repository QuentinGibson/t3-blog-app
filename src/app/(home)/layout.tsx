import Aside from "../components/Aside";

export async function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <Aside />
    </div>
  );
}
