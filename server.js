import app from './index.js';
import config from './config/index.js';

const { PORT } = config || 3000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
