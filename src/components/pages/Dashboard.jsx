// src/components/pages/Dashboard.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = ({title}) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate("/topics");
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {[1, 2, 3, 4].map((_, index) => (
        <Card
          key={index}
          className="hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-200"
          onClick={handleCardClick}
        >
          <CardHeader>
            <CardTitle>Bagian Tubuh Manusia Bagian 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Mengenal bagian tubuh manusia bagian 1</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
