export interface IEducation {
  id: string;
  title: string;
  major: string;
  year: number;
  country: string;
  institution: string;
}

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
  education: IEducation[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserProjects {
  id: string;
  title: string;
  category: string;
  tags: string[];
  colors: string[];
  year: number;
  city: string;
  state: string;
  media: string;
  description: string;
}
