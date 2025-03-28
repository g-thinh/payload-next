import { fetchSearchResults } from '@/app/(frontend)/registry/search/actions'
import { Badge } from '../ui/badge'
import { Language, Profession } from '@/payload/payload-types'

type SearchResultsProps = {
  query: string
  currentPage: number
}

export default async function SearchResults({ query, currentPage }: SearchResultsProps) {
  const results = await fetchSearchResults({ query, currentPage })

  return (
    <ul className="flex flex-col w-full gap-4">
      {results.docs.map((result) => (
        <li
          key={result.id}
          className="flex flex-col w-full gap-2 p-4 border-2 border-black rounded-md"
        >
          <p>
            {result.first_name} {result.last_name}
          </p>
          {result.profession && (
            <p className="capitalize">{(result.profession.value as Profession).title}</p>
          )}
          {result.emails && result.emails.length > 0 && (
            <div className="flex gap-2">
              <span>Emails:</span>
              {result.emails.map((email) => (
                <p key={email.id}>{email.email}</p>
              ))}
            </div>
          )}
          {result.phone_numbers && result.phone_numbers.length > 0 && (
            <div className="flex gap-2">
              <span>Phone Numbers:</span>
              {result.phone_numbers.map((phone_number) => (
                <p key={phone_number.id}>{phone_number.phone_number}</p>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <span>Spoken Languages:</span>
            {result.languages?.map((language, index) => (
              <Badge key={`${result.id}-${index}`}>{(language.value as Language).heteronym}</Badge>
            ))}
          </div>
          <p>Joined since {new Date(result.createdAt).toDateString()}</p>
          <p>Last Updated on: {new Date(result.updatedAt).toDateString()}</p>
        </li>
      ))}
    </ul>
  )
}
