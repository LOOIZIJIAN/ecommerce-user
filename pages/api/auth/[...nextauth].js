import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/User";
import bcrypt from 'bcryptjs';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  
  providers: [ 
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

    CredentialsProvider({
      name: "credentials",
        credentials: {
            email: { label: "Email", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
            username: { label: "Username", type: "text", placeholder: "John Smith" },
        },

        async authorize(credentials) {
          try {
            console.log('Credentials:', credentials);
            console.log(credentials.password);
        
            if (!credentials.email || !credentials.password) {
              throw new Error('Please enter an email and password');
            }
        
            const user = await User.findOne({ email: { $regex: new RegExp('^' + credentials.email + '$', 'i') } });
        
            console.log('User from database:', user);
            console.log(user.hashedPassword);
        
            if (!user || !user?.hashedPassword) {
              throw new Error('No user found');
            }
        
            const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

            // console.log('Password match:', passwordMatch);
        
            if (!passwordMatch) {
              throw new Error('Incorrect password');
            }
        
            return Promise.resolve(user);
          } catch (error) {
            console.error('Authorization error:', error);
            throw new Error(`Authentication failed: ${error.message}`);
          }
        },
        
    }),

  ],

  secret: process.env.SECRET,
  session: {
      strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",

  callbacks: {

    async jwt({token, user, session}) {
      // console.log('JWT Token:', token);
      if(user) {
        return{
          ...token,
          id: user.id,
          name: user.username,
        };
      }
      return token;
    },

    async session({ session, token, user }) {
      // console.log('Session:', session);
      return{
        ...session,
        id: token.id,
      }
    },

  },

};

const handler = NextAuth(authOptions);

export default handler;