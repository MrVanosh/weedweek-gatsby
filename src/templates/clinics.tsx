import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Container from 'components/Container';
import SEO from 'components/SEO';
import Section from 'components/Section';
// import { Post as IPost } from "types/types";
import Posts from 'components/Posts';

const WideBanner = styled.div`
  width: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  border-radius: 10px;
  margin-top: 2rem;
`;

const HowToContainer = styled.div`
  display: flex;
  margin: 2rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  & div {
    display: none !important;
  }
  ${({ theme }) => theme.mq.l} {
    margin: 2rem 0;
    padding: 5rem;
    & div {
      display: inline-block !important;
    }
  }
`;

const HowTo = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  flex: 1;
  ${({ theme }) => theme.mq.l} {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(64px);
  }
`;

const Clinics = styled.div`
  display: flex;
  grid-gap: 20px;
  overflow-x: auto;
  ${({ theme }) => theme.mq.m} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 20px;
    overflow-x: none;
  }
  ${({ theme }) => theme.mq.l} {
    grid-template-columns: repeat(4, 1fr);
    overflow-x: none;
  }
`;

const ClinicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.mq.l} {
    grid-template-columns: ${({ secondary }: { secondary?: boolean }) =>
      secondary ? '1fr' : '1fr 4fr'};
  }
  gap: 2rem;
  margin: 1rem 0;
  min-width: 300px;
`;

const ClinicImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  min-width: 150px;
  & img {
    border-radius: 10px;
  }
  background-color: white;
`;

const ClinicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ClinicName = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 125%;
`;

const ClinicText = styled.p``;

const ClinicButton = styled.a`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.secondary};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mq.l} {
    font-size: 125%;
  }
`;

const CheckAvailability = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  height: 200px;
  margin-bottom: 10rem;
  background-image: url('https://images.pexels.com/photos/606506/pexels-photo-606506.jpeg?cs=srgb&dl=pexels-michael-fischer-606506.jpg&fm=jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  ${({ theme }) => theme.mq.l} {
    margin-left: 0;
    margin-right: 0;
  }
  & h2 {
    font-size: 200%;
    font-weight: bold;
    color: black;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  }
  &:hover {
    cursor: pointer;
  }
`;

const ClinicsButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ClinicsWide = styled.div`
  display: flex;
  grid-gap: 20px;
  overflow-x: auto;
  ${({ list }): { list?: boolean } =>
    list &&
    `
      display: flex;
      flex-direction: column;
    `};
  ${({ theme }) => theme.mq.m} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 20px;
    overflow-x: none;
  }
  ${({ theme }) => theme.mq.l} {
    grid-template-columns: repeat(3, 1fr);
    overflow-x: none;
  }
`;

const RecommendedClinics = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 10px 5px;
`;

const Recommended = styled.h3`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 22px;
  margin: 0;
`;

const OurClinic = styled.div`
  margin: 0 auto;
  ${({ theme }) => theme.mq.l} {
    width: 50%;
  }
`;

