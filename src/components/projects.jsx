import { useTheme } from '@emotion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid2 as Grid,
  IconButton,
  Typography,
} from '@mui/material';
import * as React from 'react';

const projects = [
  {
    name: 'Roost',
    summary:
      'Mobile application for real estate agents to provide search tools for their clients',
    desc: '',
    logo: 'roost_icon.png',
    image: 'roost_preview.png',
    technologies: ['React Native', 'Expo', 'FireBase'],
    github: '',
    website: '',
  },
  {
    name: 'BrokerPocket',
    summary:
      'A real estate agent-exclusive marketplace for off-market listings.Mobile application for real estate agents to provide search tools for their clients',
    desc: '',
    logo: 'bp_icon.png',
    image: 'bp_preview.png',
    technologies: [
      'React.js',
      'Node.js',
      'Next.js',
      'AWS',
      'MongoDB',
      'HTML',
      'CSS',
      'Redux',
      'MUI',
      'Google Map/Places API',
    ],
    github: '',
    website: 'https://brokerpocket.com/',
  },
  {
    name: 'React Portfolio Site',
    summary:
      'Basic portfolio webpage built utilizing React, MUI and hosted on GitHub Page',
    desc: '',
    logo: 'cj_logo.png',
    image: '',
    technologies: ['React.js', 'MUI', 'HTML', 'CSS'],
    github: 'https://github.com/Relmy/Portfolio',
    website: 'https://relmy.github.io/Portfolio/',
  },
  {
    name: 'Reach',
    summary:
      'Android and web based application for event discovery and hosting',
    desc: '',
    logo: 'reach_icon.png',
    image: 'reach_preview.png',
    technologies: ['Java', 'HTML', 'CSS', 'MySQL', 'Azure', 'Google Maps API'],
    github: 'https://github.com/ReachCP317/Reach',
    website: '',
  },
];
/**
 * Card displaying project information
 * Card based on MUI Treasury Card-Post: https://mui-treasury.com/?path=/story/card-post--post
 * @param {project} object - containing project info
 *  {name, summary, desc, logo, image, technologies, github, website}
 * @param {color} String - optional param to adjust card accent color
 * @returns {JSX Element}
 */
function ProjectCard({ project, accentColor = null }) {
  const theme = useTheme();
  const color = accentColor ?? `${theme.palette.purple.main}`;
  return (
    <Card
      sx={{
        maxWidth: 500,
        height: '100%',
        margin: 'auto',
        transition: '0.3s',
        display: 'flex',
        flexDirection: 'column',
        background:
          'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
        backgroundSize: '200% 200%',
      }}
    >
      <CardMedia
        image={`projects/${project.image}`}
        sx={{
          width: '100%',
          paddingBottom: '56.25%',
          clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          backgroundPosition: 'top',
        }}
      />
      <Avatar
        src={`projects/${project.logo}`}
        sx={{
          width: 50,
          height: 50,
          backgroundColor: '#fff',
          border: `2px solid ${color}`,
          boxShadow: `2px 3px 10px -1px ${color}`,
          margin: '-48px 32px 0 auto',
          '& > img': {
            margin: 0,
          },
        }}
      />
      <CardContent sx={{ p: 3, flexGrow: 2 }}>
        <Box>
          <Typography variant="h1">{project.name}</Typography>
          {project.technologies.map((tech) => {
            return (
              <>
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  sx={{
                    border: `1px solid rgb(106, 102, 217, 0.2)`,
                    boxShadow: `inset 0px 0px 10px -2px ${color}`,
                    mr: 1,
                    mb: 0.5,
                  }}
                />
              </>
            );
          })}
          <br />
          <Typography variant="subtitle">
            <b>{project.summary}</b>{' '}
          </Typography>
          <br />
          <Typography variant="body">{project.description} </Typography>
        </Box>
      </CardContent>
      <Box px={2} pb={2} mt={1}>
        {project?.github && (
          <IconButton>
            <GitHubIcon />
          </IconButton>
        )}
        {project?.website && (
          <IconButton>
            <LaunchIcon />
          </IconButton>
        )}
      </Box>
    </Card>
  );
}

/**
 * Main Projects Component, displays current and past projects
 * @returns {JSX Element}
 */
export default function Projects() {
  return (
    <section id="Projects">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          m: 3,
          gap: 2,
        }}
      >
        <Typography variant="h1">Projects</Typography>
        <Typography variant="subtitle">
          Here you will find a selection of my current and past work/projects
        </Typography>
        <Grid
          id="projects_gird"
          container
          spacing={2}
          sx={{
            justifyContent: 'center',
            maxWidth: { xs: '100vw', md: '80vw' },
          }}
        >
          {projects.map((project) => {
            return (
              <Grid key={project.name} size={{ xs: 12, md: 6, lg: 'auto' }}>
                <ProjectCard project={project} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
}
