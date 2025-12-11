// Types for Service Journeys

export interface ServiceJourney {
  id: string;
  name: string;
  description: string;
  steps: ServiceStep[];
  status: JourneyStatus;
}

export interface ServiceStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  required: boolean;
}

export type JourneyStatus = 'not_started' | 'in_progress' | 'completed' | 'blocked';

export interface JourneyProgress {
  journeyId: string;
  currentStep: number;
  totalSteps: number;
  completedSteps: number;
  percentComplete: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  journeys: ServiceJourney[];
}
