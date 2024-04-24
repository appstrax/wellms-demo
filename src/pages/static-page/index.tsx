import React, { useContext, useEffect, useMemo } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import routes from "@/components/Routes/routes";
import usePrevious from "../../hooks/usePrevious";
import Layout from "@/components/_App/Layout";
import styled from "styled-components";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { isMobile } from "react-device-detect";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import routeRoutes from "@/components/Routes/routes";
import ProfileAside from "@/components/Profile/ProfileAside";
import StaticPageSkeleton from "@/components/Skeletons/StaticPage";
import { MOBILE_DEVICE } from "@/config/index";

const StyledStaticPage = styled.section`
  background-color: ${({ theme }) => theme.gray4};
  min-height: calc(100vh - 400px);
  padding-top: ${isMobile ? "0px" : "57px"};
  .user-main-sidebar {
    margin-top: ${isMobile ? "60px" : 0};
  }
  .content {
    margin-top: ${isMobile ? "30px" : 0};
  }
`;

const StaticPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { fetchPage, page, fetchPages, pages } = useContext(EscolaLMSContext);

  const prevSlug = usePrevious(slug);
  const { t } = useTranslation();

  useEffect(() => {
    if (
      slug &&
      !page.loading &&
      ((!page.value && !page.error) ||
        (page.value && page.value?.slug !== slug) ||
        (page.error && !prevSlug))
    ) {
      fetchPages();
      fetchPage(String(slug));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, page]);

  // !page.value && !page.error - when very first load (empty state)
  // page.value && page.value?.slug !== slug - when prev static page was different
  // page.error && !prevSlug - when we return to static-page after error on static page (ex. when prev static page not exist)
  const removeWord = (text: string) => {
    return text.replace("Mobile", "");
  };

  const mainTabs = useMemo(() => {
    let items = pages?.list?.data;

    if (MOBILE_DEVICE === "true") {
      items = pages?.list?.data.filter(
        (item) =>
          item.slug !== "polityka-prywatnosci" && item.slug !== "kontakt"
      );
    } else {
      items = pages?.list?.data.filter((item) => !item.slug.includes("mobile"));
    }
    return (
      items &&
      items // @ts-ignore
        .filter((item) => item.active)
        .map((item) => ({
          key: item.slug,
          title: removeWord(item.title.substring(0, 50)),
          url: item.slug,
        }))
    );
  }, [pages]);

  if (!page.loading && page.error && !page.error.success) {
    return <Redirect to={routes.notFound} />;
  }

  return (
    <Layout metaTitle={page.value?.title}>
      <StyledStaticPage>
        <Container>
          {!isMobile && (
            <Breadcrumbs
              items={[
                <Link to={routeRoutes.home}>{t<string>("Home")}</Link>,
                <Text size="12">{page.value?.title}</Text>,
              ]}
            />
          )}

          <Row>
            <Col lg={3} sm={12} xs={12}>
              <ProfileAside tabs={mainTabs || []} isProfile={false} />
            </Col>
            <Col offset={{ xs: 0, sm: 0, lg: 1 }} sm={12} lg={8}>
              <div className="content">
                {page.loading ||
                (!page.value && !page.error) ||
                (page.value && page.value?.slug !== slug) ||
                (page.error && !prevSlug) ? (
                  <StaticPageSkeleton />
                ) : (
                  <MarkdownRenderer>
                    {page?.value?.content || ""}
                  </MarkdownRenderer>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </StyledStaticPage>
    </Layout>
  );
};

export default StaticPage;
