import React from "react";
import Home from "./components/Home";
import Template from "./components/Template";
import ResumePreview from "../src/components/ResumePreview";
import PersonalDetail from "../src/components/PersonalDetail";
import Skills from "../src/components/Skills";
import LanguagesReferences from "../src/components/LanguagesReferences";
import Education from "../src/components/Education";
import Experience from "../src/components/Experience";
import Certificate from "../src/components/Certificate";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Error from "./components/Error";
import { ResumeProvider } from "../src/ResumeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumePdf from "./ResumePdf";
const App = () => {
  return (
    <Router>
      <ResumeProvider>
        {" "}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/template" element={<Template />} />
            <Route path="/personal-detail" element={<PersonalDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route
              path="/languages-references"
              element={<LanguagesReferences />}
            />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/resume-preview" element={<ResumePreview />} />
            <Route path="/resume-pdf" element={<ResumePdf />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            <Route path="/logout" element={<Logout />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </ResumeProvider>
    </Router>
  );
};

export default App;