const ClinicsPage = ({ data }) => {
  const clinics = data.allWpClinic.edges;
  const posts = data.allWpPost.edges;
  let postIndex = 0;

  const firstClinic = clinics[0].node;
  return (
    <Container full>
      <SEO
        title="Kliniki Konopne - WeedWeek | Portal Konopny"
        desc="Najbardziej polecane Kliniki Konopne w Polsce"
        // keywords={
        //   post.seo.metaKeywords ||
        //   post.tags.nodes.map(({ name }) => name).join(', ')
        // }
        // ogImage={post.featuredImage.node.sourceUrl}
        ogTitle="Kliniki Konopne - WeedWeek"
        ogDesc="Najbardziej polecane Kliniki Konopne w polsce"
        // ogType={post.seo.opengraphType}
        ogUrl={`https://weedweek.pl/kliniki-konopne`}
      />
      <Container top>
        {/* <WideBanner>Banner</WideBanner> */}
        <OurClinic>
          {firstClinic.featuredImage && (
            <ClinicImage
              image={getImage(
                firstClinic.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              )}
              alt={firstClinic.title}
            />
          )}
        </OurClinic>
        <Link to="/jak-uzyskac-recepte-na-medyczna-marihuane-praktyczne-porady">
          <HowToContainer>
            <HowTo>Jak uzyskać receptę?</HowTo>
            <StaticImage
              src="../assets/images/natural.png"
              alt="Natural"
              width={128}
              height={128}
            />
          </HowToContainer>
        </Link>
      </Container>
      <Section full>
        <RecommendedClinics>
          <Recommended>Wyróżnione kliniki</Recommended>
          <ClinicsWide list>
            {clinics.slice(1, 4).map((node, i) => {
              const clinic = node.node;
              return (
                <ClinicWrapper key={i} secondary>
                  {clinic.featuredImage && (
                    <ClinicImage
                      image={getImage(
                        clinic.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      )}
                      alt={clinic.title}
                      style={{ height: 200 }}
                    />
                  )}
                  <ClinicInfo>
                    <ClinicName>{clinic.title}</ClinicName>
                    <div>
                      <ClinicText
                        dangerouslySetInnerHTML={{
                          __html:
                            clinic.details.adres &&
                            clinic.details.adres?.replace(',', ',<br/>'),
                        }}
                      />
                      <ClinicsButtons>
                        <ClinicButton href={clinic.details.link}>
                          Umów wizytę
                        </ClinicButton>
                        <ClinicButton href={clinic.details.link}>
                          ✅ E-Wizyta
                        </ClinicButton>
                      </ClinicsButtons>
                    </div>
                  </ClinicInfo>
                </ClinicWrapper>
              );
            })}
          </ClinicsWide>
        </RecommendedClinics>
      </Section>
      <div style={{ marginTop: 40, marginLeft: 10 }}>
        <Posts posts={posts} />
      </div>
      <Section full>
        <ClinicsWide>
          {clinics.slice(5, 999).map((node, i) => {
            const clinic = node.node;
            return (
              <React.Fragment key={i}>
                <ClinicWrapper>
                  {clinic.featuredImage && (
                    <ClinicImage
                      image={getImage(
                        clinic.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      )}
                      alt={clinic.title}
                      style={{ height: 150 }}
                    />
                  )}
                  <ClinicInfo>
                    <ClinicName>{clinic.title}</ClinicName>
                    <div>
                      <ClinicText
                        dangerouslySetInnerHTML={{
                          __html:
                            clinic.details.adres &&
                            clinic.details.adres?.replace(',', ',<br/>'),
                        }}
                      />
                      <ClinicButton href={clinic.details.link}>
                        Umów wizytę
                      </ClinicButton>
                    </div>
                  </ClinicInfo>
                </ClinicWrapper>
              </React.Fragment>
            );
          })}
        </ClinicsWide>
      </Section>
      <div style={{ marginTop: 20, marginLeft: 10, marginBottom: 10 }}>
        <Posts posts={posts.slice(0).reverse()} />
      </div>
      <Container>
        <a
          href="https://www.gdziepolek.pl/wyszukiwanie?q=Cannabis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CheckAvailability>
            <h2>Sprawdź dostępność medycznej marihuany!</h2>
          </CheckAvailability>
        </a>
      </Container>
    </Container>
  );
};

export const pageQuery = graphql`
  query {
    allWpClinic {
      edges {
        node {
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          title
          slug
          details {
            adres
            link
          }
        }
      }
    }
    allWpPost(
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "medyczna-marihuana" } } }
        }
      }
    ) {
      edges {
        node {
          author {
            node {
              firstName
              lastName
            }
          }
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          slug
          excerpt
          date
        }
      }
    }
  }
`;

export default ClinicsPage;