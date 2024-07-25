import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Components/Landing.jsx";
import Mission from "./Pages/Footer/Mission.jsx";
import ContactUs from "./Pages/Footer/ContactUs.jsx";
import FAQ from "./Pages/Footer/FAQ.jsx";
import Startup from "./Pages/Footer/Startup.jsx";
import ItServices from "./Pages/Footer/ItServices.jsx";
import ItStaffing from "./Pages/Footer/ItStaffing.jsx";
import Campuses from "./Pages/Footer/Campuses.jsx";
import InterviewService from "./Pages/Footer/InterviewService.jsx";
import Features from "./Pages/Footer/Features.jsx";
import Profile_Page from "./Pages/Footer/Profile_Page.jsx";
import Pricing from "./Pages/Footer/Pricing.jsx";
import Testimonials from "./Pages/Footer/Testimonials.jsx";
import Integration from "./Pages/Footer/Integration.jsx";
import AccelerateTechHiring from "./Pages/Footer/AccelerateTechHiring.jsx";
import CandidateExperience from "./Pages/Footer/CandidateExperience.jsx";
import CaterToNicheRoles from "./Pages/Footer/CaterToNicheRoles.jsx";
import StandardizedInterviews from "./Pages/Footer/StandardizedInterviews.jsx";
import DiversityInclusion from "./Pages/Footer/DiversityInclusion.jsx";
import HiringAnalytics from "./Pages/Footer/HiringAnalytics.jsx";
import MockInterviews from "./Pages/Footer/MockInterviews.jsx";
import PairProgramming from "./Pages/Footer/PairProgramming.jsx";
import AskPseudoCode from "./Pages/Footer/AskPseudoCode.jsx";
import ReduceRejectionRatio from "./Pages/Footer/ReduceRejectionRatio.jsx";
import CampusRecruitmentSoftware from "./Pages/Footer/CampusRecruitmentSoftware.jsx";
import CandidatesGuide from "./Pages/Footer/CandidatesGuide.jsx";
import Glossary_Section from "./Pages/Footer/Glossary_Section.jsx";
import LateralHiring from "./Pages/Footer/LateralHiring.jsx";
import CampusHiring from "./Pages/Footer/CampusHiring.jsx";
import FullStack from "./Pages/Footer/FullStack.jsx";
import { Data_Science_Page } from "./Pages/Footer/Data_Science_Page.jsx";
import CandidateLogin from "./Pages/Navbar/CandidateLogin.jsx";
import Candidatesignuppage from "./Pages/Navbar/CandidateSignup.jsx";
import CandidateForgotPassword from "./Pages/Navbar/CandidateForgotPassword.jsx";
import CandidateResetPassword from "./Pages/Navbar/CandidateResetPassword.jsx"; // Import the reset password component
import Temp from "./Pages/Navbar/Temp.jsx";
import Navbar from "./Components/Navbar.jsx";
import CompanyLogin from "./Pages/Navbar/CompanyLogin.jsx";
import ForgetPass from "./Pages/Navbar/ForgetPass.jsx";
import CompanyLoginSignup from "./Pages/Navbar/CompanyLoginSignup.jsx";
import CompanySignup from "./Pages/Navbar/CompanySignup.jsx";
import AddCourse from "./Pages/Admin/AddCourse.jsx";
import CourseDetail from "./Pages/Admin/CourseDetail.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/companyLoginSignup" element={<CompanyLoginSignup/>} />
        <Route path="/CompanySignup" element={<CompanySignup/>} />
        <Route path="/CompanyLogin" element={<CompanyLogin/>} />
        <Route path="/CompanyForgetPassword" element={<ForgetPass/>} />
      

        {/* Footer Routes */}
        <Route path="/company/mission" element={<Mission />} />
        <Route path="/company/contactus" element={<ContactUs />} />
        <Route path="/company/faq" element={<FAQ />} />
        <Route path="/solutions/startup" element={<Startup />} />
        <Route path="/solutions/it-services" element={<ItServices />} />
        <Route path="/solutions/it-staffing" element={<ItStaffing />} />
        <Route path="/solutions/campuses" element={<Campuses />} />
        <Route path="/product/interviewservice" element={<InterviewService />} />
        <Route path="/product/features" element={<Features />} />
        <Route path="/product/profile" element={<Profile_Page />} />
        <Route path="/product/pricing" element={<Pricing />} />
        <Route path="/product/testimonials" element={<Testimonials />} />
        <Route path="/product/integration" element={<Integration />} />
        <Route path="/usecases/acceleratetechhiring" element={<AccelerateTechHiring />} />
        <Route path="/usecases/candidateexperience" element={<CandidateExperience />} />
        <Route path="/usecases/catertonicheroes" element={<CaterToNicheRoles />} />
        <Route path="/usecases/standardizedinterviews" element={<StandardizedInterviews />} />
        <Route path="/usecases/diversityinclusion" element={<DiversityInclusion />} />
        <Route path="/usecases/hiringanalytics" element={<HiringAnalytics />} />
        <Route path="/usecases/mockinterviews" element={<MockInterviews />} />
        <Route path="/usecases/pairprogramming" element={<PairProgramming />} />
        <Route path="/usecases/askpseudocode" element={<AskPseudoCode />} />
        <Route path="/usecases/reduceratio" element={<ReduceRejectionRatio />} />
        <Route path="/usecases/campusrecruitmentsoftware" element={<CampusRecruitmentSoftware />} />
        <Route path="/resources/candidatesguide" element={<CandidatesGuide />} />
        <Route path="/resources/glossary" element={<Glossary_Section />} />
        <Route path="/usecases/lateralhiring" element={<LateralHiring />} />
        <Route path="/usecases/campushiring" element={<CampusHiring />} />
        <Route path="/usecases/fullstack" element={<FullStack />} />
        <Route path="/usecases/datascience" element={<Data_Science_Page />} />

        {/* Navbar Routes */}
        <Route path="/CandidateLogin" element={<CandidateLogin />} />
        <Route path="/CandidateSignup" element={<Candidatesignuppage />} />
        <Route path="/CandidateForgotPassword" element={<CandidateForgotPassword />} />
        <Route path="/CandidateResetPassword/:resetToken" element={<CandidateResetPassword />} /> {/* Route for reset password with dynamic token */}

        <Route path="/temp" element={<Temp />} />

        {/* Admin Panel routes */}
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
