import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne || '안녕하세요!'}</p>
                <p className="about-wrapper__info-text">
                  {paragraphOne || '더 나은 코드를 작성하기 위해 끊임없이 고민하는'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphOne || '프론트엔드 개발자 김은진이라고 합니다.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo || '저는 어떻게 하면 편한 서비스를 제공할 수 있을까 '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphOne || '하는 고민 들을 즐겨 하는 편이에요 :)'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || '종종 번쩍이는 아이디어로 사람들에게 칭찬받는 것을 좋아하죠. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || '또 꾸준한 자기 계발로 오래 남는 개발자가 되는 것이 꿈이에요.'}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
