import * as z from 'zod';

export const registerSchema = z.object({
    fullName: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    gender: z.enum(['MAN', 'WOMAN', 'OTHER']),
    dateOfBirth: z.string().refine((date) => {
        const parsedDate = new Date(date);
        const now = new Date();
        const age = now.getFullYear() - parsedDate.getFullYear();
        return age >= 13; // Minimum age requirement
    }, { message: 'You must be at least 13 years old to register' }),
});

export type RegisterData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type LoginData = z.infer<typeof loginSchema>;