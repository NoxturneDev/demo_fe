// src/components/pages/Topics.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Link, useNavigate} from "react-router-dom";
import ImageSlider from "../ImageSlider.jsx";
import image1 from '../../assets/slide-1-1.png';
import image2 from '../../assets/slide-1-2.png';
import image3 from '../../assets/slide-1-3.png';

const imagesUrl = [image1, image2, image3];

const Topics = () => {
  const navigate = useNavigate();
  
  const goToQuestions = () => {
    navigate("/questions");
  };
  
  return (
    <>
      <ImageSlider images={imagesUrl} />
    </>
  );
};

export default Topics;
