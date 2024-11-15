import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import React from 'react';


const SidebarWidget = () => {
  const theme = useTheme();
  // const icons = {
  //   home: { src: 'SidebarIcons/home.svg', alt: 'Home', active: false },
  //   about: { src: 'SidebarIcons/about.svg', alt: 'About', active: true },
  //   experience: { src: 'SidebarIcons/experience.svg', alt: 'Experience', active: false },
  //   specialization: { src: 'SidebarIcons/specialization.svg', alt: 'Specialization', active: false },
  //   projects: { src: 'SidebarIcons/projects.svg', alt: 'Projects', active: false },
  //   skills: { src: 'SidebarIcons/skills.svg', alt: 'Skills', active: false },
  //   contact: { src: 'SidebarIcons/getintouch.svg', alt: 'Get in Touch', active: false },
  // };

  return (
    <Grid
      container
      sx={{
        borderRadius: '30px',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '60px',
      }}
      gap={2}
    >
      <Grid>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </Grid>

      <Grid>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </Grid>



    </Grid>
  );
};

export default SidebarWidget;