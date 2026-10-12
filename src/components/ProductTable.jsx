import { useState } from 'react'
import AvailabilityBadge from './AvailabilityBadge'

const initialProducts = [
  { id: 1, name: 'iPhone 15 Pro', category: 'Phone', price: 999, stock: 12, status: 'In Stock' },
  { id: 2, name: 'Samsung Galaxy S24', category: 'Phone', price: 849, stock: 0, status: 'In Stock' },
  { id: 3, name: "MacBook Air M3", category: 'Laptop', price: 1099, stock: 7, status: 'In Stock' },
  { id: 4, name: 'Dell XPS 13', category: 'Laptop', price: 1249, stock: 0, status: 'Out of Stock' },
  { id: 5, name: 'iPad Pro 11', category: 'Tablet', price: 799, stock: 15, status: 'In Stock' },
  { id: 6, name: 'Sony WH-1000XM5', category: 'Headphones', price: 349, stock: 23, status: 'In Stock' },
  { id: 7, name: 'AirPods Pro 2', category: 'Headphones', price: 249, stock: 0, status: 'In Stock' },
  { id: 8, name: 'Apple Watch Series 9', category: 'Smartwatch', price: 399, stock: 9, status: 'In Stock' },
  { id: 9, name: 'Logitech MX Master 3', category: 'Accessories', price: 99, stock: 40, status: 'In Stock' },
]

export default function ProductTable() {
  const [products, setProducts] = useState(initialProducts)
  const [search, setSearch] = useState('')

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Product Inventory</h1>

        <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-md">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search product by name..."
            className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:max-w-sm"
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-sm uppercase tracking-wide text-gray-600">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                  <th className="px-4 py-3 font-semibold">Stock</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => {
                  const status = product.stock === 0 ? 'Out of Stock' : product.status

                  return (
                    <tr
                      key={product.id}
                      className="border-b border-gray-100 transition last:border-0 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium text-gray-800">{product.name}</td>
                      <td className="px-4 py-3 text-gray-600">{product.category}</td>
                      <td className="px-4 py-3 text-gray-800">${product.price}</td>
                      <td className="px-4 py-3 text-gray-600">{product.stock}</td>
                      <td className="px-4 py-3">
                        <AvailabilityBadge status={status} />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="rounded-lg bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {filteredProducts.length === 0 && (
              <p className="py-10 text-center text-gray-500">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
