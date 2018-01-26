import { createClient } from 'contentful';
import Data from '../../../config/data';

const client = createClient({
  space: Data.spaceid,
  accessToken: Data.token,
});

export default client;
