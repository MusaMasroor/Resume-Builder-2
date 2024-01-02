import React, { createContext, useContext, useState, useEffect } from "react";

const ResumeContext = createContext();

export function useResume() {
  return useContext(ResumeContext);
}

export function ResumeProvider({ children }) {
  const [showNotification, setShowNotification] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const closeNotificationHandler = () => {
    setShowNotification(false);
  };

  const [showAuth, setShowAuth] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // Function to handle photo upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedPhoto(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // Function to handle photo deletion
  const handleDelete = () => {
    setSelectedPhoto(null);
  };
  // Load resumeContent from localStorage when the component mounts
  const [resumeContent, setResumeContent] = useState(() => {
    const storedResume = localStorage.getItem("resumeContent");
    return storedResume
      ? JSON.parse(storedResume)
      : {
          // Contact Us
          subject: "A bug",
          message: "Help me there's a bug in your application !",
          // Sign Up and LogIn
          name: "John Doe",
          email: "johndoe@gmail.com",
          phoneNumber: "(585) 393-5367",
          password: "JohnDoe1234",
          cPassword: "JohnDoe1234",

          // personal details
          firstName: "John",
          lastName: "Doe",
          occupation: "Marketing Manager",
          link1: "https://linkedin.com",
          link2: "https://gmail.com",

          location: "New York City, NY",
          phone: "(555) 123-4567",
          about:
            "Results-driven marketing professional with over 8 years of experience in developing and executing successful marketing strategies. Adept at leveraging data analytics to drive campaign effectiveness and ROI. Proven track record of leading cross-functional teams to achieve business objectives. Strong communication skills and a creative mindset that consistently delivers innovative solutions to complex marketing challenges.",

          // skills
          skill1: "Digital Marketing",
          skill2: "Data Analytics",
          skill3: "Social Media Management",
          skill4: "Search Engine Optimization (SEO)",
          skill5: "Project Management",
          skill6: "Branding and Identity",
          skill7: "Graphic Design",

          // languages
          language1: "French",
          language2: "English",
          language3: "Spanish",

          // references
          reference1: "john.smith@email.com",
          reference2: "mary.johnson@email.com",
          reference3: "david.lee@email.com",

          // education 1
          degree1: "Bachelor of Science in Computer Science",
          university1: "Tech University",
          startDate1: "September 2016",
          endDate1: "May 2020",
          city1: "San Francisco",
          country1: " United States",

          // education 2
          degree2: "Master of Business Administration (MBA)",
          university2: "Elite Business School",
          startDate2: "August 2018",
          endDate2: "June 2020",
          city2: "London",
          country2: "United Kingdom",

          // experience 1
          job1: "Senior Marketing Manager",
          employer1: " Acme Marketing Solutions",

          startDate3: "September 2014",
          endDate3: "May 2018",
          achievement1:
            "Led a team of 10 marketing professionals and increased the company's annual revenue by 20% through successful marketing campaigns.",
          achievement2:
            "Developed and executed a comprehensive digital marketing strategy that resulted in a 30% increase in online sales within the first year.",
          achievement3:
            "Implemented a customer segmentation strategy, leading to a 15% improvement in email marketing open rates and a 10% increase in conversion rates.",

          // experience 2
          job2: "Project Manager",
          employer2: "Global Tech Solutions",

          startDate4: "January 2017",
          endDate4: " December 2019",
          achievement4:
            "Successfully managed and delivered 20+ complex IT projects on time and within budget, totaling over $5 million in revenue.",
          achievement5:
            "Implemented Agile project management methodologies, resulting in a 20% increase in project efficiency and client satisfaction.",
          achievement6:
            "Developed and maintained strong client relationships, leading to repeat business and referrals.",

          // experience 3
          job3: "Financial Analyst",
          employer3: " Prosperity Bank",

          startDate5: "August 2012",
          endDate5: "May 2017",
          achievement7:
            "Conducted in-depth financial analysis and forecasting, contributing to the bank's ability to make informed lending decisions.",
          achievement8:
            "Developed and automated financial models that reduced data processing time by 30% and improved accuracy.",
          achievement9:
            "Collaborated with the risk management team to assess credit risk and recommended risk mitigation strategies.",

          // experience 4
          job4: " Registered Nurse",
          employer4: "City General Hospital",

          startDate6: "August 2012",
          endDate6: "May 2017",
          achievement10:
            "Provided high-quality patient care in a fast-paced emergency room, demonstrating expertise in triage, assessment, and treatment.",
          achievement11:
            "Implemented infection control protocols, reducing hospital-acquired infections by 15% in the ER.",
          achievement12: `Received the "Nurse of the Year" award in 2018 for exceptional dedication and patient advocacy.`,

          //Certification 1
          certificateName1: "Project Management",
          schooleName1: "Horizon Institute of Project Management",
          aboutDepartment1:
            "Horizon Institute of Project Management is a globally recognized institution known for its excellence in project management education. It is accredited by the Project Management Institute (PMI) and is renowned for its rigorous and comprehensive PMP certification program. The school boasts a team of experienced instructors who are themselves PMP-certified professionals with years of practical experience in project management across various industries.It is accredited by the Project Management Institute (PMI) and is renowned for its rigorous and comprehensive PMP certification program.",
          startDate7: " January 2017",
          endDate7: "December 2019",

          //Certification 2

          certificateName2: "Digital Marketing",
          schooleName2: "Digital Marketing Academy",
          aboutDepartment2:
            "Digital Marketing Academy is a leading institution specializing in digital marketing education and training. It is known for its cutting-edge curriculum and industry-relevant courses. The academy collaborates with top digital marketing experts and professionals to deliver up-to-date and practical knowledge to its students.",
          startDate8: "August 2012",
          endDate8: "May 2017",
        };
  });

  // Save resumeContent to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("resumeContent", JSON.stringify(resumeContent));
  }, [resumeContent]);

  return (
    <ResumeContext.Provider
      value={{
        resumeContent,
        setResumeContent,
        selectedPhoto,
        handleUpload,
        handleDelete,
        showNotification,
        closeNotificationHandler,
        showAuth,
        setShowAuth,
        setShowPdfPreview,
        showPdfPreview,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}
