import ProfileLayout from "@/components/Profile/ProfileLayout";
import { MyProfileForm } from "@escolalms/components/lib/components/organisms/MyProfileForm/MyProfileForm";
import styled from "styled-components";
import { t } from "i18next";

const StyledWrapper = styled.div`
  margin-top: 20px;
`;

const MyData = () => {
  return (
    <ProfileLayout title={t("MyProfilePage.EditData")}>
      <StyledWrapper>
        <MyProfileForm />
      </StyledWrapper>
    </ProfileLayout>
  );
};

export default MyData;
