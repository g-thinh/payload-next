import { Field } from 'payload'

export const FirstNameField: Field = {
  name: 'first_name',
  label: 'First Name',
  type: 'text',
  required: true,
}

export const LastNameField: Field = {
  name: 'last_name',
  label: 'Last Name',
  type: 'text',
  required: true,
}

export const EmailField: Field = {
  name: 'email',
  type: 'email',
  unique: true,
  required: true,
}

export const ProfessionField: Field = {
  name: 'profession',
  label: 'Profession',
  type: 'select',
  options: [
    { label: 'Acupuncturist', value: 'acupuncturist' },
    { label: 'Anesthesiologist', value: 'anesthesiologist' },
    { label: 'Audiologist', value: 'audiologist' },
    { label: 'Chiropractor', value: 'chiropractor' },
    { label: 'Clinical Psychologist', value: 'clinical_psychologist' },
    { label: 'Dentist', value: 'dentist' },
    { label: 'Dermatologist', value: 'dermatologist' },
    { label: 'Dietitian', value: 'dietitian' },
    {
      label: 'Emergency Medicine Physician',
      value: 'emergency_medicine_physician',
    },
    { label: 'Endocrinologist', value: 'endocrinologist' },
    { label: 'Family Medicine Physician', value: 'family_medicine_physician' },
    { label: 'Gastroenterologist', value: 'gastroenterologist' },
    { label: 'General Practitioner', value: 'general_practitioner' },
    { label: 'Gynecologist', value: 'gynecologist' },
    { label: 'Hearing Specialist', value: 'hearing_specialist' },
    { label: 'Homeopath', value: 'homeopath' },
    {
      label: 'Internal Medicine Physician',
      value: 'internal_medicine_physician',
    },
    { label: 'Massage Therapist', value: 'massage_therapist' },
    { label: 'Naturopath', value: 'naturopath' },
    { label: 'Neurologist', value: 'neurologist' },
    { label: 'Nurse Practitioner', value: 'nurse_practitioner' },
    { label: 'Obstetrician', value: 'obstetrician' },
    { label: 'Occupational Therapist', value: 'occupational_therapist' },
    { label: 'Oncologist', value: 'oncologist' },
    { label: 'Ophthalmologist', value: 'ophthalmologist' },
    { label: 'Optometrist', value: 'optometrist' },
    { label: 'Orthopedic Surgeon', value: 'orthopedic_surgeon' },
    { label: 'Osteopath', value: 'osteopath' },
    { label: 'Pain Management Specialist', value: 'pain_management_specialist' },
    { label: 'Pediatrician', value: 'pediatrician' },
    { label: 'Podiatrist', value: 'podiatrist' },
    { label: 'Plastic Surgeon', value: 'plastic_surgeon' },
    { label: 'Podiatric Surgeon', value: 'podiatric_surgeon' },
    { label: 'Psychiatrist', value: 'psychiatrist' },
    { label: 'Psychologist', value: 'psychologist' },
    { label: 'Pulmonologist', value: 'pulmonologist' },
    { label: 'Radiologist', value: 'radiologist' },
    {
      label: 'Reproductive Endocrinologist',
      value: 'reproductive_endocrinologist',
    },
    { label: 'Rheumatologist', value: 'rheumatologist' },
    { label: 'Sleep Specialist', value: 'sleep_specialist' },
    {
      label: 'Speech-Language Pathologist',
      value: 'speech_language_pathologist',
    },
    { label: 'Sports Medicine Physician', value: 'sports_medicine_physician' },
    { label: 'Surgical Specialist', value: 'surgical_specialist' },
    { label: 'Urologist', value: 'urologist' },
    { label: 'Vascular Surgeon', value: 'vascular_surgeon' },
    { label: 'Wound Care Specialist', value: 'wound_care_specialist' },
    { label: 'Wellness Coach', value: 'wellness_coach' },
    { label: 'Yoga Therapist', value: 'yoga_therapist' },
    { label: 'Orthodontist', value: 'orthodontist' },
    { label: 'Palliative Care Specialist', value: 'palliative_care_specialist' },
    { label: 'Chronic Pain Specialist', value: 'chronic_pain_specialist' },
    { label: 'Biofeedback Specialist', value: 'biofeedback_specialist' },
    { label: 'Nutritionist', value: 'nutritionist' },
    { label: 'Other profession', value: 'other' },
  ],
  required: true,
}

export const LanguageField: Field = {
  name: 'language',
  label: 'Language',
  type: 'select',
  hasMany: true,
  options: [
    { label: 'English', value: 'en' },
    { label: 'Français', value: 'fr' },
    { label: '简体中文', value: 'zh' },
    { label: 'Tiếng Việt', value: 'vn' },
    { label: 'ᜆᜄᜎᜓᜄ᜔', value: 'tl' },
    { label: 'ភាសាខ្មែរ', value: 'km' },
    { label: '日本語', value: 'ja' },
    { label: '한국어', value: 'ko' },
  ],
  required: true,
}
