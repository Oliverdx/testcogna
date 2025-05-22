const Price = ({value, className}) => {
  const priceFormated = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value);
    
  return <p className={`font-bold ${className}`}>{priceFormated}</p>
};

export default Price;
