"use client"
import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
	}) {
	function getRandomInt(count: number): number {
		return Math.floor(Math.random() * count);
	}

	const random = getRandomInt(2);

	if (random === 1) {
		throw new Error("Error loading");
	}

	if (parseInt(params.reviewId) > 1000) {
		notFound();
	}


  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
