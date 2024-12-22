import { z } from 'zod';

export const personValidator = z.object({
    recipient: z
        .string()
        .regex(/^[a-zA-Z\s]+$/, 'The recipient must contain only letters.')
        .min(3, 'The recipient must have at least 3 characters.'),
    sender: z.string().refine((value) => value === 'Artur' || value === 'Eduarda', {
        message: 'The sender must be either "Artur" or "Eduarda".',
    }),
    websiteLink: z.string().url('The website link must be a valid URL.'),
    code: z
        .string()
        .regex(
            /^[A-Z0-9_]+$/,
            'The code must contain only uppercase letters, numbers, and underscores (_).'
        )
        .min(5, 'The code must have at least 5 characters.'),
});

export const validatePersonData = (personData: any) => {
    const result = personValidator.safeParse(personData);

    if (!result.success) {
        const errors = result.error.errors.map((error) => error.message).join(', ');

        throw new Error(errors);
    }
};
