import app from './src/app';

const port = process.env.PORT || 8000;
import * as winston from 'winston';

app.listen(port, () => {
  winston.info(`Server running at http://localhost:${port}`);
});
