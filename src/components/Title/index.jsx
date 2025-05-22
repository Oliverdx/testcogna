const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'];

const Title = ({
  as = 'h1',
  children,
  className = '',
  role,
  id,
  'aria-label': ariaLabel,
  ...props
}) => {
  const Tag = allowedTags.includes(as) ? as : 'h1';

  return (
    <Tag
      className={className}
      role={role}
      id={id}
      aria-label={ariaLabel}
      data-testid={`title-${Tag}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Title;
