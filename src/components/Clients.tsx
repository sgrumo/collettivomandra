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
    <div className="client-container" key={index}>
      <ResponsiveImage
        src={`/assets/images/clients/${client}.png`}
        alt={client}
        key={index}
        className="h-64 w-64"
      />
    </div>
  ));
  return (
    <section id="clients">
      <h2 className="pt-16 text-center text-6xl md:text-8xl">CLIENTS</h2>
      <div className="relative mt-8 h-24 w-full overflow-x-hidden lg:h-48">
        <div className="clients-container animate-marquee-infinite">
          <div className="flex w-96 justify-around gap-x-4 md:gap-x-8 lg:w-[30rem]">
            {assets}
          </div>
          <div className="flex w-96 justify-around gap-x-4 md:gap-x-8 lg:w-[30rem]">
            {assets}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
