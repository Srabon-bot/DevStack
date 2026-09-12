import React from 'react';

interface GradientProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  variant?: 'text' | 'bg';
}

const Gradient = ({
  children,
  as: Tag = 'span',
  className = '',
  variant = 'text',
}: GradientProps) => {
  const gradientClass = variant === 'text' ? 'gradient-text' : 'gradient-bg';

  return <Tag className={`${gradientClass} ${className}`}>{children}</Tag>;
};

export default Gradient;