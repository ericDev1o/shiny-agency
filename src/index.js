import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./utils/style/index.css";
import reportWebVitals from "./reportWebVitals.js";
import { SurveyProvider, ThemeProvider } from "./utils/context/index.jsx";
import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from "./components/Header";
import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";
import Error from "./components/Error";
import Results from "./pages/Results/";
import Freelances from "./pages/Freelances/";
import Footer from "./components/Footer";
import GlobalStyle from "./utils/style/GlobalStyle.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle isDarkMode={true} />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/survey/:questionNumber"
                            element={<Survey />}
                        />
                        <Route path="client" element={<ClientForm />} />
                        <Route path="freelance" element={<FreelanceForm />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/freelances" element={<Freelances />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
