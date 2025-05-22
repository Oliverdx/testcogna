const Button = ({
  type = 'button',
  children,
  ...props
}) => (
    <button
      className="bg-[var(--secondary-color)] border border-[var(--secondary-color)] px-4 py-2 rounded font-semibold cursor-pointer hover:bg-transparent hover:border-white"
      type={type}
      {...props}
    >
      {children}
    </button>
);

export default Button;
