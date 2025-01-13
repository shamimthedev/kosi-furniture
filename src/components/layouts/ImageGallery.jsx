import FooterItem1 from '../../assets/footerItem1.png'
import FooterItem2 from '../../assets/footerItem2.png'
import FooterItem3 from '../../assets/footerItem3.png'
import FooterItem4 from '../../assets/footerItem4.png'
import FooterItem5 from '../../assets/footerItem5.png'
import FooterItem6 from '../../assets/footerItem6.png'

const ImageGallery = () => {
  return (
    <>
      <section className="image-gallery mb-20">
        <div className="flex items-center justify-center flex-col md:flex-row md:flex-wrap md:max-w-[512px] md:mx-auto md:gap-4 lg:gap-0 lg:flex-nowrap">
          <img src={FooterItem1} alt="" />
          <img src={FooterItem2} alt="" />
          <img src={FooterItem3} alt="" />
          <img src={FooterItem4} alt="" />
          <img src={FooterItem5} alt="" />
          <img src={FooterItem6} alt="" />
        </div>
      </section>
    </>
  )
}

export default ImageGallery