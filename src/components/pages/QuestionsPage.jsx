import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Questions from "../Questions";

export default function QuestionsPage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const correctAnswers = {
    question1: 2, // Correct answer value for question 1
    question2: 3, // Correct answer value for question 2
    question3: 4, // Correct answer value for question 3
    question4: 1, // Correct answer value for question 4
    question5: 2, // Correct answer value for question 5
  };
  
  const closeScoreDialogAndBack = () => {
    setIsModalOpen(false);
    setScore(null);
    setPercentage(null);
    navigate("/");
  }
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    let correctCount = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    
    Object.keys(correctAnswers).forEach((question) => {
      const answer = parseInt(e.target[question].value);
      if (answer === correctAnswers[question]) {
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
      <Link to="/topics" className="text-blue-500">Kembali</Link>
      <h1 className="text-3xl font-bold mb-7">Pertanyaan soal Bagian-bagian tubuh</h1>
      <div>
        <form onSubmit={handleSubmitForm}>
          <Questions questions="Berapa jumlah tulang pada manusia?" name="question1" />
          <Questions questions="Jumlah gigi pada manusia?" name="question2" />
          <Questions questions="Jumlah gigi pada Hewan?" name="question3" />
          <Questions questions="Jumlah tulang pada bayi?" name="question4" />
          <Questions questions="Jumlah tulang rusuk manusia?" name="question5" />
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