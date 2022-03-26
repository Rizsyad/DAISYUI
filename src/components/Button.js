const Button = ({ className, link, variant, children }) => {
  const addClassName = className ? className : "";

  const variants = {
    "outline-white": "btn-outline outline-white text-white",
  };

  const pickVariant = variants[variant];

  return (
    <a
      className={`btn ${addClassName} ${pickVariant} font-poppins`}
      href={link ? link : "#"}
    >
      {children}
    </a>
  );
};

export default Button;
