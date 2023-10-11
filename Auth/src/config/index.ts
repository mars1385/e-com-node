import { cleanEnv, num } from 'envalid';

// validate env
const envData = cleanEnv(process.env, {
  PORT: num({ default: 8000 }),
});

export default () => ({
  server: {
    port: envData.PORT,
  },
});
