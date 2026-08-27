export const EXAM_TYPES = [
  {
    value: 'Unit Examinations',
    label: 'UNIT EXAMINATION',
    description:
      "Assessments conducted after completing each unit to evaluate the student's understanding of that unit.",
  },
    {
    value: 'Practical Examinations',
    label: 'PRACTICAL EXAMINATION',
    description:
      "Assessments used to evaluate the student's practical skills and hands-on knowledge.",
  },
  {
    value: 'Practice Examinations - 1',
    label: 'PRACTICE EXAMINATION - 1',
    description:
      'Practice or mock assessments conducted to help students prepare for formal examinations.',
  },
    {
    value: 'Practice Examinations - 2',
    label: 'PRACTICE EXAMINATION - 2',
    description:
      'Practice or mock assessments conducted to help students prepare for formal examinations.',
  },
    {
    value: 'Practice Examinations - 3',
    label: 'PRACTICE EXAMINATION - 3',
    description:
      'Practice or mock assessments conducted to help students prepare for formal examinations.',
  },
  {
    value: 'Practice Examinations - 4',
    label: 'PRACTICE EXAMINATION - 4',
    description:
      'Practice or mock assessments conducted to help students prepare for formal examinations.',
  },
  {
    value: 'Practice Examinations - 5',
    label: 'PRACTICE EXAMINATION - 5',
    description:
      'Practice or mock assessments conducted to help students prepare for formal examinations.',
  },
  {
    value: 'Practice Examinations - 6',
    label: 'PRACTICE EXAMINATION - 6',
    description:
      'Practice or mock assessments conducted to help students prepare for formal examinations.',
  },
  {
    value: 'Practice Examinations - 7',
    label: 'PRACTICE EXAMINATION - 7',
    description:
      'Practice or mock assessments conducted to help students prepare for formal examinations.',
  },
  {
    value: 'Pilot Examinations',
    label: 'PILOT EXAMINATION',
    description:
      'Trial assessments conducted before formal examinations to evaluate readiness and identify areas for improvement.',
  },
] as const;

export type ExamType = (typeof EXAM_TYPES)[number]['value'];

export const DEFAULT_EXAM_TYPE: ExamType = 'Unit Examinations';

export const EXAM_TYPE_OPTIONS = EXAM_TYPES.map(({ value, label }) => ({
  value,
  label,
}));

export const getExamTypeDescription = (examType: string) =>
  EXAM_TYPES.find((type) => type.value === examType)?.description || '';
