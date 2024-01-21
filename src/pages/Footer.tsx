import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    const getFullYear = new Date().getFullYear();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 items-center sm:place-items-center list-none text-white py-10 font-semibold px-4">
        <nav>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li className="my-2">
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Faq</Link>
          </li>
          <li className="mt-2">
            <Link to="/">Contact</Link>
          </li>
        </nav>
        <div>
          <li>Shipping & Returns</li>
          <li className="my-2">Store Policy</li>
          <li>Payment Methods</li>
        </div>
        <div>
          <li className="  mb-2">Contact</li>
          <li>Tel: 123-456-7890</li>
        </div>
        <div>
          <li>Facebook</li>
          <li className="my-2">Instagram</li>
          <li>Pinterest</li>
        </div>
      </div>
      <footer className="text-center text-white border-t py-5 px-4">
        <p className="text-[14px]">
          © {getFullYear} by Sajal. Proudly created with Md. Sajal Ali
        </p>
      </footer>
    </>
  );
};

export default Footer;
