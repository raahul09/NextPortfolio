import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle,SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider style={{marginBottom:"5rem"}}/> 

      <SectionTitle>Projects</SectionTitle>
      <GridContainer style={{alignItems:"flex-start"}}>
       {projects.map(({id,image,title,description,tags,source,visit}) =>
          <BlogCard key={id}>
            <Img src={image}/>
          <TitleContent><HeaderThree title/>{title}<Hr/></TitleContent>
         
           <CardInfo style={{ padding:"0 20px 20px"}}>{description}</CardInfo>
           <div><TitleContent>Stack</TitleContent>
           <TagList>
           {tags.map((tag, i) =>(
             <Tag key={i}>{tag}</Tag>
           ))}
           </TagList>
           </div>
             <UtilityList>
               <ExternalLinks href={visit}>code</ExternalLinks>

               <ExternalLinks href={source}>Source </ExternalLinks>
             </UtilityList>
          </BlogCard>
        )} 
      </GridContainer>
  </Section>
);

export default Projects;