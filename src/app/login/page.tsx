"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await signInWithEmailAndPassword(data.email, data.password);
      sessionStorage.setItem("user", "true");
      if (!res) {
        alert("Login failed");
        router.push("/login");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setError("Login failed, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center text-white">Giriş Yap</h2>
        <div>
          <Label htmlFor="email" className="text-white">
            mail
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: "mail is required" })}
            className="mt-2"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="password" className="text-white">
            passwd
          </Label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: "passwd is required" })}
            className="mt-2"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full">
          login
        </Button>
      </form>
    </div>
  );
}
