export const sampleQueries = [
  {
    id: 1,
    name: "Select all customers",
    query: "SELECT * FROM customers;",
    result: [
      { customer_id: 1, first_name: "John", last_name: "Doe", email: "john@example.com", phone: "555-0101", city: "New York", join_date: "2023-01-15" },
      { customer_id: 2, first_name: "Jane", last_name: "Smith", email: "jane@example.com", phone: "555-0102", city: "Chicago", join_date: "2023-02-20" },
      { customer_id: 3, first_name: "Robert", last_name: "Johnson", email: "bob@example.com", phone: "555-0103", city: "Los Angeles", join_date: "2023-03-10" },
      { customer_id: 4, first_name: "Emily", last_name: "Williams", email: "emily@example.com", phone: "555-0104", city: "Houston", join_date: "2023-04-05" },
      { customer_id: 5, first_name: "Michael", last_name: "Brown", email: "michael@example.com", phone: "555-0105", city: "Phoenix", join_date: "2023-05-12" }
    ]
  },
  {
    id: 2,
    name: "Recent orders",
    query: "SELECT order_id, customer_id, order_date, total_amount FROM orders WHERE order_date >= '2023-05-01' ORDER BY order_date DESC;",
    result: [
      { order_id: 105, customer_id: 2, order_date: "2023-05-28", total_amount: 149.99 },
      { order_id: 104, customer_id: 1, order_date: "2023-05-22", total_amount: 89.50 },
      { order_id: 103, customer_id: 3, order_date: "2023-05-18", total_amount: 235.75 },
      { order_id: 102, customer_id: 5, order_date: "2023-05-15", total_amount: 54.99 },
      { order_id: 101, customer_id: 4, order_date: "2023-05-03", total_amount: 199.99 }
    ]
  },
  {
    id: 3,
    name: "Products by category",
    query: "SELECT category, COUNT(*) as product_count, AVG(price) as avg_price FROM products GROUP BY category;",
    result: [
      { category: "Electronics", product_count: 12, avg_price: 599.99 },
      { category: "Clothing", product_count: 25, avg_price: 49.99 },
      { category: "Home & Kitchen", product_count: 18, avg_price: 89.50 },
      { category: "Books", product_count: 32, avg_price: 14.99 }
    ]
  },
  {
    id: 4,
    name: "Order details with joins",
    query: `SELECT o.order_id, c.first_name, c.last_name, o.order_date, 
            JOIN products p ON od.product_id = p.product_id
            WHERE o.order_date BETWEEN '2023-05-01' AND '2023-05-31';`,
    result: [
      { order_id: 101, first_name: "Emily", last_name: "Williams", order_date: "2023-05-03", product_name: "Wireless Headphones", quantity: 1 },
      { order_id: 102, first_name: "Michael", last_name: "Brown", order_date: "2023-05-15", product_name: "Cotton T-Shirt", quantity: 2 },
      { order_id: 103, first_name: "Robert", last_name: "Johnson", order_date: "2023-05-18", product_name: "Smartphone", quantity: 1 },
      { order_id: 104, first_name: "John", last_name: "Doe", order_date: "2023-05-22", product_name: "Coffee Maker", quantity: 1 },
      { order_id: 105, first_name: "Jane", last_name: "Smith", order_date: "2023-05-28", product_name: "Running Shoes", quantity: 1 }
    ]
  },
  {
    id: 5,
    name: "High-value customers",
    query: `SELECT c.customer_id, c.first_name, c.last_name, COUNT(o.order_id) as order_count, SUM(o.total_amount) as total_spent
            ORDER BY total_spent DESC;`,
    result: [
      { customer_id: 3, first_name: "Robert", last_name: "Johnson", order_count: 3, total_spent: 825.25 },
      { customer_id: 1, first_name: "John", last_name: "Doe", order_count: 5, total_spent: 689.50 },
      { customer_id: 4, first_name: "Emily", last_name: "Williams", order_count: 2, total_spent: 599.98 }
    ]
  },
  {
    id: 6,
    name: "Product inventory check",
    query: "SELECT product_id, product_name, quantity_in_stock FROM products WHERE quantity_in_stock < 10;",
    result: [
      { product_id: 1024, product_name: "Bluetooth Speaker", quantity_in_stock: 3 },
      { product_id: 2048, product_name: "Ceramic Knife Set", quantity_in_stock: 5 },
      { product_id: 3072, product_name: "Organic Cotton Sheets", quantity_in_stock: 2 }
    ]
  },
  {
  id: 7,
  name: "Large sales dataset",
  query: "SELECT * FROM sales_records LIMIT 1000;",
  result: Array(1000).fill().map((_, i) => ({
    id: i + 1,
    product: `Product ${(i % 50) + 1}`,
    region: ["North", "South", "East", "West"][i % 4],
    amount: Math.round(Math.random() * 1000),
    date: `2023-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`
  }))
}
];

