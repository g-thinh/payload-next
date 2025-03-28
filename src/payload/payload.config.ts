// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { resendAdapter } from '@payloadcms/email-resend'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { ContactForms } from './collections/ContactForms'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Admins } from './collections/Admins'
import { RegistryMembers } from './collections/RegistryMembers'
import { RegistryForms } from './collections/RegistryForms'
import { Professions } from './collections/Professions'
import { Languages } from './collections/Languages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'YAHPA',
    },
    components: {
      graphics: {
        Logo: {
          path: '@/components/graphics/Logo',
          exportName: 'Logo',
        },
        Icon: {
          path: '@/components/graphics/Icon',
          exportName: 'Icon',
        },
      },
    },
  },
  email: resendAdapter({
    defaultFromAddress: 'website@yahpa.org',
    defaultFromName: 'YAHPA - Web (testing)',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  collections: [
    Users,
    Media,
    ContactForms,
    Admins,
    RegistryForms,
    RegistryMembers,
    Professions,
    Languages,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, './payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
