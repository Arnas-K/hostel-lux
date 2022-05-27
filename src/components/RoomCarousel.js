import { Carousel } from "react-responsive-carousel";

export default function RoomCarousel({ roomPicture, title, description }) {
  return (
    <div className="relative mx-4 bg-white mb-6 shadow-lg rounded-lg bg-blueGray-700">
      <Carousel>
        {roomPicture.map((image) => (
          <div>
            <img src={image} alt="Picture of a room" />
          </div>
        ))}
      </Carousel>
      <blockquote className="relative p-8 mb-4">
        <h4 className="text-xl font-bold text-white"> {title} </h4>
        <p className="text-md font-light mt-2 text-white">{description}</p>
      </blockquote>
    </div>
  );
}
