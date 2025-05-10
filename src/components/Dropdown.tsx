import { Link } from "react-router";

const serviceLinks = [
    { name: "MIG Welding", href: "/service1" },
    { name: "TIG Welding", href: "/service2" },
  ]

export const Dropdown = () => {
  return (
    <div className="space-y-3">
      <Link to="/services" className="text-lg font-medium">
        Services
      </Link>
      <div className="pl-4 border-l-2 border-muted space-y-2">
        {serviceLinks.map((service, index) => (
          <Link
            key={index}
            to={service.href}
            className="block text-base text-muted-foreground hover:text-primary"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
