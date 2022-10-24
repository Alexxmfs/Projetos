import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check} from 'phosphor-react'; 

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
        <CheckboxPrimitive.Indicator asChild>
            <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>   
  );
}

// Radix-ui biblioteca
// py = padding vertical
// tailwind utiliza o tamanho como ram, ou seja e multiplos de 4 que seria 16px no <Comp>