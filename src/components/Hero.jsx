import { heroSlides } from "../constant";

export default function Hero() {
  return (
    <div className="h-screen w-8/12 overflow-hidden">
      {heroSlides.map((item) => (
        <div
          className={`${item.position} relative bg-[url(${item.image})] h-full w-full bg-cover p-10`}
          key={item.id}
        >
          <div className="heading-text text-secondary absolute">
            <p className="font-bonheur text-5xl">HandSip.</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
