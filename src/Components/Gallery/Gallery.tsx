import { ReactNode } from "react";
import { FaPlus } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Tower from "./../../../public/tower.jpeg";

interface ButtonProps {
  children: ReactNode;
}

const Gallery = () => {
  return (
    <div className="bg-gal sm:w-614 sm:h-56 lg:w-720 lg:h-330 flex flex-col sm:p-2 lg:p-4 gap-4">
      <header className="flex justify-between ">
        <div className="bg-black rounded-20 text-white sm:h-10 sm:w-28 lg:w-149 lg:h-62 sm:text-lg lg:text-xl font-medium sm:leading-5 lg:leading-8 flex items-center justify-center font-poppin">
          Gallery
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-104 text-white sm:h-10 sm:w-28 lg:w-149 lg:h-62 sm:text-xs lg:text-xs font-extrabold sm:leading-5 lg:leading-8 flex items-center justify-center font-pjs shadow-tan bg-arrow uppercase">
            <button className="flex justify-center items-center">
              <FaPlus /> Add Image
            </button>
          </div>
          <ArrowButton
            children={<GoArrowLeft color="#6F787C" size={15}></GoArrowLeft>}
          ></ArrowButton>
          <ArrowButton
            children={<GoArrowRight color="#6F787C" size={15}></GoArrowRight>}
          ></ArrowButton>
        </div>
      </header>
      <section className="flex justify-evenly">
        <TowerImage></TowerImage>
        <TowerImage></TowerImage>
        <TowerImage></TowerImage>
      </section>
    </div>
  );
};

const ArrowButton = ({ children }: ButtonProps) => {
  return (
    <button className="shadow-cursor bg-arrow sm:w-8 sm:h-8 lg:w-45 lg:h-45 flex justify-center items-center rounded-full">
      {children}
    </button>
  );
};

const TowerImage = () => {
  return (
    <img
      className="sm:w-32 sm:h-32 lg:w-190 lg:h-179 rounded-3xl grayscale-100"
      src={Tower}
    />
  );
};

export default Gallery;
