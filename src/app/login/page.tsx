"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig"; // Firebase konfigürasyonunuzu import edin
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      router.push("/");

      if (!res) {
        alert("Login failed");
        router.push("/login");
        return;
      }
    } catch (error) {
      console.error(error);
      setError("Login failed, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center text-white">Giriş Yap</h2>
        <div>
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email giriniz"
            required
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-white">
            Şifre
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre giriniz"
            required
            className="mt-2"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full">
          Giriş Yap
        </Button>
      </Form>
    </div>
  );
}
