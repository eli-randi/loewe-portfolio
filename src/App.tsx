import { fetchPhotos } from './api/client'
import useSWR from 'swr'
import { Spinner } from '@contentful/f36-spinner'
import Masonry from 'react-masonry-css'

import './App.css'

// logo page https://looka.com/s/214296619
// inspo https://sonjamueller.org/collection/portraits/
// inspo https://www.marvinlei.com/lensball

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

function App() {
  const { data, error } = useSWR('contentful', fetchPhotos)

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
          return <div className='photograph-container'>
            <img key={entry.imageUrl.toString()} src={entry.imageUrl} width={'100%'} className='photograph' />
          </div>
        })}
      </Masonry>
    </>
  )
}

export default App
