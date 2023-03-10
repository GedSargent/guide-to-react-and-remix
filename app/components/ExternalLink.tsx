interface ExternalLinkProps {
  children: React.ReactNode;
  to: string;
}

const ExternalLink = ({ children, to }: ExternalLinkProps) => {
  return (
    <a
      className="text-blue-500 underline hover:text-blue-700"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
