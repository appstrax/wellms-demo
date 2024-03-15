import AIChat from "@/components/Chat";
import { useCoursePanel } from "@/components/Courses/Course/Context";
import { CoursePanelLayoutContent } from "@/components/Courses/Course/CoursePanelLayout/Content";
import { CoursePanelFinishPage } from "@/components/Courses/Course/CoursePanelLayout/FinishPage";
import { CoursePanelHeader } from "@/components/Courses/Course/CoursePanelLayout/Header";
import { LayoutWrapper } from "@/components/Courses/Course/CoursePanelLayout/styles";

export const CoursePanelLayout = () => {
  const { showFinish, currentLesson } = useCoursePanel();

  return (
    <LayoutWrapper>
      <CoursePanelHeader />
      {!showFinish && <CoursePanelLayoutContent />}
      {showFinish && <CoursePanelFinishPage />}
      {currentLesson?.id && <AIChat lessonID={currentLesson?.id} />}
    </LayoutWrapper>
  );
};
