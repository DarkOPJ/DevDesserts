// api/products.js
export default async function handler(req, res) {
    const response = await fetch('https://jsondevdessert.onrender.com/products');
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch products' });
    }
  
    const data = await response.json();
    return res.status(200).json(data);
  }
  