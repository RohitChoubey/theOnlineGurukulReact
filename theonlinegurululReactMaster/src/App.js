import React from 'react';
import './css/App.css';
import {Routes,  Route, Navigate } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home/Home';
import Error404 from './components/error404';
import StudentForm from './components/Forms/StudentForm';
import CourseFees from './views/course/courseFees';
import CrashCourse from './views/course/crashCourse';
import Ddays from './views/D_days/D_days';
import RegisterType from './components/Forms/RegisterType';
import Blog from './views/Web/Blog';

import StudentIndex from './views/student/StudentIndex';
import TeacherIndex from './views/teacher/TeacherIndex';
// import axios from 'axios';

// import {AuthContext} from './context/context';
import PrivacyPolicy from './views/Web/PrivacyPolicy';
import TermAndConditions from './views/Web/TermAndConditions';
import Faqs from './views/Web/Faqs';
import Howitworks from './views/Web/Howitworks';
import OurTeachers from './views/Web/OurTeachers';
import ContactUs from './views/Web/ContactUs';
import OurClasses from './views/Web/OurClasses';
import DemoClasses from './views/Web/demoClasses';
import Syllabus from './views/Web/Syllabus';
import DemoRequest from './components/Forms/DemoRequest';
import Testimonials from './views/Web/testimonial';
import Gallery from './views/Web/Gallery';
import Coding from './views/Web/Coding';
import TeacherForm from './components/Forms/TeacherForm';
import Previousyearquestionpaper from './views/Web/Previous_year_question_paper';
import Blodetails from './views/Web/Blog_details';
import SignIn from './views/Web/SignIn';
import CourseFeesStructure from './views/course/courseFeesStructure';
import ProgrammingCourses from './views/Web/ProgrammingCourses';
import Dhashboard from './components/admin/Dhashboard';



const App = (props) => {
  const spliturl= (window.location.href).split("/");
  const checkauth = spliturl[3];
  // console.log(checkauth)
  // const initialLoginState = {
  //   isLoading: true,
  //   userId: null,
  //   userToken: null,
  //   userRole:null
  // };

  
  // const loginReducer = (prevState, action) => { 
  //   console.log(action)
  //   switch( action.type ) {
  //     case 'RETRIEVE_TOKEN': 
  //       return {
  //         ...prevState,
  //         userToken: action.userToken,
  //         isLoading: false,
  //       };
  //     case 'LOGIN': 
  //       return {
  //         ...prevState,
  //         userId: action.userId,
  //         userToken: action.userToken,
  //         userRole:action.userRole,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT': 
  //       return {
  //         ...prevState,
  //         userId: null,
  //         userToken: null,
  //         userRole:null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER': 
  //       return {
  //         ...prevState,
  //         userId: action.userId,
  //         userToken: action.userToken,
  //         userRole:action.userRole,
  //         isLoading: false,
  //       };
  //   }
  // };
 
  //  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  // const authContext = React.useMemo(() => ({
    
  //   signIn: async(foundUser) => {
  //   console.log(foundUser)
  //     try {
  //       localStorage.setItem('userToken', JSON.stringify(foundUser));
        
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'LOGIN',userId:foundUser.userId,userToken:foundUser.userToken,userRole:foundUser.userRole });
      
  //   },
  //   signOut: async() => {
  //     try {
  //       localStorage.removeItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'LOGOUT' });
  //   },
  //   signUp: () => {
  //   },
  //   getusertoken: () => {
  //    console.warn('function call')
  //  },
  // }), []);

  // useEffect(() => {
  //   setTimeout(async() => {
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = localStorage.getItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'RETRIEVE_TOKEN', userToken: userToken });
  //   }, 1000);
  // }, []);

  return (
    <>
      <div className="App">
            {(checkauth!=='Teacher' )?
            <div className='container-full-home'>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Home />} >  </Route>
                  <Route exact path="/index" element={<Navigate replace to="/Home" />}  >  </Route>
                  <Route exact path="/home" element={<Home />} >  </Route>
                  <Route exact path="/register-type" element={ <RegisterType/> }>  </Route>
                  <Route exact path="/login" element={ <SignIn/>  }>  </Route>
                  <Route exact path="/student-register" element={ <StudentForm/> }>  </Route>
                  <Route exact path="/crash-course" element={ <CrashCourse/>  }>  </Route>
                  <Route exact path="/courses" element={ <CourseFees/> }>  </Route>
                  <Route exact path="/courses-fees" element={ <CourseFees/> }>  </Route>
                  <Route exact path="/D-days" element={ <Ddays/> } >   </Route>
                  <Route exact path="/blog" element={ <Blog/> } >   </Route>
                  <Route exact path="/privacy-policy" element={ <PrivacyPolicy /> } >   </Route>
                  <Route exact path="/term-and-conditions" element={ <TermAndConditions /> } >   </Route>
                  <Route exact path="/Faq" element={ <Faqs /> } >   </Route>
                  <Route exact path="/how-it-works" element={ <Howitworks /> } >   </Route>
                  <Route exact path="/our-teachers" element={ <OurTeachers /> } >   </Route>
                  <Route exact path="/contact-us" element={ <ContactUs /> } >   </Route>
                  <Route exact path="/our-classes" element={ <OurClasses /> } >   </Route>
                  <Route exact path="/Demo-Classes" element={ <DemoClasses /> } >   </Route>
                  <Route exact path="/syllabus" element={ <Syllabus /> } >   </Route>
                  <Route exact path="/demo-Request" element={ <DemoRequest /> } >   </Route>
                  <Route exact path="/testimonial" element={ <Testimonials /> } >   </Route>
                  <Route exact path="/gallery" element={ <Gallery /> } >   </Route>
                  <Route exact path="/coding" element={ <Coding /> } >   </Route>
                  <Route exact path="/previous-year-question-paper" element={ <Previousyearquestionpaper /> } >   </Route>
                  <Route exact path="/blog-details" element={ <Blodetails /> } >   </Route>
                  <Route exact path="/teacher-register" element={ <TeacherForm /> } >   </Route>
                  <Route exact path="/courses-fees-structure" element={ <CourseFeesStructure /> } >   </Route>
                  <Route exact path="/Programming-Courses" element={ <ProgrammingCourses /> } >   </Route>
                  {/* <Route exact path="/gallery" element={ <Gallery /> } >   </Route> */}
                  <Route exact path="/CBSE-question-paper" element={ <Previousyearquestionpaper /> } >   </Route>
                  <Route exact path="/admin" element={ <Dhashboard/> } >   </Route>
                  <Route  path="*" element={<Error404 />} ></Route>
                  
              </Routes>
              <Footer />
            </div>
                :
                <Routes>
                  <>
                  <Route exact path="/Student/dashboard" element={ <StudentIndex /> } >   </Route>
                  <Route exact path="/Teacher/dashboard" element={ <TeacherIndex /> } >   </Route>
                  </>
                </Routes>
                }
      </div>
     </>
  );
}

export default App;














// <Routes>
//       <Route path="/" element={<Layout />}>
//         {/* public routes */}
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="linkpage" element={<LinkPage />} />
//         <Route path="unauthorized" element={<Unauthorized />} />

//         {/* we want to protect these routes */}

//         <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
//           <Route path="/" element={<Home />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
//           <Route path="editor" element={<Editor />} />
//         </Route>


//         <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
//           <Route path="admin" element={<Admin />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.User]} />}>
//           <Route path="lounge" element={<Lounge />} />
//         </Route>

//         {/* catch all */}
//         <Route path="*" element={<Missing />} />
//       </Route>
//     </Routes>