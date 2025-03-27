// pages/404.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="flex h-full items-center justify-center mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <Image src='/assets/404.png' alt='Web illustrations by Storyset' width={300} height={100} />
        {/* <h1 className="text-6xl font-bold text-accent">404</h1> */}
        <p className="text-xl mt-4">Oops! Página não encontrada.</p>
        <Button
          variant='outline'
          size='lg'
          className='mt-6'
        >
          <Link href="/">
            Voltar para a Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
