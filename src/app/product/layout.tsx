export default function ProductLayout({ children }: LayoutProps<'/product'>) {
  return (
    <div>
      <header>Product Header</header>
      {children}
    </div>
  );
}
