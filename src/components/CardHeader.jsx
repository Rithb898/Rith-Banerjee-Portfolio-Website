import React from "react";
import StarIcon from "../assets/icons/star.svg?react";
import { twMerge } from "tailwind-merge";

function CardHeader({ title, description, className }) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-calistoga text-3xl gap-2">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
}

export default CardHeader;
