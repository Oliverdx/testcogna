const Title = ({ 
  as = 'h1',
  children, 
  className = '' 
}) => {
  const Tag = as;

  return (
    <Tag className={`${className}`} data-testid={`title-${as}`}>
      {children}
    </Tag>
  );
};

export default Title;
