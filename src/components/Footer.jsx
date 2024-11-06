import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { Link } from "react-router-dom";
import ueu from "../assets/ueu.png";
import mbkm from "../assets/mbkm.png";
import kemdikbud from "../assets/kemdikbud.png";

function Footer() {
  return (
    <footer className="bg-blue-500 font-poppins text-white px-7 py-16 lg:px-20 w-full">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex w-full md:w-1/2 justify-between">
          <div className="w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Social Media</h1>
            <div className="flex justify-start items-center gap-4">
              <div>
                <FaInstagram className="text-3xl" />
              </div>
              <div>
                <FaFacebook className="text-3xl" />
              </div>
              <div>
                <FaLinkedin className="text-3xl" />
              </div>
              <div>
                <FaTwitter className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-semibold mb-4">PIBA</h1>
          <p className="mb-7 text-lg">Aplikasi digital Pembelajaran Interaktif Berbasis Aplikatif, tentang kesehatan Dan senam Rhythmic Auditory Stimulation (RAS) </p>
          <p className="text-lg">Kontak Univertas Esa Unggul</p>
          <p className="text-lg flex items-center gap-x-4 mt-2">
            <BsFillTelephoneFill className="text-white" /> 0803848238
          </p>
          <p className="text-lg flex items-center gap-x-4">
            <BsBuilding /> Jl. Arjuna Utara, Jakarta, 11510
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Link Terkat</h1>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link className="text-lg">Kementrian Kesehatan RI</Link>
            </li>
            <li>
              <Link className="text-lg">Pemprov DKI Jakarta</Link>
            </li>
            <li>
              <Link className="text-lg">Pemkot Jakarta Barat</Link>
            </li>
            <li>
              <Link className="text-lg">Yankes Kemkes</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center w-2/3 my-2 gap-x-3 -ml-3">
        <img className="w-16" src={ueu} alt="" />
        <img className="w-10" src={kemdikbud} alt="" />
        <img className="w-20" src={mbkm} alt="" />
      </div>
    </footer>
  );
}


export default Footer
