{/* Cards Section */
}
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Link, useNavigate} from 'react-router-dom';
import image1 from '../assets/slide-1-1.png';

export default function Cards() {
  const navigate = useNavigate();
  
  const handleCardClick = (slide) => {
    navigate(`/topics/${slide}`);
  };
  
  return (
    <div className="flex justify-center items-center p-5 gap-6 mb-20 flex-col md:flex-row">
      <Card className="hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 rounded-lg shadow-lg border border-gray-300">
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
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-600">Pelajari tentang dasar-dasar organ reproduksi manusia</p>
            <div className="flex gap-4 justify-center items-center">
              <Link to="/topics/slide-1">
                <Button
                  className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Mulai Belajar
                </Button>
              </Link>
            </div>
          </div>
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
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-600">Pelajari tentang senam RAS</p>
            <div className="flex gap-4 justify-center items-center">
              <Link to="/topics/slide-2">
                <Button
                  className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Mulai Belajar
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card
        className="hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 rounded-lg shadow-lg border border-gray-300"
        onClick={() => handleCardClick('video-1')}
      >
        <CardHeader className="flex justify-center items-center">
          {/* Circle Image Placeholder */}
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
            <img src={image1} alt="Character" className="w-full h-full rounded-full"/>
          </div>
          <CardTitle className="text-center text-xl font-semibold text-blue-600">
            Pernapasan Manusia
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600">Pelajari tentang sistem pernapasan manusia</p>
          <Button
            className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Tonton Video
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
