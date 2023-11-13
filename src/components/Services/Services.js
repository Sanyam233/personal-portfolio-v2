import Title from "../Title/Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services">
      <Title heading="What can I do?" />
      <div className="services-container">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
