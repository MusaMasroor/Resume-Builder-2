import React from "react";
import { Link } from "react-router-dom";
import { useResume } from "../ResumeContext";
import RandomUser from "../img/random-user.png";
import LinkedIn from "../img/linkedin.png";
import Gmail from "../img/gmail.png";

const ResumePreview = () => {
  const { resumeContent } = useResume();
  const { selectedPhoto, setShowPdfPreview } = useResume();

  return (
    <div>
      <div className="bg-white">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className=" p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={selectedPhoto || RandomUser}
                    className="w-[160px] h-[160px] rounded-full"
                  />
                  <h1 className="text-2xl font-bold">
                    {resumeContent.firstName} {resumeContent.lastName}
                  </h1>
                  <p className="text-gray-700 font-semibold">
                    {resumeContent.occupation}
                  </p>

                  {/* Links Container  */}

                  <div className=" justify-center items-center my-2">
                    <div className="my-2">
                      <Link to="https://linkedin.com" className="flex">
                        <img
                          src={LinkedIn}
                          alt="LinkedIn"
                          className="w-7 h-7"
                        />
                        <span className="ml-2">{resumeContent.link1}</span>
                      </Link>
                    </div>

                    <div className="my-2">
                      <Link to="https://gmail.com" className="flex">
                        <img src={Gmail} alt="LinkedIn" className="w-6 h-6" />
                        <span className="ml-2">{resumeContent.link2}</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="whitespace-normal break-words">
                  <p className="text-gray-700">{resumeContent.about}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold mb-4 mt-4">Skills</span>
                  <ul>
                    <li className="mb-2">{resumeContent.skill1}</li>
                    <li className="mb-2">{resumeContent.skill2}</li>
                    <li className="mb-2">{resumeContent.skill3}</li>
                    <li className="mb-2">{resumeContent.skill4}</li>
                    <li className="mb-2">{resumeContent.skill5}</li>
                    <li className="mb-2">{resumeContent.skill6}</li>
                    <li className="mb-2">{resumeContent.skill7}</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-bold mb-4 mt-4">Languages</span>
                  <ul>
                    <li className="mb-2">{resumeContent.language1}</li>
                    <li className="mb-2">{resumeContent.language2}</li>
                    <li className="mb-2">{resumeContent.language3}</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-bold mb-4 mt-4">Refrences</span>
                  <ul>
                    <li className="mb-2">{resumeContent.reference1}</li>
                    <li className="mb-2">{resumeContent.reference2}</li>
                    <li className="mb-2">{resumeContent.reference3}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-9">
              <div className=" p-6">
                <h2 className="text-xl font-bold mt-6 mb-4">Education</h2>
                <div className="mb-6">
                  <div className="flex justify-between">
                    <li className=" font-bold list-disc">
                      {resumeContent.degree1}
                    </li>
                    <p>
                      <span>
                        {resumeContent.startDate1} - {resumeContent.endDate1},
                      </span>
                      <span className=" mr-2">{resumeContent.city1},</span>
                      <span className="mr-2">{resumeContent.country1}</span>
                    </p>
                  </div>
                  <span className="mt-2">{resumeContent.university1}</span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between">
                    <li className=" font-bold list-disc">
                      {resumeContent.degree2}
                    </li>
                    <p>
                      <span>
                        {resumeContent.startDate2} - {resumeContent.endDate2},
                      </span>
                      <span className=" mr-2">{resumeContent.city2},</span>
                      <span className=" mr-2">{resumeContent.country2}</span>
                    </p>
                  </div>
                  <span className="mt-2">{resumeContent.university2}</span>
                </div>

                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between">
                    <span className=" font-bold">{resumeContent.job1}</span>

                    <p>
                      <span className=" mr-2">{resumeContent.employer1}</span>
                      <span>
                        {resumeContent.startDate3} - {resumeContent.endDate3}
                      </span>
                    </p>
                  </div>

                  <li className="mt-2 list-disc">
                    {resumeContent.achievement1}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement2}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement3}
                  </li>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between">
                    <span className=" font-bold">{resumeContent.job2}</span>

                    <p>
                      <span className=" mr-2">{resumeContent.employer2}</span>
                      <span>
                        {resumeContent.startDate4} - {resumeContent.endDate4}
                      </span>
                    </p>
                  </div>

                  <li className="mt-2 list-disc">
                    {resumeContent.achievement4}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement5}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement6}
                  </li>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between">
                    <span className="font-bold">{resumeContent.job3}</span>

                    <p>
                      <span className=" mr-2">{resumeContent.employer3}</span>
                      <span>
                        {resumeContent.startDate5} - {resumeContent.endDate5}
                      </span>
                    </p>
                  </div>

                  <li className="mt-2 list-disc">
                    {resumeContent.achievement7}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement8}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement9}
                  </li>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between">
                    <span className=" font-bold">{resumeContent.job4}</span>

                    <p>
                      <span className=" mr-2">{resumeContent.employer4}</span>
                      <span>
                        {resumeContent.startDate6} - {resumeContent.endDate6}
                      </span>
                    </p>
                  </div>

                  <li className="mt-2 list-disc">
                    {resumeContent.achievement10}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement11}
                  </li>
                  <li className="mt-2 list-disc">
                    {resumeContent.achievement12}
                  </li>
                </div>

                {/* Certifications  */}

                <h2 className="text-xl  font-bold mt-6 mb-4">Certifications</h2>
                <div className="mb-6">
                  <div className="flex justify-between">
                    <span className=" font-semibold">
                      {resumeContent.certificateName1}
                    </span>

                    <p>
                      <span>
                        {resumeContent.startDate7} - {resumeContent.endDate7}
                      </span>
                    </p>
                  </div>
                  <li className="mt-2  font-bold list-disc">
                    {" "}
                    {resumeContent.schooleName1}
                  </li>
                  <span className="mt-2">{resumeContent.aboutDepartment1}</span>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between">
                    <span className=" font-semibold">
                      {resumeContent.certificateName2}
                    </span>

                    <p>
                      <span>
                        {resumeContent.startDate8} - {resumeContent.endDate8}
                      </span>
                    </p>
                  </div>
                  <li className="mt-2  font-bold list-disc">
                    {" "}
                    {resumeContent.schooleName2}
                  </li>
                  <span className="mt-2">{resumeContent.aboutDepartment2}</span>
                </div>
              </div>
              {/* Button to generate PDF */}
              <div className="flex justify-end">
                <Link to="/resume-pdf"></Link>
                <Link to="/resume-pdf">
                  {" "}
                  <button
                    className="py-3 px-5 my-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={() => {
                      setShowPdfPreview(true);
                    }}
                  >
                    Generate PDF
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumePreview;
