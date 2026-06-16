import { Link } from "react-router-dom";

const Breadcrumb = ({
  items = [],
}) => {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-[#6b7280]">

      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
        >
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-[#5A97A9]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#3f3f3f]">
              {item.label}
            </span>
          )}

          {index !==
            items.length - 1 && (
            <span>/</span>
          )}
        </div>
      ))}

    </nav>
  );
};

export default Breadcrumb;