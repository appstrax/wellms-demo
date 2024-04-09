import React from "react";
import { Row, Col } from "react-grid-system";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { NewCourseCard } from "@escolalms/components/lib/index";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";
import CourseImgPlaceholder from "@/components/Courses/CourseImgPlaceholder";
import { Course } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ProductPrices from "@/components/ProductPrices";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";
import MobileGuard from "@/components/_App/MobileGuard";

const CoursesListWrapper = styled.section`
  margin-bottom: ${isMobile ? "50px" : "75px"};
`;

type Props = {
  courses: Course[];
  loading?: boolean;
};

const CoursesList: React.FC<Props> = ({ courses, loading }) => {
  const history = useHistory();
  const { t } = useTranslation();

  if (courses && !loading && courses.length === 0) {
    return (
      <Row justify="center">
        <Text size="18">{t("NoCourses")}</Text>
      </Row>
    );
  }

  if (loading) {
    return (
      <CoursesListWrapper>
        <Row
          style={{
            gap: "30px 0",
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <CourseCardSkeleton
              key={`index-${index}-skeleton`}
              colProps={{
                xl: 3,
                lg: 4,
                md: 6,
              }}
            />
          ))}
        </Row>
      </CoursesListWrapper>
    );
  }

  return (
    <CoursesListWrapper>
      <Row
        style={{
          gap: "30px 0",
        }}
      >
        {courses?.map((item) => (
          <Col md={6} lg={4} xl={3} key={item.id}>
            <NewCourseCard
              mobile={isMobile}
              id={item.id}
              image={
                <Link to={`/courses/${item.id}`}>
                  {item.image_path ? (
                    <ResponsiveImage
                      path={item.image_path}
                      alt={item.title}
                      srcSizes={[300, 600, 900]}
                    />
                  ) : (
                    <CourseImgPlaceholder />
                  )}
                </Link>
              }
              price={
                // @ts-ignore TODO: missed in sdk
                item.public ? (
                  <MobileGuard>
                    <div className="course-price">{t("FREE")}</div>
                  </MobileGuard>
                ) : (
                  <MobileGuard>
                    <ProductPrices
                      price={item.product?.price}
                      oldPrice={item.product?.price_old}
                      taxRate={item.product?.tax_rate}
                    />
                  </MobileGuard>
                )
              }
              title={
                <Link to={`/courses/${item.id}`}>
                  <Title level={3} as="h3" className="title">
                    {item.title}
                  </Title>
                </Link>
              }
              categories={
                <CategoriesBreadCrumbs
                  categories={item.categories}
                  onCategoryClick={(id) => {
                    history.push(`/courses/?categories[]=${id}`);
                  }}
                />
              }
            />
          </Col>
        ))}
      </Row>
    </CoursesListWrapper>
  );
};

export default CoursesList;
