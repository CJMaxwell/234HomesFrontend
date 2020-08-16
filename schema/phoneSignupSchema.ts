import { object, string, ref } from 'yup';

const schema = object().shape({
  code: string().length(4, 'Verification code must be 4 characters.').matches(/^\d+$/),
  password: string().min(8, 'Password must be minimum of 8 characters.'),
  confirmPassword: string().oneOf([ref('password')], 'Passwords must match'),
});

export default schema;
