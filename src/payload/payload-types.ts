/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
    admins: AdminAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    'contact-forms': ContactForm;
    admins: Admin;
    'registry-forms': RegistryForm;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'contact-forms': ContactFormsSelect<false> | ContactFormsSelect<true>;
    admins: AdminsSelect<false> | AdminsSelect<true>;
    'registry-forms': RegistryFormsSelect<false> | RegistryFormsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (Admin & {
        collection: 'admins';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface AdminAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-forms".
 */
export interface ContactForm {
  id: string;
  name: string;
  email: string;
  reason: string;
  message: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins".
 */
export interface Admin {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "registry-forms".
 */
export interface RegistryForm {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  primary_phone_number: string;
  preferred_contact_method: 'email' | 'phone';
  languages: ('en' | 'fr' | 'zh' | 'vn' | 'tl' | 'km' | 'ja' | 'ko')[];
  other_languages?: string | null;
  status: 'student' | 'unemployed' | 'employed';
  'estimated graduation date'?: string | null;
  profession:
    | 'acupuncturist'
    | 'anesthesiologist'
    | 'audiologist'
    | 'chiropractor'
    | 'clinical_psychologist'
    | 'dentist'
    | 'dermatologist'
    | 'dietitian'
    | 'emergency_medicine_physician'
    | 'endocrinologist'
    | 'family_medicine_physician'
    | 'gastroenterologist'
    | 'general_practitioner'
    | 'gynecologist'
    | 'hearing_specialist'
    | 'homeopath'
    | 'internal_medicine_physician'
    | 'massage_therapist'
    | 'naturopath'
    | 'neurologist'
    | 'nurse_practitioner'
    | 'obstetrician'
    | 'occupational_therapist'
    | 'oncologist'
    | 'ophthalmologist'
    | 'optometrist'
    | 'orthopedic_surgeon'
    | 'osteopath'
    | 'pain_management_specialist'
    | 'pediatrician'
    | 'podiatrist'
    | 'plastic_surgeon'
    | 'podiatric_surgeon'
    | 'psychiatrist'
    | 'psychologist'
    | 'pulmonologist'
    | 'radiologist'
    | 'reproductive_endocrinologist'
    | 'rheumatologist'
    | 'sleep_specialist'
    | 'speech_language_pathologist'
    | 'sports_medicine_physician'
    | 'surgical_specialist'
    | 'urologist'
    | 'vascular_surgeon'
    | 'wound_care_specialist'
    | 'wellness_coach'
    | 'yoga_therapist'
    | 'orthodontist'
    | 'palliative_care_specialist'
    | 'chronic_pain_specialist'
    | 'biofeedback_specialist'
    | 'nutritionist'
    | 'other';
  'other profession'?: string | null;
  sectors?: ('public' | 'private')[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'contact-forms';
        value: string | ContactForm;
      } | null)
    | ({
        relationTo: 'admins';
        value: string | Admin;
      } | null)
    | ({
        relationTo: 'registry-forms';
        value: string | RegistryForm;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'admins';
        value: string | Admin;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'admins';
        value: string | Admin;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  _verified?: T;
  _verificationToken?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-forms_select".
 */
export interface ContactFormsSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  reason?: T;
  message?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins_select".
 */
export interface AdminsSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "registry-forms_select".
 */
export interface RegistryFormsSelect<T extends boolean = true> {
  first_name?: T;
  last_name?: T;
  email?: T;
  primary_phone_number?: T;
  preferred_contact_method?: T;
  languages?: T;
  other_languages?: T;
  status?: T;
  'estimated graduation date'?: T;
  profession?: T;
  'other profession'?: T;
  sectors?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}