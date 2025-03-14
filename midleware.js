
// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function middleware(request) {

//   const token = request.cookies.get('jwt');
//   console.log(token, "middleware")

//   if (!token) {
//     return NextResponse.redirect(new URL('/user/login', request.url));
//   }

//   try {
//     // Verify the token with the backend using Axios
//     const res = await axios.post('http://localhost:3001/verify/token', {}, {
//       headers: {
//         'Authorization': `Bearer ${token.value}`,
//       },
//     });

//     // If the backend returns a successful response, allow access to the route
//     if (res.status === 200) {
//       return NextResponse.next();
//     } else {
//       // If token verification fails, redirect to login
//       return NextResponse.redirect(new URL('/user/login', request.url));
//     }
//   } catch (error) {
//     // In case of any error (e.g., token verification failed)
//     console.error('Token verification error:', error);
//     return NextResponse.redirect(new URL('/user/login', request.url));
//   }
// }

// export const config = {
//   matcher: [
//     '/user/dashboard/:path*', // Protect /dashboard and its sub-routes
//     "/admin/dashboard/:path*",
//     '/user/dashboard/teams', // Protect /dashboard/teams
//     '/user/dashboard/teams/create', // Protect /dashboard/teams/create
//     '/user/dashboard/teams/:id', // Protect /dashboard/teams/[id] (dynamic route)
//   ],
// };
