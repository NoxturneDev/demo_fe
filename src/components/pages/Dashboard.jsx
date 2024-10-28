// src/components/pages/Dashboard.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import image1 from '../../assets/slide-1-1.png';
import { useNavigate } from "react-router-dom";

const Dashboard = ({ title }) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate("/topics");
  };
  
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Selamat datang di IPA Academy!</h1>
        <p className="text-xl text-gray-700 mt-2">
          Mempelajari ilmu pengetahuan alam dengan mudah dan menyenangkan
        </p>
      </header>
      
      {/* Cards Section */}
      <Card
        className="hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 rounded-lg shadow-lg border border-gray-300"
        onClick={handleCardClick}
      >
        <CardHeader className="flex justify-center items-center">
          {/* Circle Image Placeholder */}
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
            <img src={image1} alt="Character" className="w-full h-full rounded-full" />
          </div>
          <CardTitle className="text-center text-xl font-semibold text-blue-600">
            Pengenalan Tubuh Manusia
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600">Pelajari tentang dasar-dasar organ reproduksi manusia</p>
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
          >
            Mulai Belajar
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
