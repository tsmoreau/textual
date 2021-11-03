export default function IndexPage() {
  return (
    <div className="pb-44 shadow-lg h-36 bg-red-500 w-full justify-center backdrop-filter backdrop-blur-lg bg-opacity-100">
      <ul className="w-44 text-gray-200 pt-6 font-mono text-sm flex flex-row justify-center text-center mx-auto">
        <li className=" mx-1.5">about</li>
        <li className=" mx-1.5">blog</li>
        <li className=" mx-1.5">contact</li>
      </ul>
      <ul className="w-56 text-gray-200 mt-3 font-mono text-sm flex flex-col mx-auto">
        <li className="flex justify-center">Decentralized Pictures LLC</li>
        <li className="flex justify-center">Terms & Conditions</li>
        <li className="flex justify-center">Privacy Policy</li>
      </ul>
    </div>
  );
}
