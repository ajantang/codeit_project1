import { useEffect, useState } from "react";
import { gethabitList } from "../../../../api/api";
import HabitsListBody from "./HabitsListBody";
<<<<<<< HEAD
import "./HabitsList.css";

function HabitsList({ studyId, patchList, pageRender, setPageRender }) {
  const [list, setList] = useState([]);     // 서버에서 받아온 리스트 저장
  const [first, setFirst] = useState(true); // 습관이 없을 시 무한 랜더 방지
=======

function HabitsList({ studyId, patchList, pageRender, setPageRender }) {
  const [list, setList] = useState([]);
>>>>>>> develop

  useEffect(() => {
    // API 호출 함수
    const getList = async () => {
      const data = await gethabitList(studyId);
      setList(data.habits);
    };

<<<<<<< HEAD
    if (first) {
      // 첫 렌더링 시
      getList();
      setFirst(false);
    } else if (pageRender) {
      // 모달창에서 변경사항이 있을때
      getList();
      setPageRender(false);
    }
  }, [studyId, list, pageRender, setPageRender, first]);

  return (
    <div className="habitsList__body flex-col border-box">
      <div className="habitsList__title-button flex-row border-box">
        <div className="habitsList__title font24 extra-bold border-box">
          오늘의 습관
          <p
            className="habitsList__button font14 medium border-box"
            onClick={patchList}
          >
            목록 수정
          </p>
        </div>
      </div>
      <div className="habitsList__iist-text flex-row border-box">
        {!list[0] && (
          <div className="habitsList__noList-text font20 medium border-box">
            아직 습관이 없어요
            <br />
            목록 수정을 눌러 습관을 생성해보세요
          </div>
        )}
        {list[0] && (
          <ol className="habitsList__list-ol flex-col border-box">
            {list.map((habit) => {
              return (
                <li key={habit.id}>
                  <HabitsListBody habit={habit} />
                </li>
              );
            })}
          </ol>
        )}
      </div>
=======
    if (!list[0]) {
      // 첫 렌더링 시
      getList();
    } else if (pageRender) {
      getList();
      setPageRender(false);
    }
  }, [studyId, list, pageRender, setPageRender]);

  return (
    <div>
      <div>
        <p>오늘의 습관</p>
        <p onClick={patchList}>목록 수정</p>
      </div>
      {!list[0] && (
        <div>아직 습관이 없어요 목록 수정을 눌러 습관을 생성해보세요</div>
      )}
      {list[0] && (
        <ol>
          {list.map((habit) => {
            return (
              <li key={habit.id}>
                <HabitsListBody habit={habit} />
              </li>
            );
          })}
        </ol>
      )}
>>>>>>> develop
    </div>
  );
}

export default HabitsList;
