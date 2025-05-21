async function fetchData(endpoint){
  try{
    const result = await fetch(`${process.env.BACKEND_URL}\\${endpoint}`);
    const data = await result.json();
    
    return data;

  }catch(err){
    throw new Error(`Found an error when trying to reach the API ${err}`);
  }

}

export async function getProductList(){
  try{
    const productList = await fetchData("products");

    if(productList)
      return productList;

  }catch(err){ 
    throw new Error(`Failure on get the products ${err}`);
  }
}
