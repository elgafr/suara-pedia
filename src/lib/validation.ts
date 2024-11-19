import { z } from "zod"

const requiredString = z.string().trim().min(1, "required")

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_]{3,16}$/,
        "Username must be 3-16 characters long and can only contain letters, numbers, and underscores"
    ),
    password: requiredString.regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"   
    ),

})

export type SignUpValues = z.infer<typeof signUpSchema>


export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
})

export type LoginValues = z.infer<typeof loginSchema>

export const createPostSchema = z.object({
    content: requiredString,
})