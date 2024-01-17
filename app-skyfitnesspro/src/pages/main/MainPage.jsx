import * as S from "./mainStyle";
import React from "react";
import { Header } from "../../components/header/header";
import { Courses } from "../../components/courses/courses";
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export function MainPage({coursesFirebase}) {
  return (
  
          <S.Main>
            <Header />

            <Courses 
            coursesFirebase={coursesFirebase}/>
          
            <S.ButtonScroll>
              <S.ButtonScrollMain
                //   onClick={scroll}
                onClick={scrollToTop}
                title="Наверх"
                id="ButtonScrollMain"
              >
                Наверх ↑
              </S.ButtonScrollMain>
            </S.ButtonScroll>
          </S.Main>
   
 
  );
}
