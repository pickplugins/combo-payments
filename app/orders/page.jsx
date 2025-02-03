import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
			Orders
			<div>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
					return (
						<div key={index}>
							<Link href={`/orders/${item}`}>Order {item}</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default page;
