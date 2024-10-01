import React from 'react'

import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Card, 
    CardContent, 
    CardMedia, 
    Container, 
    Grid, 
    Box 
  } from '@mui/material';
  import { 
    School as SchoolIcon, 
    MenuBook as CurriculumIcon, 
    Groups as CommunityIcon, 
    EmojiEvents as AchievementsIcon 
  } from '@mui/icons-material';

export default function Home() {
    const features = [
        { icon: <CurriculumIcon />, title: "Innovative Curriculum", description: "Blending traditional academics with cutting-edge STEAM programs" },
        { icon: <CommunityIcon />, title: "Supportive Community", description: "Small class sizes for personalized attention and growth" },
        { icon: <AchievementsIcon />, title: "Student Achievements", description: "Consistently high academic and extracurricular performance" },
      ];
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <SchoolIcon sx={{ mr: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Horizon Academy
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Programs</Button>
              <Button color="inherit">Contact</Button>
            </Toolbar>
          </AppBar>
    
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Welcome to Horizon Academy
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Empowering future leaders through innovative education and personalized learning experiences.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" size="large">
                  Apply Now
                </Button>
              </Box>
            </Container>
          </Box>
    
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography gutterBottom variant="h5" component="h2" align="center">
                        {feature.title}
                      </Typography>
                      <Typography align="center">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
    
          <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" align="center" color="text.primary" gutterBottom>
              Our Programs
            </Typography>
            <Grid container spacing={4}>
              {['STEAM', 'Arts & Humanities', 'Athletics'].map((program) => (
                <Grid item key={program} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`/api/placeholder/400/300?text=${program}`}
                      alt={program}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {program}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Discover our cutting-edge {program} program, designed to challenge and inspire students.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
    
          <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
              <Typography variant="body2" color="text.secondary" align="center">
                © {new Date().getFullYear()} Horizon Academy. All rights reserved.
              </Typography>
            </Container>
          </Box>
        </Box>
      );
    };
    
