import './App.css'

import { useState } from "react";
import './index.css'
import QuestGameAd from './QuestGameAd.tsx'
import AuthScreen from './AuthScreen.tsx'
import QuizMenuScreen from './QuizMenuScreen.tsx';
import Exp1QuizScreen from './Exp1QuizScreen.tsx';
import Exp2QuizScreen from './Exp2QuizScreen.tsx';
const ACCESS_CODE = "AMPER2024";
type Screen = "main" | "auth" | "menu" | "ex1" | "ex2";


function App() {
  const [screen,setScreen] = useState<Screen>("main")

  const changeScreen = (screen:Screen) => {
  console.log("screen changed to",screen)
  setScreen(screen)
}


  if(screen==="main") return <QuestGameAd onTestClicked = {()=>changeScreen("auth")} ></QuestGameAd>
  if(screen==="auth") return <AuthScreen
              correctCode={ACCESS_CODE}
              onAuthenticated={()=>changeScreen("menu")}
              onBack={() => changeScreen("main")}>
              </AuthScreen>
  if(screen==="menu") return <QuizMenuScreen
              onSelectExp1={()=>changeScreen("ex1")}
              onSelectExp2={()=>changeScreen("ex2")}
              onBack={() => setScreen("main")}>
              </QuizMenuScreen>
  if(screen==="ex1") return <Exp1QuizScreen onBack={() => setScreen("menu")}></Exp1QuizScreen>
  if(screen==="ex2") return <Exp2QuizScreen onBack={() => setScreen("menu")}></Exp2QuizScreen>
}

export default App
