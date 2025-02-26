export default function ReviewsList({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Reviews list of product {params.productId}</h1>
      <h2>Review 1</h2>
      <h2>Review 2</h2>
      <h2>Review 3</h2>
    </>
  );
}
