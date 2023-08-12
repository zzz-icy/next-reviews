import Heading from "@/components/Heading";

const StardewValleyPage: React.FC = () => {
  return (
    <>
      <Heading>Stardew Valley</Heading>
      {/* we just need to put our images inside the "public" folder and 
      the Next.js server will return them directly as they are. */}
      <img
        src="/images/stardew-valley.jpg"
        alt=""
        height="360"
        width="640"
        className="mb-2 rounded"
      />
      <p>No Coffee No Life</p>
    </>
  );
};

export default StardewValleyPage;
