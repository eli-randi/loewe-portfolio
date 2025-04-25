import { fetchPhotos } from './api/client'
import { Spinner } from '@contentful/f36-spinner'
import Masonry from 'react-masonry-css'


import './App.css'
import { useState } from 'react'
import Modal from 'react-modal';
import { useQuery } from '@tanstack/react-query'


// logo page https://looka.com/s/214296619
// inspo https://sonjamueller.org/collection/portraits/
// inspo https://www.marvinlei.com/lensball


const App = ({ category }: { category: string }) => {
  const breakpointColumnsObj = {
    default: category === 'Portraits' ? 3 : 2,
    1100: 3,
    700: 2,
    500: 1
  };


  const { data, error } = useQuery({
    queryKey: ['contentful', category],
    queryFn: () => fetchPhotos(category),
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleOpenModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  if (error) {
    console.log(error)
    return <div>failed to load </div>
  }
  if (!data) return <Spinner size="large" />


  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {data?.entries.map((entry) => {
          return <div className='photograph-container' key={entry.imageUrl.toString()}>
            <img
              key={entry.imageUrl.toString()}
              src={entry.imageUrl}
              width={'100%'}
              className='photograph'
              onClick={() => handleOpenModal(entry.imageUrl)}
            />
          </div>
        })}
      </Masonry>

      {selectedImage && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Enlarged Image"
          className="modal"
          overlayClassName="overlay"
          ariaHideApp={false}
        >
          <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
        </Modal>
      )}
    </>
  )
}

export default App
