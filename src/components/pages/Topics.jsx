// src/components/pages/Topics.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Link, useNavigate, useParams} from "react-router-dom";
import ImageSlider from "../ImageSlider.jsx";
import image1 from '../../assets/slide-1-1.png';
import image2 from '../../assets/slide-1-2.png';
import image3 from '../../assets/slide-1-3.png';
import image21 from '../../assets/slide-2-1.png';
import image22 from '../../assets/slide-2-2.png';
import image23 from '../../assets/slide-2-3.png';
import image24 from '../../assets/slide-2-4.png';
import image25 from '../../assets/slide-2-5.png';

import {useEffect, useState} from "react";
import VideoPlayer from "../VideoPlayer.jsx";

const slide1Images = [image1, image2, image3];
const slide2Images = [image21, image22, image23, image24, image25];

const Topics = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [imagesUrl, setImagesUrl] = useState([]);
  
  const goToQuestions = () => {
    navigate("/questions");
  };
  
  useEffect(() => {
    if(params.slide === 'slide-1') {
      setImagesUrl(slide1Images);
    } else if(params.slide === 'slide-2') {
      setImagesUrl(slide2Images);
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      {params?.slide === 'video-1' ? (
        <VideoPlayer videoId="0A1b2AlPHUs" />
      ) : (
        <ImageSlider images={imagesUrl} />
      )}
    </div>
  );
};

export default Topics;
