'use client';

// import { redirect, useRouter } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Login() { 
  // redirect('/i/flow/login');
  const router = useRouter();
  router.push('/i/flow/login')
  return null;
}