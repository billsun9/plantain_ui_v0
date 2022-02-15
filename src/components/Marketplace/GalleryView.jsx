import { Image } from "../image"

export const GalleryView = (props) => {
  return (
    <div className='portfolio-items'>
    {props.data
        ? props.data.map((d, i) => (
        <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
            <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
        </div>
        ))
        : 'Loading...'}
    </div>
  )
}
