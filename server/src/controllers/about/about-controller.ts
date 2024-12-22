import { Request, Response } from 'express';

export const aboutController = async (req: Request, res: Response) => {
    try {
        const projectTitle = 'Christmas 24';
        const authors = 'Artur Bomtempo e Eduarda Vieira';
        const description =
            'This API serves as the bridge between the Chatbot and the Christmas website, enabling seamless integration for delivering personalized Christmas messages from the Front-End to the user.';

        res.status(200).json({
            projectTitle: projectTitle,
            authors: authors,
            description: description,
        });
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message,
        });
    }
};
