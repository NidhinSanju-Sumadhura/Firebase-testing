import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      display="flex"
      flexDirection="row"
      component={Stack}
      spacing={2}
      direction="row"
      sx={{
        width: { xs: '50%', sm: 300, md: '100%', lg: 260 }, // Responsive widths
        px: 1,
        py: 2,

        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <Stack marginLeft="auto" spacing={0.5}>
        {icon && <Box sx={{ width: 60, height: 60 }}>{icon}</Box>}
      </Stack>

      <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
        {title}
        <br />
        <Typography variant="body2">{fShortenNumber(total)}</Typography>
      </Typography>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
