import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const EnCours = () => {
  return (
    <Zoom>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h2 className="text-primary md:text-4xl sm:text-1xl">
            Page en cours de développement 🕤
          </h2>
          <Link
            to="/"
            className="text-secondary hover:text-primary hover:scale-125 duration-300 md:text-2xl sm:text-1xl"
          >
            <i className="ri-arrow-left-line"></i>Retour en arrière
          </Link>
        </div>
      </div>
    </Zoom>
  );
};

export default EnCours;
