import React, { useState } from "react";
import * as S from "./course.styled";
import * as Styled from "../workout-video-page/workout-video-page.styled";
import { NavLink, useParams } from "react-router-dom";
import { CountedProgress } from "../progress/progress-counted";

export function Course({ coursesFirebase }) {
  const { courseId } = useParams();

  const selectedCourse = coursesFirebase.find(
    (course) => course._id === courseId
  );

  const selectedCourseBlockOne = selectedCourse.directions.slice(0, 3);
  const selectedCourseBlockTwo = selectedCourse.directions.slice(3);
  const [stub, setStub] = useState(false);

  const showStub = () => {
    setStub(true);
    setTimeout(() => {
      setStub(false);
    }, 2000);
  };
  // console.log("stub", stub);

  return (
    <>
      <NavLink to="/">
        <Styled.LogoSkypro>
          <Styled.LogoImg src="/img/logoSkypro.png" alt="logo" />
        </Styled.LogoSkypro>
      </NavLink>
      <S.NameCourse>
        <S.MainNameCourse>{selectedCourse.nameRU}</S.MainNameCourse>
      </S.NameCourse>
      <S.ReasonCourse>Подойдет для вас, если:</S.ReasonCourse>
      <S.ReasonsCourses>
        {selectedCourse.fitting.map((fitt, index) => {
          return (
            <S.Reasons key={"fitt" + index}>
              <S.Point>
                <S.PointText>{index + 1}</S.PointText>
              </S.Point>
              <S.Type>{fitt}</S.Type>
            </S.Reasons>
          );
        })}
      </S.ReasonsCourses>
      <S.DirectionsCourse>Направления:</S.DirectionsCourse>
      <S.DirectionsCourses>
        <S.TypesList>
          {selectedCourseBlockOne.map((dir, index) => {
            return (
              <S.TypeElement key={"direction1" + index}>{dir}</S.TypeElement>
            );
          })}
        </S.TypesList>
        <S.TypesList>
          {selectedCourseBlockTwo &&
            selectedCourseBlockTwo.map((dir, index) => {
              return (
                <S.TypeElement key={"direction2" + index}>{dir}</S.TypeElement>
              );
            })}
        </S.TypesList>
      </S.DirectionsCourses>
      <S.Description>
        <S.DescriptionText>{selectedCourse.description}</S.DescriptionText>
      </S.Description>
      <S.Application>
        <S.ApplicationText>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.ApplicationText>
        <S.TrainingButton>
          <S.TrainingText onClick={() => showStub()}>
            Записаться на тренировку
          </S.TrainingText>
        </S.TrainingButton>
        <S.ApplicationImg>
          <img src="/img//phone.svg" alt="phone" />
        </S.ApplicationImg>
      </S.Application>
      {stub ? <CountedProgress title="Вы записаны на тренировку!" /> : null}
    </>
  );
}
