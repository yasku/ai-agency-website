export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  };

  return (
    <div className={`font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent ${sizeClasses[size]}`}>
      AI Agency
    </div>
  );
}
