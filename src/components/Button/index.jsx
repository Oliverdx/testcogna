const Button = ({
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {

  const baseStyle = 'px-4 py-2 rounded font-semibold';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  };

  const styles = `${baseStyle} ${variants[variant] || ''} ${className}`;

  return (
    <button
      className={styles}
      type={type}
      data-testid={`button-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
