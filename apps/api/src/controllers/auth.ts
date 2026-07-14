import { Request, Response } from 'express';
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//export const register = async (...) => { ... }

export const register = async (req: Request, res: Response) => {
    try {
       const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
              message: "All fields are required",
            });
          }

      const existingUser = await prisma.user.findUnique({
          where: { email },
            });
       if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
          }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
        data: {
        name,
        email,
        password: hashedPassword,
        },
        });
    const token = jwt.sign(
      {id: user.id,email: user.email,},
      process.env.JWT_SECRET!,
      {
      expiresIn: "1d",
      }
      );
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

//export const login = async (...) => { ... }

//export const googleLogin = (...) => { ... }

//export const googleCallback = (...) => { ... }