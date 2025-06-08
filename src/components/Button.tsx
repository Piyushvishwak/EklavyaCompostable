import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;