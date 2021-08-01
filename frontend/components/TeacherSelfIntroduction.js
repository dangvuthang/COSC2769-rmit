import React from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function teacherSelfIntroduction({ props }) {
    // const { id, name, rating, seftIntroduction} = props;
    return (
        <div className="bg-white w- p-4 mb-6 sm:inline-block">
            <div className="md:flex items-start md:text-left">
                <div className="flex-shrink-0">
                    <div className="inline-block relative flex flex-col space-y-1 justify-center items-center ">
                        <a href="#" className="block relative ">
                            <img
                                alt="profil"
                                src={props.avatar}
                                className="object-cover rounded-full sm:h-30 sm:w-30 md:h-50 md:w-50 "
                            />
                        </a>
                    </div>
                </div>
                <div className="ml-6">
                    <p className="flex items-baseline">
                        <span className=" font-bold uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                            {props.name}
                        </span>
                    </p>
                    <span className=" font-bold tracking-wide text-lg text-gray-600 font-semibold">
                        {props.job}
                    </span>
                    <div>
                        <StarIcon className="h-6 w-6 text-yellow-500 inline mb-1" />
                        <p className="text-gray-600  inline md: ml-5 sm: ml-3">
                            {props.rating}
                        </p>
                        <p className="text-gray-600 inline ml-1">
                            Instructor Rating
                        </p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 inline mb-1 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="text-gray-600  inline md: ml-5 sm: ml-3">
                            {props.roomAmount}
                        </p>
                        <p className="text-gray-600 inline ml-1">Rooms</p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 inline mb-1 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>
                        <p className="text-gray-600  inline md: ml-5 sm: ml-3">
                            {props.reviewerAmount}
                        </p>
                        <p className="text-gray-600 inline ml-1">Reviews</p>
                    </div>
                    <div className="mt-3">
                        <p className="mt-1 dark:text-white">
                            {props.seftIntroduction}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
