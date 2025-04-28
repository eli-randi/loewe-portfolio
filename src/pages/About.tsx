import { useQuery } from "@tanstack/react-query";
import { fetchPhotos, fetchText } from "../api/client";
import './About.css'

export const About = () => {

  const { data: images } = useQuery({
    queryKey: ['contentful', 'about'],
    queryFn: () => fetchPhotos('About'),
  });

  const { data: about } = useQuery({
    queryKey: ['contentful', 'description'],
    queryFn: () => fetchText(),
  });

  return (
    <div className="outer-container">
      <h1 className="heading">LEO HALFEN</h1>
      <div className="inner-container">
        <div className="text-container">

          {about?.entries.map((entry) => entry.text)}
        </div>
        <div className="image-container">
          {images?.entries.map((entry) =>
            <img
              key={entry.imageUrl.toString()}
              src={entry.imageUrl}
              className='image'
            />
          )}
        </div>
      </div>
    </div>
  )
}