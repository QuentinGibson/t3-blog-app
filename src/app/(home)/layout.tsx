import Aside from "../components/Aside";

export async function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {children}
      <Aside />
    </div>
  );
}
