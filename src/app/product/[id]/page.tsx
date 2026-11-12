// REACT ONLY: ALL COMPONENT are CLIENT COMPONENT
// NEXT.JS: 2 type of COMPONENT
// - SERVER COMPONENT (can be async)
// - CLIENT COMPONENT (can't be async)

export default async function ProductIdPage({
  params,
  searchParams
}: PageProps<'/product/[id]'>) {
  const pathParams = await params;
  const sp = await searchParams;
  return (
    <div>
      ProductIdPage: {pathParams.id}
      <p>{sp.name}</p>
      <p>{sp.price}</p>
    </div>
  );
}
