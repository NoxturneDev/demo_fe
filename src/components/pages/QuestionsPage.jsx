import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Questions from "../Questions";

export default function QuestionsPage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const params = useParams();
  
  // Structured data for question sets
  const questionSets = {
    "slide-1": [
      {
        question: "Apa yang disebut dengan Kesehatan secara fisik, mental, dan kesejahteraan sosial secara utuh yang berhubungan dengan sistem, fungsi, dan proses reproduksi, tidak hanya bebas dari penyakit dan kecacatan?",
        name: "question6",
        correctAnswer: 3,
        options: [
          { text: "Kesehatan Jasmani", value: 1 },
          { text: "Kesehatan Rohani", value: 2 },
          { text: "Kesehatan Reproduksi", value: 3 },
        ],
      },
      {
        question: "Menurut WHO usia remaja adalah …..",
        name: "question7",
        correctAnswer: 2,
        options: [
          { text: "3-9 tahun", value: 1 },
          { text: "10-19 tahun", value: 2 },
          { text: "25-40 tahun", value: 3 },
        ],
      },
      {
        question: "Apa yang terjadi pada organ reproduksi remaja?",
        name: "question8",
        correctAnswer: 1,
        options: [
          { text: "Tumbuh rambut di sekitar alat kelamin", value: 1 },
          { text: "Penurunan kelenjar di sekitar alat kelamin", value: 2 },
          { text: "Penurunan produksi keringat di sekitar alat kelamin", value: 3 },
        ],
      },
      {
        question: "Apa yang harus dilakukan agar otot-otot tubuh tetap kuat dan sehat?",
        name: "question9",
        correctAnswer: 2,
        options: [
          { text: "Bermalas-malasan setiap hari", value: 1 },
          { text: "Berolahraga secara teratur", value: 2 },
          { text: "Hanya tidur dan makan", value: 3 },
        ],
      },
      {
        question: "Bagian tubuh mana yang berfungsi untuk bernafas?",
        name: "question10",
        correctAnswer: 2,
        options: [
          { text: "Jantung", value: 1 },
          { text: "Paru-paru", value: 2 },
          { text: "Lambung", value: 3 },
        ],
      },
    ],
    "slide-2": [
      {
        question: "Apa kepanjangan dari Senam RAS?",
        name: "question1",
        correctAnswer: 2,
        options: [
          { text: "Senam Rhythmic Auditory Sensation", value: 1 },
          { text: "Senam Rhythmic Auditory Stimulation", value: 2 },
          { text: "Senam Rhythmic Automatic Stimulation", value: 3 },
        ],
      },
      {
        question: "Senam RAS diawali dengan …..",
        name: "question2",
        correctAnswer: 1,
        options: [
          { text: "Pemanasan", value: 1 },
          { text: "Pendinginan", value: 2 },
          { text: "Gerakan Inti", value: 3 },
        ],
      },
      {
        question: "Apa yang harus kita lakukan untuk menjaga Kesehatan tubuh?",
        name: "question3",
        correctAnswer: 2,
        options: [
          { text: "Tidur larut malam", value: 1 },
          { text: "Mengonsumsi makanan bergizi", value: 2 },
          { text: "Bermain video game sepanjang hari", value: 3 },
        ],
      },
      {
        question: "Apa Manfaat dari Pemanasan pada Senam RAS?",
        name: "question4",
        correctAnswer: 3,
        options: [
          { text: "Meningkatkan kadar gula darah dalam tubuh", value: 1 },
          { text: "Meningkatkan denyut jantung yang berlebihan", value: 2 },
          { text: "Mempersiapkan fisik dan mental tubuh serta meminimalkan kejang otot", value: 3 },
        ],
      },
      {
        question: "Manakah di antara pilihan berikut yang merupakan kebiasaan baik untuk menjaga Kesehatan gigi?",
        name: "question5",
        correctAnswer: 1,
        options: [
          { text: "Menggosok gigi dua kali sehari", value: 1 },
          { text: "Mengonsumsi permen setiap hari", value: 2 },
          { text: "Tidak pernah memeriksakan gigi ke dokter", value: 3 },
        ],
      },
    ],
  };
  
  useEffect(() => {
    // Load question set based on params
    const selectedSet = params.slide || "slide-1"; // Default to "set-1" if no param is provided
    setQuestionSet(questionSets[selectedSet] || []);
  }, [params.set]);
  
  const closeScoreDialogAndBack = () => {
    setIsModalOpen(false);
    setScore(null);
    setPercentage(null);
    navigate("/");
  };
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    let correctCount = 0;
    const totalQuestions = questionSet.length;
    
    questionSet.forEach(({ name, correctAnswer }) => {
      const answer = parseInt(e.target[name].value);
      if (answer === correctAnswer) {
        correctCount += 1;
      }
    });
    
    const scorePercentage = ((correctCount / totalQuestions) * 100).toFixed(2);
    setScore(`${correctCount}/${totalQuestions}`);
    setPercentage(`${scorePercentage}%`);
    setIsModalOpen(true); // Open the modal to show results
  };
  
  return (
    <div className="p-5">
      <Link to={`/topics/${params.slide}`} className="text-blue-500">Kembali</Link>
      <h1 className="text-3xl font-bold mb-7">Jawab pertanyaan dengan seksama</h1>
      <div>
        <form onSubmit={handleSubmitForm}>
          {questionSet.map(({ question, name, options }) => (
            <Questions key={name} questions={question} name={name} options={options}/>
          ))}
          <div className="flex justify-center items-center mt-5">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
      
      {/* Modal for showing score */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Score</DialogTitle>
            <DialogDescription>
              <p>Score: {score}</p>
              <p>Percentage: {percentage}</p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={closeScoreDialogAndBack}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}