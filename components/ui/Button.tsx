import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export function Button({ href, children, className = "", type = "button" }: ButtonProps) {
  const styles = `inline-flex items-center justify-center px-5 py-2.5 bg-yellow-500 text-navy-900 text-sm font-medium rounded hover:bg-yellow-400 transition-colors ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}
