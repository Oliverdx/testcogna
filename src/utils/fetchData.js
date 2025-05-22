async function fetchData(endpoint) {
  try {
    const url = `${process.env.BACKEND_URL}/${endpoint}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }

    const text = await response.text();

    // Verifica se tem conteúdo antes de parsear
    if (!text) {
      console.warn(`Empty response for ${url}`);
      return null;
    }

    try {
      const data = JSON.parse(text);
      return data;
    } catch (parseError) {
      console.error(`Failed to parse JSON from ${url}:`, parseError);
      return null;
    }

  } catch (err) {
    console.error('Fetch error:', err);
    throw new Error(`Error fetching API: ${err}`);
  }
}

export async function getProductList() {
  try {
    const productList = await fetchData('products');
    return productList ?? [];
  } catch (err) {
    console.error('Something went wrong:', err);
    throw new Error(`Could not get the product list: ${err}`);
  }
}

export async function getProductById(id) {
  try {
    const productData = await fetchData(`products/${id}`);

    if (!productData || Object.keys(productData).length === 0) {
      return null;
    }

    return productData;
  } catch (err) {
    console.error('Something went wrong:', err);
    throw new Error(`Error fetching product data: ${err}`);
  }
}
