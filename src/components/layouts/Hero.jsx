import SunsetLamp from "../../assets/hero-sunset-lamp.png";
import SofaCollection from "../../assets/hero-sofa-collection.png";

const Hero = () => {
  return (
    <>
      <section className="mb-32 md:mb-0">
        <div className="container">
          <div className="hero-content flex flex-col md:flex-row justify-between gap-8">
            <div className="left-image-content md:w-[49%] relative">
              <img className="w-full" src={SunsetLamp} alt="Sunset lamp" />
              <div className="img-details text-primary font-bold absolute left-10 md:left-12 lg:left-16 bottom-10">
                <h2 className="mb-3 md:mb-4 font-primary text-3xl lg:4xl">
                  Sunset Lamp
                </h2>
                <p className="font-secondary border-b-2 border-primary inline-block hover:text-secondary hover:border-secondary duration-200 cursor-pointer">
                  Shop Now
                </p>
              </div>
            </div>
            <div className="right-image-content md:w-[49%] relative">
              <img
                className="w-full"
                src={SofaCollection}
                alt="Sofa Collection"
              />
              <div className="img-details text-primary font-bold absolute left-10 md:left-12 lg:left-16 bottom-10">
                <h2 className="mb-3 md:mb-4 font-primary text-3xl lg:4xl">
                  Sofa Collection
                </h2>
                <p className="font-secondary border-b-2 border-primary inline-block hover:text-secondary hover:border-secondary duration-200 cursor-pointer">
                  Shop Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
