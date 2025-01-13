import WoodenSnail from "../../assets/wooden-snail-decor.png";

const NewArrival = () => {
  return (
    <>
      <section>
        <div className="container bg-[#FAF4F1]">
          <div className="new-arrival-content py-32 flex flex-col items-center gap-20 md:gap-36 md:flex-row md:justify-between">
            <div className="img-container order-2 md:order-1 w-full mx-auto md:w-[48%]">
              <img src={WoodenSnail} alt="Wooden Snail Decor" className="w-full" />
            </div>
            <div className="right-content sm:max-w-[465px] px-12 md:px-0 order-1 md:order-2 text-primary font-secondary md:w-[48%]">
              <h4 className="mb-3 font-semibold text-xl">NEW ARRIVALS</h4>
              <h2 className="mb-4 font-bold font-primary text-3xl md:text-[46px] leading-[58px] text-productTitle">
                Wooden Snail Decor
              </h2>
              <button className="mr-auto px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 border-2 text-primary font-bold font-secondary rounded-[10px]">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
