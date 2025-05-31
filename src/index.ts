import { User } from './models/User';

const user: User = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  energyAssessment: {
    monthlyKWhUsage: 300,
    sunlightHours: 5,
  }
};

console.log('Hello, TypeScript World!');
console.log('User:', user);

// A simple function to test compilation
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Developer'));
