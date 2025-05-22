const Button = ({
  type = 'button',
  children,
  className,
  ...props
}) => (
    <button
      className={`bg-[var(--secondary-color)] border border-[var(--secondary-color)] px-4 py-3 rounded font-semibold cursor-pointer transition hover:bg-transparent hover:border-white ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
);

export default Button;
