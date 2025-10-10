export type EventItem = {
  category: 'setup' | 'projects' | 'careers' | 'social'
  label: string
  start: string
  end: string
}

export const allEvents: EventItem[] = [
  { category: 'setup', label: 'Finalize Core Team', start: '2025-10-01', end: '2025-10-04' },
  { category: 'setup', label: 'Digital Infrastructure', start: '2025-10-05', end: '2025-10-08' },
  { category: 'setup', label: 'Event Logistics', start: '2025-10-09', end: '2025-10-10' },
  { category: 'setup', label: 'Marketing Blitz', start: '2025-10-10', end: '2025-10-13' },
  { category: 'setup', label: 'Inaugural Meeting', start: '2025-10-15', end: '2025-10-15' },
  { category: 'projects', label: 'GenAI Sprint: Phase 1', start: '2025-10-15', end: '2025-10-29' },
  { category: 'projects', label: 'GenAI Sprint: Phase 2', start: '2025-10-30', end: '2025-11-15' },
  { category: 'projects', label: 'GenAI Sprint: Phase 3', start: '2025-11-16', end: '2025-12-05' },
  { category: 'projects', label: 'Project Demo Day', start: '2025-12-13', end: '2025-12-13' },
  { category: 'careers', label: 'Cohort: Impact Resume', start: '2025-10-25', end: '2025-10-25' },
  { category: 'careers', label: 'Cohort: Portfolio Strategy', start: '2025-11-08', end: '2025-11-08' },
  { category: 'careers', label: 'Cohort: Interview Prep', start: '2025-11-22', end: '2025-11-22' },
  { category: 'careers', label: 'Cohort: Networking & Connect', start: '2025-12-06', end: '2025-12-06' },
  { category: 'social', label: 'End-of-Semester Social', start: '2025-12-19', end: '2025-12-19' }
]

export const categoryColors: Record<string, string> = {
  setup: 'rgba(107, 114, 128, 0.7)',
  projects: 'rgba(59, 130, 246, 0.7)',
  careers: 'rgba(16, 185, 129, 0.7)',
  social: 'rgba(239, 68, 68, 0.7)'
}

export const categoryBorders: Record<string, string> = {
  setup: 'rgba(107, 114, 128, 1)',
  projects: 'rgba(59, 130, 246, 1)',
  careers: 'rgba(16, 185, 129, 1)',
  social: 'rgba(239, 68, 68, 1)'
}