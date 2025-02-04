import Link from 'next/link';
import React from 'react'

const Sidebar = () => {
  return (
		<aside className="flex flex-col gap-4 min-w-[200px] bg-gray-200 text-gray-800 p-4">
			{["products", "orders", "subscriptions", "licenses"].map(
				(item, index) => {
					return (
						<Link
							key={index}
							href={`/${item}`}
							className="hover:bg-gray-300 cursor-pointer px-4 py-2 bg-gray-400">
							{item}
						</Link>
					);
				}
			)}
		</aside>
	);
}

export default Sidebar