// import React, { useState } from "react";
import * as S from "./ProfileStyle";
import { NavLink } from "react-router-dom";
import { Login } from "../Login/Login";
import { Password } from "../Password/Password";
import { useState } from "react";
import { ChoiceWorkout } from "../choice-workout/ChoiceWorkout";
const Profile = ({ coursesFirebase, workoutsFirebase, selectedWorkoutId,
  setSelectedWorkoutId }) => {
  // Состояние для модальных окон страницы профиля
  const [modalActiveLogin, setModalActiveLogin] = useState(false);
  const [modalActivePassword, setModalActivePassword] = useState(false);
  const [modalActiveTrainings, setModalActiveTrainings] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleSelectCourse = (course) => {
    setSelectedCourseId(course._id);
    setModalActiveTrainings(true);
    console.log(selectedCourseId);
  }

  const selectedIds = ["ab1c3f", "kfpq8e", "q02a6i"];

  const filteredCourses = coursesFirebase.filter((course) =>
    selectedIds.includes(course._id)
  );

  return (
    <S.ContainerProfile>
      <S.Header>
        <S.HeaderLogo>
          <NavLink to="/">
            <S.Img src="/img/logo-SkyFitnessPro.svg" alt="logo" />
          </NavLink>
        </S.HeaderLogo>
       <PersonalData />
      </S.Header>
      <S.Profile>
        <S.Heading>
          <S.ProfileHeading>Мой профиль</S.ProfileHeading>
          <S.ProfileText>Логин: sergey.petrov96</S.ProfileText>
          <Login
            modalActiveLogin={modalActiveLogin}
            setModalActiveLogin={setModalActiveLogin}
          />
          <S.ProfileText>Пароль: 4fkhdj880d</S.ProfileText>
          <Password
            modalActivePassword={modalActivePassword}
            setModalActivePassword={setModalActivePassword}
          />
        </S.Heading>
        <S.ProfileButton>
          <S.Button onClick={() => setModalActiveLogin(true)}>
            Редактировать логин
          </S.Button>
          <S.Button onClick={() => setModalActivePassword(true)}>
            Редактировать пароль
          </S.Button>
        </S.ProfileButton>
      </S.Profile>
      <S.Course>
        <S.ProfileHeading>Мои курсы</S.ProfileHeading>
        <S.CourseBox>
          {filteredCourses.map((course) => (
            <>
              <S.CourseItem key={course._id} courseid={course._id}>
                {/* <NavLink to={`/ChoiceWorkout/${course._id}`}> */}
                <S.ButtonLink courseid={course._id} onClick={() => handleSelectCourse(course) }>
                  Перейти
                </S.ButtonLink>
                {/* </NavLink> */}
              </S.CourseItem>
              <ChoiceWorkout
                modalActiveTrainings={modalActiveTrainings}
                setModalActiveTrainings={setModalActiveTrainings}
                workoutsFirebase={workoutsFirebase}
                coursesFirebase={coursesFirebase}
                selectedCourseId={selectedCourseId}
                selectedWorkoutId={selectedWorkoutId}
            setSelectedWorkoutId={setSelectedWorkoutId}
              />
            </>
          ))}

        </S.CourseBox>
      </S.Course>
    </S.ContainerProfile>
  );
};

export { Profile };


export const PersonalData = () => {
  return (
   <S.HeaderProfile>
    <S.HeaderSvg>
      <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
    </S.HeaderSvg>
    <S.HeaderSelect name="select">
      <S.HeaderSelectOption value={"value1"}>Сергей</S.HeaderSelectOption>
      <S.HeaderSelectOption value={"value2"}>Алексей</S.HeaderSelectOption>
      <S.HeaderSelectOption value={"value3"}>Айрат</S.HeaderSelectOption>
    </S.HeaderSelect>
  </S.HeaderProfile>
  )
}