export interface User {
  id: string; // Or number, depending on DB strategy
  name: string;
  email: string;
  // Placeholder for energy assessment data
  energyAssessment?: {
    // Define structure based on expected questions
    monthlyKWhUsage?: number;
    sunlightHours?: number;
    roofType?: string;
    // ... other relevant questions
  };
}
