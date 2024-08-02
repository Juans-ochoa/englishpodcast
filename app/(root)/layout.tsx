function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>Esto es el nav</nav>
      {children}
    </section>
  );
}

export default RootLayout;
