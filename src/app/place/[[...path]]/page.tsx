export default async function PlacePage() {
  await simLoading();
  return <div>PlacePage</div>;
}

async function simLoading() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), 5000);
  });
}
