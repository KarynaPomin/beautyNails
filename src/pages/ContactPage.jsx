import tel_icon from '/src/assets/icons/phone-call.png';
import location_icon from '/src/assets/icons/signs.png';
import email_icon from '/src/assets/icons/email.png';
import MarkedLocationOnMap from '../components/MarkedLocationOnMap';

function ContactPage() {
  return (
    <main className="flex justify-center items-center mt-[5%]">
      <div className="
        grid gap-4 p-4 bg-blue-100 rounded-2xl
        w-[90%] max-w-[1000px] min-w-[250px]
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        auto-rows-[minmax(100px,1fr)]
      ">

        <div className="bg-blue-200 rounded-xl flex flex-col items-center justify-center p-4">
          <img src={tel_icon} alt="icon-tel" className='icon-contactUs' />
          <p className="mt-2 text-center text-sm">+48 570 247 502</p>
        </div>

        <div className="bg-blue-200 rounded-xl flex flex-col items-center justify-center p-4">
          <img src={location_icon} alt="icon-location" className='icon-contactUs' />
          <p className="mt-2 text-center text-sm">
            ul. Kościuszki 37<br />62-300 Września
          </p>
        </div>

        <div className="sm:row-span-2 sm:col-span-2 lg:row-span-2 lg:col-span-2 bg-blue-200 rounded-xl flex items-center justify-center overflow-hidden">
          <MarkedLocationOnMap />
        </div>

        <div className="sm:col-span-2 lg:col-span-2 bg-blue-200 rounded-xl flex flex-col items-center justify-center p-4">
          <img src={email_icon} alt="icon-email" className='icon-contactUs' />
          <p className="mt-2 text-center text-sm">
            meduzalenapomin@gmail.com
          </p>
        </div>
      </div>
    </main>
  )
}

export default ContactPage;
