import { Boundary } from '@/components/atoms/boundary'

export default function NotFound() {
  return (
    <Boundary color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className="text-lg font-bold">Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </Boundary>
  )
}
