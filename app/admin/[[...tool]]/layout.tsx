export const metadata = {
  title: "Portfolio CMS",
  description: "Content management for the portfolio site",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="sanity" style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
