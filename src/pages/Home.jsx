import Button from "../components/Button";
import { heroImageHome } from "../data/heroImageHome";

export const Home = () => {
  return (
    <div className="relative flex h-screen w-full flex-row overflow-hidden">
      <div className="absolute flex h-full w-full flex-row">
        <span className="w-6/6 bg-secondary-100"></span>
        <span className="w-2/6 bg-secondary-200"></span>
        <span className="w-2/6 bg-secondary-300"></span>
        <span className="w-2/6 bg-secondary-400"></span>
      </div>
      <div className="z-5 flex h-full w-6/12 flex-col justify-center gap-8 ps-30 pr-16">
        <p className="headline-text">Sip the Warmth, Feel the Craft.</p>
        <p className="title-small">
          <span>
            <p className="font-bold">
              We believe a cup is more than just a vessel.
            </p>
          </span>
          It’s a morning companion, a quiet partner in conversation, a bringer
          of warmth. At HandSip, every cup is handcrafted—slowly, mindfully, and
          never quite the same.
        </p>
        <div className="flex w-full flex-row items-center justify-between rounded-lg bg-white px-3 py-2">
          <p className="title-small text-primary">
            First Cup, First Love – Enjoy 15% Off
          </p>
          <span className="w-fit">
            <Button variant={"primary"} text={"Claim"} />
          </span>
        </div>
      </div>
      <div className="flex w-6/12 flex-col items-center">
        {heroImageHome.map((item) => {
          return (
            <img
              src={item.image}
              key={item.id}
              height={400}
              width={300}
              className="z-5 mb-2 rounded-lg"
            />
          );
        })}
      </div>
    </div>
  );
};
