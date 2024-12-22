import { connectDatabase } from './database/db';
import { app } from './server';

const port = process.env.PORT || 3000;

(async () => {
    try {
        await connectDatabase();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
        process.exit(1);
    }
})();
