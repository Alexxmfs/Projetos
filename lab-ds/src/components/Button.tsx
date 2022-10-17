import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

  return (
    // npm i clsx
    <Comp
        className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black', 
        )}
    >
        {children}
    </Comp>
  );
}

// Radix-ui biblioteca
// py = padding vertical
// tailwind utiliza o tamanho como ram, ou seja e multiplos de 4 que seria 16px no <Comp>