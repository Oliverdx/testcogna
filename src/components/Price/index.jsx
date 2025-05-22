const Price = ({
  value,
  className = '',
  as = 'p',
  role,
  id,
  'aria-label': ariaLabel,
  ...props
}) => {
  const Tag = as;

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return (
    <Tag
      className={`font-bold ${className}`}
      role={role}
      id={id}
      aria-label={ariaLabel || `Price ${priceFormatted}`}
      data-testid="price"
      {...props}
    >
      {priceFormatted}
    </Tag>
  );
};

export default Price;
