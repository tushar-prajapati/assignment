const Footer = () => {
  return (
    <div className=" bottom-0 ml-0  pl-0 md:pl-24 w-full px-8">
    <div className="border-t border-gray-300 mt-auto py-4 px-6 bg-white flex flex-col md:flex-row justify-between">
        <div className="flex items-center mb-4 md:mb-0">
         <h1 className=" text-sm md:text-lg font-semibold text-[#2B7ABC]">INSTRUCTURE</h1>
        </div>

      <div className="flex flex-wrap md:flex-row flex-col gap-2 md:gap-6 text-sm text-gray-600">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Notice</a>
          <a href="#" className="hover:underline">Acceptable Use Policy</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">X.com</a>
        </div>
    </div>
    </div>
  );
};

export default Footer;
