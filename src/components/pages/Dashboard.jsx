// src/components/pages/Dashboard.jsx
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import image1 from '../../assets/slide-1-1.png';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../ui/button.jsx";
import Faq from "../Faq.jsx";
import Footer from "../Footer.jsx";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../ui/dialog.jsx";
import {useEffect, useState} from "react";

const Dashboard = ({title}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [student, setStudent] = useState({
    name: null,
    class_room: null
  });
  const navigate = useNavigate();
  
  const handleCardClick = (slide) => {
    navigate(`/topics/${slide}`);
  };
  
  const handleNameInput = (name) => {
    console.log(student)
    setStudent({...student, name: name});
    sessionStorage.setItem('name', name);
  }
  const handleClassRoomInput = (class_room) => {
    setStudent({...student, class_room: class_room});
    sessionStorage.setItem('classroom', class_room);
  }
  
  useEffect(() => {
    const isPretest = sessionStorage.getItem("isPretest");
    if (isPretest === null) {
      sessionStorage.setItem("isPretest", "1"); // default value
      setIsModalOpen(true)
    }
  }, []);
  
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-blue-100 gap-10 pt-10 min-h-screen">
        {/* Header Section */}
        <header className="text-center mb-10 mt-20">
          <h1 className="text-4xl font-bold text-blue-600">Selamat datang di PIBA!</h1>
          <p className="text-xl text-gray-700 mt-2">
            Aplikasi digital Pembelajaran Interaktif Berbasis Aplikatif, tentang kesehatan Dan senam Rhythmic Auditory
            Stimulation (RAS)
          </p>
        </header>
        
        {/* Cards Section */}
        <div className="flex justify-center items-center gap-6 mb-20">
          <Card
            className="hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200 p-4 rounded-lg shadow-lg border border-gray-300"
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
                  <Link to="/questions/slide-1">
                    <Button
                      className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Ambil Quiz
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
                  <Link to="/questions/slide-2">
                    <Button
                      className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Quiz
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
        <Faq/>
        <Footer/>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Masukkan Identitasmu</DialogTitle>
            <DialogDescription>Silakan isi nama dan kelasmu di bawah ini</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <label className="block mb-2">Nama</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={(e) => handleNameInput(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <label className="block mb-2">Kelas</label>
            <input
              type="text"
              name="classroom"
              value={student.class_room}
              onChange={(e) => handleClassRoomInput(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button onClick={() => setIsModalOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
