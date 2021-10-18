import React, { useContext } from 'react';
import PageBanner from '../components/Common/PageBanner';
import LoginForm from '../components/Authentication/LoginForm';
import RegisterForm from '../components/Authentication/RegisterForm';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialButtons from '../components/Authentication/SocialButtons';
import Layout from '../components/_App/Layout';

const Authentication = () => {
  const { user } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();
  if (!user.loading && user.value) {
    history.push('/');
  }

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Authentication')}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t('Authentication')}
        />

        <div className="profile-authentication-area ptb-100">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-12 col-md-12">
                <SocialButtons />
              </div> */}
              <div className="col-lg-6 col-md-12">
                <LoginForm />
              </div>

              <div className="col-lg-6 col-md-12">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Authentication;
