import Aside from "../components/Aside";
import Footer from "../components/Footer";

export async function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {children}
        <Aside />
      </div>
    </>
  );
}
