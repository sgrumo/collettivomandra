import ResponsiveImage from "./ResponsiveImage";
interface ClientsProps {}

const clientsName = [
  "astauto",
  "costa_crociere",
  "cri_imola",
  "huawei",
  "meliconi",
  "moralis",
  "pelliconi",
  "pepsi",
  "serhant",
  "zanichelli",
];
const Clients = ({}: ClientsProps) => {
  const assets = clientsName.map((client, index) => (
    <ResponsiveImage
      src={`/assets/images/clients/${client}.png`}
      alt={client}
      key={index}
    />
  ));
  return (
    <section id="clients">
      <h2 className="py-8 text-center text-6xl">CLIENTS</h2>
      <div className="clients-container">{assets}</div>
    </section>
  );
};

export default Clients;
