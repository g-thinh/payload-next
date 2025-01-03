import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function RegistryPage() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col max-w-xl gap-4 mb-8">
        <h1 className="text-3xl">Registry of Health Care Professionals</h1>
        <h2 className="font-bold">Discover healthcare that speaks your language</h2>
        <div className="flex justify-center my-12">
          <Button asChild size="lg">
            <Link href="/registry/search">Find a professional</Link>
          </Button>
        </div>
        <p>
          Our registry is designed specifically to help you find healthcare professionals in the
          Greater Montreal area who speak a range of Asian languages. Whether you&apos;re seeking a
          doctor, therapist, or specialist, our platform connects you with qualified professionals
          who understand your culture and language needs, making it easier to communicate and
          receive the care you deserve.
        </p>
        <p>Start your search today and experience healthcare that truly understands you!</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-xl p-6 my-2 border-2 rounded-md">
        <h3 className="mb-4 text-xl text-center">Are you a healthcare professional?</h3>
        <p className="mb-10 ">
          YAHPA invites you to become part of our online network, connecting you with patients and
          other professionals in the Greater Montreal area. By joining, you’ll be helping to bridge
          language barriers, making healthcare more accessible and impactful for diverse
          communities.
        </p>
        <Button asChild>
          <Link href="/signup">Join YAHPA</Link>
        </Button>
      </div>
    </section>
  )
}
