import { Container, Grid, Paper } from '@mui/material';
import TableUbi from '@/app/components/tableUbi';
import MapView from './MapView';

const UbiPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            {/* TableUbi Component */}
            <TableUbi />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            {/* MapView Component */}
            <MapView />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UbiPage;

