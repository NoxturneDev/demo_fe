// src/components/pages/Dashboard.jsx
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import image1 from '../../assets/slide-1-1.png';
import {useNavigate} from "react-router-dom";
import {Button} from "../ui/button.jsx";

const Dashboard = ({title}) => {
  const navigate = useNavigate();
  
  const handleCardClick = (slide) => {
    navigate(`/topics/${slide}`);
  };
  
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Selamat datang di IPA Academy!</h1>
        <p className="text-xl text-gray-700 mt-2">
          Mempelajari ilmu pengetahuan alam dengan mudah dan menyenangkan
        </p>
      </header>
      
      {/* Cards Section */}
      <div className="flex justify-center items-center gap-6">
        <Card
          className="hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 rounded-lg shadow-lg border border-gray-300"
          onClick={() => handleCardClick('slide-1')}
        >
          <CardHeader className="flex justify-center items-center">
            {/* Circle Image Placeholder */}
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
              <img src={image1} alt="Character" className="w-full h-full rounded-full"/>
            </div>
            <CardTitle className="text-center text-xl font-semibold text-blue-600">
              Pengenalan Tubuh Manusia
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">Pelajari tentang dasar-dasar organ reproduksi manusia</p>
            <Button
              className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Mulai Belajar
            </Button>
          </CardContent>
        </Card>
        <Card
          className="hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 rounded-lg shadow-lg border border-gray-300"
          onClick={() => handleCardClick('slide-2')}
        >
          <CardHeader className="flex justify-center items-center">
            {/* Circle Image Placeholder */}
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
              <img src={image1} alt="Character" className="w-full h-full rounded-full"/>
            </div>
            <CardTitle className="text-center text-xl font-semibold text-blue-600">
              Pengenalan Senam RAS
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">Pelajari tentang senam RAS</p>
            <Button
              className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Mulai Belajar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
