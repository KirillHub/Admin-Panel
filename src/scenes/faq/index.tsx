import { Box, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
import Header from '../../components/Header/Header'

const FAQ = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <Box m="20px">
         <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question №1
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quae eligendi temporibus
                  exercitationem odit nobis quasi ipsa? Dolore, explicabo! Doloremque fuga soluta sint totam rerum eum
                  nihil quasi adipisci labore?
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question №2
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quae eligendi temporibus
                  exercitationem odit nobis quasi ipsa? Dolore, explicabo! Doloremque fuga soluta sint totam rerum eum
                  nihil quasi adipisci labore?
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question №3
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quae eligendi temporibus
                  exercitationem odit nobis quasi ipsa? Dolore, explicabo! Doloremque fuga soluta sint totam rerum eum
                  nihil quasi adipisci labore?
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question №4
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quae eligendi temporibus
                  exercitationem odit nobis quasi ipsa? Dolore, explicabo! Doloremque fuga soluta sint totam rerum eum
                  nihil quasi adipisci labore?
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question №5
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quae eligendi temporibus
                  exercitationem odit nobis quasi ipsa? Dolore, explicabo! Doloremque fuga soluta sint totam rerum eum
                  nihil quasi adipisci labore?
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question №6
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quae eligendi temporibus
                  exercitationem odit nobis quasi ipsa? Dolore, explicabo! Doloremque fuga soluta sint totam rerum eum
                  nihil quasi adipisci labore?
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}

export default FAQ
