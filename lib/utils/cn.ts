import { extendTailwindMerge } from 'tailwind-merge'
import { ClassValue, clsx } from 'clsx'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-h1-regular',
        'text-h1-medium',
        'text-h1-bold',

        'text-h2-regular',
        'text-h2-medium',
        'text-h2-bold',

        'text-h3-regular',
        'text-h3-medium',
        'text-h3-bold',

        'text-h4-regular',
        'text-h4-medium',
        'text-h4-bold',

        'text-body01-regular',
        'text-body01-medium',
        'text-body01-bold',

        'text-body02-regular',
        'text-body02-medium',
        'text-body02-bold',

        'text-caption01-regular',
        'text-caption01-medium',
        'text-caption01-bold',

        'text-tiny01-regular',
        'text-tiny01-medium',
        'text-tiny01-bold'
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
