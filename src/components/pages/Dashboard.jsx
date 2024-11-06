// src/components/pages/Dashboard.jsx
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import image1 from '../../assets/slide-1-1.png';
import poster1 from '../../assets/poster_1.png';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../ui/button.jsx";
import Faq from "../Faq.jsx";
import Footer from "../Footer.jsx";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../ui/dialog.jsx";
import {useEffect, useState} from "react";
import Cards from "../Cards.jsx";

const Dashboard = ({title}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [student, setStudent] = useState({
    name: null,
    class_room: null
  });
  
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
        
        <Cards />
        
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
                Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-600">Pelajari tentang dasar-dasar organ reproduksi manusia</p>
                <div className="flex gap-4 justify-center items-center">
                  <Link to="/questions">
                    <Button
                      className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Mulai Quiz
                    </Button>
                  </Link>
                  <Link to="/history">
                    <Button
                      className="my-2 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Lihat hasil
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center py-10 px-4 bg-gray-100">
          <div className="w-full max-w-3xl p-4 bg-white rounded-lg shadow-lg">
            <img
              src={poster1}
              alt="Image Poster"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
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
