export interface IProfile {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  phoneVerified: boolean;
  emailVerified: boolean;
  profilePhoto: string;
  address: string;
  bio: string;
  state: string;
  city: string;
  accountType: string;
  occupation: string;
  experienceLevel: number;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}
