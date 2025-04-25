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
    <div>
      <div className="outer-container">
        <div>
          <h1 className="heading">LEO HALFEN</h1>
          About {about?.entries.map((entry) => entry.text)}
        </div>
        {images?.entries.map((entry) => {
          return <div key={entry.imageUrl.toString()}>
            <img
              key={entry.imageUrl.toString()}
              src={entry.imageUrl}
              width={'100%'}
              className='about'
            />
          </div>
        })}
      </div>
    </div>
  )
}