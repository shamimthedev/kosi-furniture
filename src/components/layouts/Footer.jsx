import { IoMdMail } from "react-icons/io"

const Footer = () => {
  return (
    <>
      <section className="footer-section max-w-3xl mx-auto">
        <div className="mx-9 pt-20 md:pb-16 pb-12 mb-5 flex font-secondary flex-col md:flex-row gap-8 md:gap-24">
          <div className="newsletter">
            <h4 className="mb-6 font-bold text-[23px] leading-[150%]">Newsletter</h4>
            <p className="max-w-[240px] mb-9 text-[15px] leading-[30px] text-[#4E4B66]">Get timely updates from your favorite products</p>
            <div className="mail flex items-center gap-3">
              <IoMdMail />
              <p className="text[#1A1A1A] text-sm leading-[150%]">ilyas.traikia@yahoo.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
              <div className="services">
                <h5 className="mb-6 font-bold leading-[120%] text-[#2B303A]">Services</h5>
                <ul className="text-sm leading-[150%] text-[#4E4B66] grid gap-4">
                  <li>Email Marketing</li>
                  <li>Branding</li>
                  <li>Campaign</li>
                  <li>Offline</li>
                </ul>
              </div>
              <div className="about">
                <h5 className="mb-6 font-bold leading-[120%] text-[#2B303A]">About</h5>
                <ul className="text-sm leading-[150%] text-[#4E4B66] grid gap-4">
                  <li>Our Story </li>
                  <li>Benefits</li>
                  <li>Team</li>
                  <li>Career</li>
                </ul>
              </div>
              <div className="contact">
                <h5 className="mb-6 font-bold leading-[120%] text-[#2B303A]">Contact</h5>
                <ul className="text-sm leading-[150%] text-[#4E4B66] grid gap-4">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
              <div className="help">
                <h5 className="mb-6 font-bold leading-[120%] text-[#2B303A]">Help</h5>
                <ul className="text-sm leading-[150%] text-[#4E4B66] grid gap-4">
                  <li>FAQ</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
        </div>
        <div className="copyright py-5 flex gap-3 flex-col md:flex-row justify-center md:justify-between font-secondary text-sm leading-[150%] text-[#4E4B66] text-center">
          <p>Copyright© 2023. Stitch Construction. All Right Reserved.</p>
          <div className="flex gap-9 justify-center">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer