export default async function AuthPath({
  params
}: PageProps<'/auth/[...path]'>) {
  const pathParams = await params;
  console.log(pathParams);
  return <div>AuthPath</div>;
}
